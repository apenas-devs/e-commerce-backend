import express from 'express';
import userRoutes from './routes/userRoutes.js';

const app = express();

// Middleware para interpretar JSON
app.use(express.json());

// Rotas
app.use('/api', userRoutes);

// Inicializar o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
