// via  https://github.com/ivens/mkdirp

var fs = require('fs');
var path = require('path');

// mkdir
exports.mkdirpSync = function (dstDir, mode) {
  mode = mode || 0777;
  // Attention fs.mkdirSync return undefined
  return fs.existsSync(dstDir) || (this.mkdirpSync(path.dirname(dstDir)) && (fs.mkdirSync(dstDir, mode) || 1));
}
