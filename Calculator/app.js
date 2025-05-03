const http = require('http');
const { requestHadler } = require("./handler");
const server = http.createServer(requestHadler);
const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});