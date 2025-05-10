const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use((req, res, next) => {
  console.log('Middleware 1: Request received', req.method, req.url);
  next();
}
);
app.use((req, res, next) => {
  console.log('Middleware 2: Processing request', req.method, req.url);
  next();
  
}
);
app.get('/',(req, res) => {
  console.log('GET request received');
  res.send('<h1>Handeling / for GET</h1>');
}
);

app.get('/contact-us', (req, res) => { 
  console.log('GET request received for /contact-us', req.method, req.url);
  res.send(`<h1>Contact Us</h1>
    <form action="/contact-us" method="POST">
    <input type="text" name="name" placeholder="Enter your name">
    <input type="email" name="email" placeholder="Enter your email">
    <input type="submit" value="Submit">`);
}
);
app.use(bodyParser.urlencoded());

app.post('/contact-us', (req, res) => {
  console.log('POST request received for /contact-us', req.method, req.url, req.body);
  res.send('<h1>Thank you for contacting us!</h1>');
}
);


const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});