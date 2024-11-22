import './loadEnvironment.js';
import express from 'express';
import Mobile from './api/models/Mobile';
import mobileRouter from './api/routers/MobileRouter';

// Initialize express
const app = express();
const port = process.env.HOST_PORT ?? '3000';

app.get('/ping', (req, res) => res.send('pong'));

app.use(express.json());

app.use('/mobile', mobileRouter);
app.listen(process.env.HOST_PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});


export default app;
