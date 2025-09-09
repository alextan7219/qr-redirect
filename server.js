const express = require('express');
const app = express();

const PRIZE_URL = 'https://www.youtube.com/watch?v=YFp8MjrfshU'; // replace with your actual prize page
const THANK_YOU_URL = 'https://www.facebook.com/alex.tan.522804'; // replace with your thank-you page

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
