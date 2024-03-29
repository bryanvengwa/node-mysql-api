import express from 'express';
import postsRoute from './routes/post.mjs';
import bodyParser from 'body-parser';

const app = express();
app.use('/post', postsRoute);
app.use(bodyParser.json());

export default app;
