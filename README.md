# 作用
#### 背景：有些公司为了避免接口跨域，index.html部署在和后端服务同一台机器。而其他的css、js、img等等。部署在其他服务器。
#### 说明：这个plugin，是在打包完成后，自动把index.html文件复制到D:/serve1文件夹中；其他文件，复制到D:/assetsServer文件夹中。
#### 备注：原本是要打包自动上传服务器的。考虑到代码通用性，就复制到对应的文件夹。

# 用法
#### webpack里配置：
```javascript
const UploadDiffServerPlugin = require('upload-diff-server-plugin')
plugins: [
  new UploadDiffServerPlugin()
]
```