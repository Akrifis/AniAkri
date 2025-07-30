const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');

const app = express();
app.use(cors());

// Прокси для Shikimori
app.get('/api/shikimori/search', async (req, res) => {
  try {
    const { query } = req.query;
    const response = await axios.get(`https://shikimori.one/api/animes?search=${query}&limit=10`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Прокси для Kodik
app.get('/api/kodik/search', async (req, res) => {
  try {
    const { query } = req.query;
    const response = await axios.get(`https://kodikapi.com/search?token=ВАШ_ТОКЕН&title=${query}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
