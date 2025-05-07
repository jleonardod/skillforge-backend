const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./src/routes/userRoutes'); // <-- la ruta correcta

dotenv.config();

const app = express();
app.use(express.json()); // <-- necesario para leer JSON en el body

app.use('/api/users', userRoutes); // <-- monta las rutas de usuario

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
