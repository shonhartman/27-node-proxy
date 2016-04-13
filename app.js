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
   */


   if (req.url ==="/") {



   /**
   *    If they are, use req.write() to send them a message
   *    explaining that they're on the root page.
   */

   res.write("<h1>You're on the root page</h1>")
 }


/**
   * 2. If they're looking at /other then use req.write() to
   *    send a message explaining that they're on the other page.
*/

   else {
     res.write("<h1>You're not on the root page</h1>")
   }

/**
   * 3. Remember to use req.end() after you're done using req.write()
   *    so that you actually send a response to the browser.
*/

   res.end;


/**
   * 4. You should be able to run npm run app and visit localhost:8000
   *    in your browser. At /, you should see the / message. At /other,
   *    you should see the other message.
   */

});

server.listen(8000);
