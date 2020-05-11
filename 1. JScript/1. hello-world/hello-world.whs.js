// cscript .\hello-world.whs.js
// wscript .\hello-world.whs.js
var message = 'Hello World!'

// Add a debugger to debug this script (Visual Studio is required).
// cscript /D .\hello-world.whs.js
debugger

// I'm very happy that TypeScript team has made the type file for WHS (lib.scripthost.d.ts).
// What a surprise, thank you Microsoft.
WSH.Echo(message)
