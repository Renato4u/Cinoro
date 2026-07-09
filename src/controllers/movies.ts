import { Request, Response } from 'express';
import { firestore } from '../firebase';
import { Movie } from '../models/movie';

export const getMovies = async (_req: Request, res: Response) => {
    try {
        const snapshot = await firestore.collection('movies').get();
        const movies = snapshot.docs.map((doc: any) => ({
            id: doc.id,
            ...doc.data(),
        })) as Movie[];

        res.status(200).json(movies);
    } catch (error) {
        console.error('Error al obtener las películas:', error);
        res.status(500).send('Error al obtener las películas');
    }
};
