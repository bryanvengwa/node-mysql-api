import express from 'express';
import postsRoute from './routes/post.mjs';

const app = express();
app.use('/post', postsRoute)

export default app;
