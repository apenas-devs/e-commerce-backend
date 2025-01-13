import express from 'express';
import cors from 'cors'

const app = express();
const port = 3000;

const allowedOrigins = ['http://localhost:5173',
    'http://localhost:3000']

const corsOptions = {
    origin: function (origin, callback) {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            console.log('Origin:', origin);
            callback(new Error('Not allowed by CORS'));
        }
    },
};

app.use(cors(corsOptions));
app.use(express.json())

app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`);
});
