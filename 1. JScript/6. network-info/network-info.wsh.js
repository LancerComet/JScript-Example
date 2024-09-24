// Code from https://www.informit.com/articles/article.aspx?p=26655&seqNum=5
// cscript.exe network-info.js
// wscript.exe network-info.js

var WshNetwork = WScript.CreateObject('WScript.Network')
var Drives = WshNetwork.EnumNetworkDrives()
var Printers = WshNetwork.EnumPrinterConnections()

WScript.Echo('User Domain is: ' + WshNetwork.UserDomain)
WScript.Echo('Computer Name is: ' + WshNetwork.ComputerName)
WScript.Echo('User Name is: ' + WshNetwork.UserName)

WScript.Echo('')
WScript.Echo('Network drive mappings on computer: ')

for (var i = 0; i < Drives.Count(); i += 2) {
  WScript.Echo('Drive ' + Drives.Item(i) + ' = ' + Drives.Item(i + 1))
}

WScript.Echo('')
WScript.Echo('Network printer mappings on computer: ')

for (var i=0; i<Printers.Count(); i += 2) {
  WScript.Echo('Port ' + Printers.Item(i) + ' = ' + Printers.Item(i + 1))
}

WScript.Echo('')
WScript.Echo('Done.')
