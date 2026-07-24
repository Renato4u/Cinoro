import { Router } from 'express';
import { getUsers, getUserById, createUser } from '../controllers/users';

const router = Router();

// GET  /api/users        -> lista todos los usuarios
// GET  /api/users/:id    -> obtiene un usuario por su id
// POST /api/users        -> crea un nuevo usuario
router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/', createUser);

export default router;