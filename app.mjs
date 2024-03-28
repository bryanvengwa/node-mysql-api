import express from 'express';

const app = express();

app.get('/', (request, response) => {
    response.send('hello world');
});
app.get('/blog', (request, response) => {
    response.send('hello Blog');
});


export default app;