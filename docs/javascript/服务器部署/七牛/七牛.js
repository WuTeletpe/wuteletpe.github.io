var qiniu = {
    ACCESS_KEY: 'FYrE4MFXtfl8zDejp8SchE0WsIg_wQNXEjNjW43e',
    SECRET_KEY: 'pFuJ4kqY9aRspYtlw6WKMYjgi5vZ5uzXGEFQq8Qu',
    bucket: 'qiniu4dtlqzx',
}

const qiniu_sdk = require('qiniu')

qiniu_sdk.conf.ACCESS_KEY = qiniu.ACCESS_KEY
qiniu_sdk.conf.SECRET_KEY = qiniu.SECRET_KEY

// 要上传的空间
const bucket = qiniu.bucket

// 文件前缀
const prefix = 'image/activity/'

// 生成上传文件的 token
const token = (bucket, key) => {

    const policy = new qiniu_sdk.rs.PutPolicy({ isPrefixalScope: 1, scope: bucket + ':' + key })


    return policy.uploadToken()
}

const config = new qiniu_sdk.conf.Config()

const upload_file = (file_name, file_path) => {
    // 保存到七牛的地址
    const file_save_path = prefix + file_name

    // 七牛上传的token
    const up_token = token(bucket, file_save_path)

    const extra = new qiniu_sdk.form_up.PutExtra()

    const formUploader = new qiniu_sdk.form_up.FormUploader(config)

    // 上传文件
    formUploader.putFile(up_token, file_save_path, file_path, extra, (err, ret) => {
        if (!err) {
            // 上传成功， 处理返回值
            console.log(ret);
        } else {
            // 上传失败， 处理返回代码
            console.error(err);
        }
    });
}

upload_file('test.png', './test.png')
