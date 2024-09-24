//************************************************
// File:    Welcome.js (WSH sample in JScript)
// Author:  (c) G. Born
//
// Using Popup to create a welcome dialog box
// containing the current date
//************************************************

// Define "constants" for Popup.
var vbOKOnly = 0;              // OK button
var vbInformation = 64;        // Information icon

// Create array variables for the message strings.
var cmonth = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]

var cday = [
  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
]

var name = "Born";  // Set user name.
var firstname = "G.";

// Create a welcome message.
var title = "Welcome, " + firstname + " " + name;

// Create object to use the Popup method.
var objAdr = WScript.CreateObject("WScript.Shell");

var mydate = new Date();           // Create date variable.
var weekday = mydate.getDay();     // Retrieve day of the week.
var day = mydate.getDate();        // Day
var month = mydate.getMonth();     // Month (start with 0)
var year = mydate.getYear();       // Year

var text = "Today is " + cday[weekday]  + ", "
        + cmonth[month] + " " + day + ", " + year + "\n"
        + "Windows has been launched";

// Create the dialog box using Popup; define 10-second time-out.
objAdr.Popup(text, 10, title, vbOKOnly + vbInformation);

//*** End

