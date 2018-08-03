import express from 'express';
import constants from './config/constants';
import './config/database';
import middlewareConfig from './config/middlewares';

const app = express();

middlewareConfig(app);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(constants.PORT, err => {
    if (err) throw err;
        else {
            console.log(`
                Server running on port ${constants.PORT}
                ---
                Running on ${process.env.NODE_ENV}
                ---
                Make something great!
            `);
        }
});