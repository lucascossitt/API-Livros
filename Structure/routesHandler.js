const path = require('path')
const filterFiles = require('filter-files')
const isDir = require('is-directory')
const isRouteFile = fileName => /((routes)|(route))\.js$/.test(fileName)

const getRoutesFilesFromDirname = dirName => {
    return filterFiles.sync(dirName, (fp, dir, files, recurse) => {
        if (isRouteFile(fp)) return true

        return isDir.sync(path.join(dir, fp))
    }, true);
};

const loadRoutesByPath = (server, dirName) => {
    getRoutesFilesFromDirname(dirName).forEach(fileName => {
        require(fileName)(server)
    });
};
module.exports = loadRoutesByPath
