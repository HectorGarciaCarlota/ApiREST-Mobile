import './loadEnvironment.js';
import express from 'express';
import Mobile from './api/models/Mobile';

// Initialize express
const app = express();
const port = process.env.HOST_PORT ?? '3000';

app.get('/ping', (req, res) => res.send('pong'));

app.listen(process.env.HOST_PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});


export default app;
