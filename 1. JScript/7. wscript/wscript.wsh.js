//*************************************************
// File:     Properties.js (WSH sample in JScript)
// Author:   (c) G. Born
//
// Showing the properties of the WScript object
// in a dialog box
//*************************************************

var Message
var vbInformation = 64    // A couple of constants
var vbOKOnly = 0

// Collect the properties of the WScript object.
// Read the host properties.
Message = "WScript host properties\n\n"
Message = Message + "Application: " + WScript.Application + "\n"
Message = Message + "Name: " + WScript.Name + "\n"
Message = Message + "Version: " + WScript.Version + "\n"
Message = Message + "FullName: " + WScript.FullName + "\n"
Message = Message + "Path: " + WScript.Path + "\n"

// Get interactive status.
if (WScript.Interactive) {
  Message = Message + "Interactive: true" + "\n"
} else {
  Message = Message + "Interactive: false" + "\n"
}

// Get the script properties.
Message = Message + "\n"
Message = Message + "WScript script properties\n\n"
Message = Message + "ScriptFullName: " + WScript.ScriptFullName + "\n"
Message = Message + "ScriptName: " + WScript.ScriptName + "\n"

// Initialize title.
var Title = "WSH sample  " + WScript.ScriptName + " - by G. Born"
var objAdr = WScript.CreateObject("WScript.Shell")
var tmp = objAdr.Popup(Message, vbInformation + vbOKOnly, Title)

//*** End
