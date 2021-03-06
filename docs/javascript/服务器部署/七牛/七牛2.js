const qiniu = require('qiniu');
const nanoid = require('nanoid');
const config = {
    qiniu: {
        AK: 'FYrE4MFXtfl8zDejp8SchE0WsIg_wQNXEjNjW43e',
        SK: 'pFuJ4kqY9aRspYtlw6WKMYjgi5vZ5uzXGEFQq8Qu',
        bucket: 'qiniu4dtlqzx',
    }
}

const bucket = config.qiniu.bucket
const mac = new qiniu.auth.digest.Mac(config.qiniu.AK, config.qiniu.SK)
const cfg = new qiniu.conf.Config()
const client = new qiniu.rs.BucketManager(mac, cfg)

const uploadToQiniu = async (url, key) => {
    return new Promise(function(resolve, reject) {
        client.fetch(url, bucket, key, (err, ret, info) => {
            if(err) {
                reject(err)
            } else {
                if(info.statusCode === 200) {
                    resolve({key})
                } else {
                    reject(info)
                }
            }
        })
    });
}
const movie = {
    video: 'https://img3.doubanio.com/view/photo/l_ratio_poster/public/p2506258944.jpg'
}
uploadToQiniu(movie.video, nanoid()+'.png')
