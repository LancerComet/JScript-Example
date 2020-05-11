// jsc directory.js

import System.IO;

var cwd = Directory.GetCurrentDirectory()
var list = Directory.GetFiles(cwd)
for (var i = 0, length = list.length; i < length; i++) {
  var item = list[i]
  print(item)
}
