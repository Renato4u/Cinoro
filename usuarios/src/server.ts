import express from 'express';

const app = express();

// Permite que Express lea el cuerpo JSON de las peticiones (POST).
// Sin esto, req.body llega vacío.
app.use(express.json());

// Ruta de cortesia para verificar que el servicio esta vivo
app.get('/', (_req, res) => {
    res.send('Microservicio de Usuarios (Cinoro) en ejecucion');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Servicio de Usuarios corriendo en el puerto ${PORT}`));