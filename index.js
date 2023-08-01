const fs = require('fs-extra');
const os = require('os');

class UploadDiffServerPlugin {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    // 监听webpack的done事件
    compiler.hooks.done.tap('UploadDiffServerPlugin', () => {
      const files = fs.readdirSync('dist');
      const isWin = os.platform() === 'win32'
      let sourcePath = ''
      let targetPath = ''
      for (const file of files) {
        if(file === 'index.html') {
          sourcePath = 'dist\\index.html'
          if(isWin) {
            targetPath = 'D:\\server1\\index.html'
          } else {
            targetPath = '/mnt/d/server1/index.html'
          }
        } else {
          sourcePath = 'dist\\' + file
          if(isWin) {
            targetPath = 'D:\\assetsServer\\' + file
          } else {
            targetPath = '/mnt/d/assetsServer/' + file
          }
        }
        fs.copy(sourcePath, targetPath, { overwrite: true })
            .then(() => {
              console.log(`Successfully copied ${file}`);
            })
            .catch(err => {
              console.error('Error while copying files:', err);
            });
      }
    });
  }
}

module.exports = UploadDiffServerPlugin;