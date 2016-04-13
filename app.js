import http from 'http';
import url from 'url';

let server = http.createServer(function(req, res) {

  let parsedUrl = url.parse(req.url, true);

  /**
   * Let's create a simple webserver that returns a different
   * message based on what URL they ask for.
   *
   * 1. parsedUrl.path contains the path the user is requesting.
   *    Setup an if statement to check if they're looking at /
   *
   *    If they are, use req.write() to send them a message
   *    explaining that they're on the root page.
   *
   * 2. If they're looking at /other then use req.write() to
   *    send a message explaining that they're on the other page.
   *
   * 3. Remember to use req.end() after you're done using req.write()
   *    so that you actually send a response to the browser.
   *
   * 4. You should be able to run npm run app and visit localhost:8000
   *    in your browser. At /, you should see the / message. At /other,
   *    you should see the other message.
   */

});

server.listen(8000);

//////////////////////////////////////////////////////////////////////////////
//LECTURE NOTES
// proxy.js

import http from 'http';

let server = http.createServer((req, res) => {

    if (req.url ==="/") {
      res.write("<h1>You're on the root page</h1>")
    }
    else {
      res.write("You're not on the root page")
    }

    // console.log(req);
  // console.log("Somebody tried to get a file");

  // res.write("<h1>Hello this is dog</h1>");
  // res.write("<p>Banana Gram</p>");
  // res.end();

});

server.listen(8000);

//npm run app
//"somebody tried to get a file"

//////////////////////////////////////////////////////////////////////////////
//app.js

import fs from 'fs';

let server = http.createServer((req, res) => {
  if (req.url ==="/") {
    fs.readFile('./root')...
  }
})

//DOCS
//node-http-proxy via github

//////////////////////////////////////////////////////////////////////////////
//app.js

let proxy = httpProxy.createProxyServer({});

let server = httpProxy.createServer((req, res) => {

  proxy.web(req, res, {
    target: "http://www.google.com"
  });

});

server.listen(8000);

//iterm
//npm run app

//////////////////////////////////////////////////////////////////////////////
//app.js

let proxy = httpProxy.createProxyServer({});

let server = httpProxy.createServer((req, res) => {

    //http://www.openweathermap...
    //APPID=d494...
    let parsedUrl = url.parse(req.url, true);
    parsedUrl.query.APPID = 'd494...';
    console.log(parsedUrl);
    parsedUrl.search = null;
    req.url = url.format(parsedUrl);

  proxy.web(req, res, {
    target: "http://www.openweathermap/../.."

  });

});

server.listen(8000);
