const express = require('express');
const app = express();

const PRIZE_URL = 'https://yourdomain.com/prize'; // replace with your actual prize page
const THANK_YOU_URL = 'https://yourdomain.com/thank-you'; // replace with your thank-you page

let count = 0;

app.get('/', (req, res) => {
  count += 1;
  if (count <= 3) {
    res.redirect(PRIZE_URL);
  } else {
    res.redirect(THANK_YOU_URL);
  }
});

app.listen(3000, () => {
  console.log('QR redirect is running!');
});
