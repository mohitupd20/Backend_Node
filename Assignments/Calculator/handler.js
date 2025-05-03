const {SumRequestHandler} = require("./sum");
const requestHadler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
        <head>
            <title>Calculator</title>
        </head> 
        <body>
        <h1>Welcome to Calculator</h1>
        <a href="/calculator">Go to Calculator</a>
        </body>
        </html>`);
    return res.end();
  } else if (req.url.toLowerCase() === "/calculator") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
        <head>
            <title>Calculator</title>
        </head> 
        <body>
        <h1>Here is the Calculator</h1>
        <form action="/calculate-result" method="POST">
            <input type="text" id="num1" placeholder="Enter first number">
            <input type="text" id="num2" placeholder="Enter second number">
            <input type="submit" value="Sum">
        </form>
        </body>
        </html>`);
    return res.end();
  } else if (req.url === "/calculate-result" && req.method === "POST") {
    SumRequestHandler(req, res);
    return;
  }

  res.setHeader("Content-Type", "text/html");
  res.write(`<html>
        <head>
            <title>Calculator</title>
        </head> 
        <body>
        <h1>404 Page doesn't Exist</h1>
        <a href="/">Go to Home</a>
        </body>
        </html>`);
};
exports.requestHadler = requestHadler;
