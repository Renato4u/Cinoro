import express from 'express';
import usersRouter from './routes/users';

const app = express();

app.use(express.json());

// Ruta de cortesia para verificar que el servicio esta vivo
app.get('/', (_req, res) => {
    res.send('Microservicio de Usuarios (Cinoro) en ejecucion');
});

app.use('/api/users', usersRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Servicio de Usuarios corriendo en el puerto ${PORT}`));