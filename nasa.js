import http from 'http';
import url from 'url';

let proxy = httpProxy.createProxyServer({});

let server = http.createServer(function(req, res) {

  let parsedUrl = url.parse(req.url, true);

  /**
   * We want to proxy our requests to NASA's API,
   * but we need to add our API key as a querystring parameter.
   *
   * 1. Add your API key to parsedUrl.query by adding a
   *    property called api_key to it.
   *
   * 2. Set parsedUrl.search to null. We want to make sure it
   *    uses our querystring params, and if search is set, it
   *    will ignore them.
   *
   * 3. Set req.url to url.format(parsedUrl)
   *
   *    This is how we apply the changes we made
   *
   * 4. You should be able to run npm run nasa and visit localhost:8000
   *    in your browser. At /planetary/apod you should see data for the
   *    Astronomy Picture of the Day.
   */

   proxy.web(req, res, {
     target: 'https://api.nasa.gov',
     agent  : https.globalAgent,
     headers: {
       host: 'api.nasa.gov'
     }
   });


});

server.listen(8000);

////////////////////////////////////////////////////////////////////////////////////////////
//LECTURE NOTES
// parse = gets more detail
//url.split("/")

//app.js

let proxy = httpProxy.createProxyServer({});

let server = httpProxy.createServer((req, res) => {
  // api_key = ...
    let parsedUrl = url.parse(req.url, true);
    parsedUrl.query.api_key = 'd494...';
    // console.log(parsedUrl);
    parsedUrl.search = null;
    req.url = url.format(parsedUrl);

  proxy.web(req, res, {
    target: "http://www.api/nasa/../.."

  });

});

server.listen(8000);

////////////////////////////////////////////////////////////////////////////////////////////
//one proxy to call both nasa & weather
//app.js

let proxy = httpProxy.createProxyServer({});

let server = httpProxy.createServer((req, res) => {
  // api_key = ...
    const parsedUrl = url.parse(req.url, true);
    const route = parsedUrl.pathname.split("/")[1];
    parsedUrl.search = null;


const parsedUrl = url.parse(req.url, true);
let splitUrl = parsedUrl.pathname.split("/");
const route = splitUrl[1];
splitUrl.splice(1, 1);
const correctUrl = splitUrl.join("/");

parsedUrl.pathname = correctUrl;
parsedUrl.search = null;

    if (route === "weather") {
      //APPID = d494...
      // /data
      parsedUrl.query.APPID = 'd494...';
      parsedUrl.search = null;
      //url.split("/").splice
      req.url = url.format(parsedUrl);

      proxy.web(req, res { target })
    }

  else if (route === "nasa") {

  }

    // parsedUrl.query.api_key = 'd494...';
    // console.log(parsedUrl);
    // parsedUrl.search = null;
    // req.url = url.format(parsedUrl);

  nasaProxy.web(req, res, {
    target: "http://www.api/nasa/../.."

  });

});
