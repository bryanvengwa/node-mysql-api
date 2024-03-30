import express from 'express';
import postsRoute from './routes/post.mjs';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
app.use('/post', postsRoute);

export default app;
