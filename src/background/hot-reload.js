/*
 * @Author: Penk
 * @LastEditors: Penk
 * @LastEditTime: 2022-07-05 20:27:02
 * @Desc：改文件主要用于热加载，原理是chrome通过定时器，轮训查看插件文件夹有无变动，有的话就reload一次，减少人工~
 * @FilePath: \vue-chrome-ext\src\background\hot-reload.js
 */

// 代码来源：https://github.com/xpl/crx-hotreload/edit/master/hot-reload.js
const filesInDirectory = dir => new Promise(resolve =>
    dir.createReader().readEntries(entries =>
        Promise.all(entries.filter(e => e.name[0] !== '.').map(e =>
            e.isDirectory ?
                filesInDirectory(e) :
                new Promise(resolve => e.file(resolve))
        ))
            .then(files => [].concat(...files))
            .then(resolve)
            .catch(() => { })
    )
)

const timestampForFilesInDirectory = dir =>
    filesInDirectory(dir).then(files =>
        files.map(f => f.name + f.lastModifiedDate).join()).catch(() => { })

const reload = () => {
    window.chrome.tabs.query({
        active: true,
        currentWindow: true
    }, tabs => { // NB: see https://github.com/xpl/crx-hotreload/issues/5
        if (tabs[0]) {
            window.chrome.tabs.reload(tabs[0].id)
        }
        window.chrome.runtime.reload()
    })
}

const watchChanges = (dir, lastTimestamp) => {
    timestampForFilesInDirectory(dir).then(timestamp => {
        if (!lastTimestamp || (lastTimestamp === timestamp)) {
            setTimeout(() => watchChanges(dir, timestamp), 3000) // retry after 1s
            console.log("插件文件夹没有变动，1秒后再检查...");
        } else {
            reload()
            console.log("插件文件夹有变动...");
        }
    })
}

window.chrome.management.getSelf(self => {
    if (self.installType === 'development') {
        window.chrome.runtime.getPackageDirectoryEntry(dir => watchChanges(dir))
    }
})