//************************************************
// File:    Args.js (WSH sample in JScript)
// Author:  (c) G. Born
//
// Showing script arguments in a dialog box
//************************************************

// cscript arguments.js arg1 arg2 arg3 ...

var text = 'Arguments:\n'

var objArgs = WScript.Arguments
for (var i = 0; i < objArgs.Length; i++) {
  text = text + objArgs(i) + '\n'
}

WScript.Echo(text)
