const express = require('express');
const app = express();
const fetch = require('node-fetch');

const PRIZE_URL = 'https://www.youtube.com/watch?v=YFp8MjrfshU';
const THANK_YOU_URL = 'https://www.facebook.com/alex.tan.522804';
const FIREBASE_URL = 'https://qr-redirect-58627-default-rtdb.asia-southeast1.firebasedatabase.app/scanCount.json
'; // replace with your actual URL

app.get('/', async (req, res) => {
  let count = 0;

  // Get current count
  const response = await fetch(FIREBASE_URL);
  const data = await response.json();
  count = data || 0;

  // Increment and update count
  await fetch(FIREBASE_URL, {
    method: 'PUT',
    body: JSON.stringify(count + 1),
    headers: { 'Content-Type': 'application/json' }
  });

  // Redirect logic
  if (count < 3) {
    res.redirect(PRIZE_URL);
  } else {
    res.redirect(THANK_YOU_URL);
  }
});

app.listen(3000, () => {
  console.log('QR redirect is running!');
});
