// 1. 回调函数
const fs = require('fs');
function readFile(cb) {
    fs.readFile('./package.json', (err, data) => {
        if (err) {
            return cb(err)
        }
        else {
            cb(null, data)
        }
    }))
}

readFile((err, data) => {
    if(!err) {
        data = JSON.parse(data)
        console.log(data.name);
    }
})
// 2. Promise
function readFileAsync(path) {
    return new Promise(function(resolve, reject) {
        fs.readFile(path, (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    });
}
// 3. co + Generator Funcion + Promise
const co = require('co');
const util = require('util');

co(function *() {
    let data = yield util.promisify(fs.readFile)('./package.json')
    data = JSON.parse(data)
    console.log(data.name);
})

// 4. Async
const readAsync = util.promisify(fs.readFile)

async function init() {
    let data = await readAsync('./package.json')
    data = JSON.parse(data)
    console.log(data.name);
}
