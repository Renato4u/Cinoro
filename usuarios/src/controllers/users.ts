import { Request, Response } from 'express';
import { firestore } from '../firebase';
import { User } from '../models/user';

// Listar todos los usuarios
export const getUsers = async (_req: Request, res: Response) => {
    try {
        const snapshot = await firestore.collection('users').get();
        const users = snapshot.docs.map((doc: any) => ({
            id: doc.id,
            ...doc.data(),
        })) as User[];

        res.status(200).json(users);
    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
        res.status(500).send('Error al obtener los usuarios');
    }
};

// Obtener un usuario por su identificador
export const getUserById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id as string;
        const doc = await firestore.collection('users').doc(id).get();

        if (!doc.exists) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        const user = { id: doc.id, ...doc.data() } as User;
        res.status(200).json(user);
    } catch (error) {
        console.error('Error al obtener el usuario:', error);
        res.status(500).send('Error al obtener el usuario');
    }
};

// Crear un nuevo usuario
export const createUser = async (req: Request, res: Response) => {
    try {
        const { name, email } = req.body as User;

        // Validacion basica de los datos recibidos
        if (!name || !email) {
            return res.status(400).json({ message: 'Se requieren los campos name y email' });
        }

        const newUser: User = {
            name,
            email,
            createdAt: new Date().toISOString(),
        };

        const docRef = await firestore.collection('users').add(newUser);

        res.status(201).json({ id: docRef.id, ...newUser });
    } catch (error) {
        console.error('Error al crear el usuario:', error);
        res.status(500).send('Error al crear el usuario');
    }
};