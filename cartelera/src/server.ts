import express, { Request, Response } from 'express';
import { getMovies } from './controllers/movies';

const app = express();

app.get('/api/movies', getMovies);

app.listen(3000, () => console.log('Server running on port 3000'));
