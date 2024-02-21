const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.post('/api/apps/:appId/run', async (req, res) => {
  const { appId } = req.params;
  const { body } = req;

  try {
    const response = await axios.post(`https://trypromptly.com/api/apps/${appId}/run`, body, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token 43d2b92635f906b9fed1eac5232eddc2d1e512c9' // Replace with your actual token
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});
