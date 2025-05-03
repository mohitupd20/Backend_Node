const SumRequestHandler = (req, res) => {
    const body = [];
    req.on("data", (chunk) => body.push(chunk));
    req.on("end", () => {
        const bodyStr = Buffer.concat(body).toString();
        const parsedBody = new URLSearchParams(bodyStr);
        const bodyObj = Object.fromEntries(parsedBody);
        const result = Number(bodyObj.first) + Number(bodyObj.second);
        console.log(result);
        res.write(`<html>
            <head>
                <title>Calculator</title>
            </head> 
            <body>
            <h1>Here is the Result</h1>
            <h2>${bodyObj.first} + ${bodyObj.second} = ${result}</h2>
            <form action="/calculator" method="GET">
                <input type="submit" value="Go to Calculator">
            </form>
            <form action="/" method="GET">
                <input type="submit" value="Go to Home">
            </form>
            </body>
            </html>`);
        res.end();
    });
}
exports.SumRequestHandler = SumRequestHandler;