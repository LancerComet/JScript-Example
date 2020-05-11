// This script will download google's homepage then save to "webpage.html".
// Use "jsc .\http-request.js" to compile this script.

import System;
import System.Net;
import System.Net.Http;
import System.IO;

var url = 'https://www.google.com'
var fileName = './webpage.html'

fetchWebpage()

function fetchWebpage () {
  print('Fetching ' + url + '...')

  var http = new HttpClient()
  var requestMessage = new HttpRequestMessage(
    HttpMethod.Get,
    new Uri(url)
  )

  try {
    var result = http.SendAsync(requestMessage).Result
    var htmlString = result.Content.ReadAsStringAsync().Result
    File.WriteAllText(fileName, htmlString)
    print('Done.')
  } catch (error) {
    print('Got error when making request:')
    print(error)
  }
}
