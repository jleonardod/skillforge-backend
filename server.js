const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./src/routes/userRoutes'); // <-- la ruta correcta
const progressRoutes = require('./src/routes/progressRoutes'); // <-- la ruta correcta
const courseRoutes = require('./src/routes/courseRoutes'); // <-- la ruta correcta
const moduleRoutes = require('./src/routes/moduleRoutes'); // <-- la ruta correcta
const lessonRoutes = require('./src/routes/lessonRoutes'); // <-- la ruta correcta

dotenv.config();

const app = express();
app.use(express.json()); // <-- necesario para leer JSON en el body

app.use('/api/users', userRoutes); // <-- monta las rutas de usuario
app.use('/api/progress', progressRoutes); // <-- monta las rutas de progreso
app.use('/api/courses', courseRoutes); // <-- monta las rutas de cursos
app.use('/api/modules', moduleRoutes); // <-- monta las rutas de módulos
app.use('/api/lessons', lessonRoutes); // <-- monta las rutas de lecciones

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
