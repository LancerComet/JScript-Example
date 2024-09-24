import System;

var process = System.Diagnostics.Process.Start('iexplore.exe', 'www.google.com')
print('Process started, id: ' + process.Id)

process.WaitForExit()
print('Process exit.')

