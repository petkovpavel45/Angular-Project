// const express = require('express');
// const mongoose = require('mongoose');

// const cors = require('./middlewares/cors');
// const authController = require('./controllers/authController');
// const dataController = require('./controllers/dataController');
// const trimBody = require('./middlewares/trimBody');
// const session = require('./middlewares/session');


// const connectionString = 'mongodb://127.0.0.1:27017/food-donation';

// start();

// async function start() {
//     await mongoose.connect(connectionString);
//     console.log('Database connected');

//     const app = express();

//     app.use(express.json());
//     app.use(cors());
//     app.use(trimBody());
//     app.use(session());

//     app.get('/', (req, res) => {
//         res.json({ message: 'REST service operational' });
//     });

//     app.use('/users', authController);
//     app.use('/data/fondations', dataController);

//     app.listen(3030, () => console.log('REST service started'));
// }

global.__basedir = __dirname;
require('dotenv').config()
const dbConnector = require('./config/db');
// const mongoose = require('mongoose');
const apiRouter = require('./router');
const cors = require('cors');
// const config = require('./config/config');
const { errorHandler } = require('./utils');

dbConnector()
  .then(() => {
    const config = require('./config/config');

    const app = require('express')();
    require('./config/express')(app);

    app.use(cors({
      origin: config.origin,
      credentials: true
    }));

    app.use('/api', apiRouter);

    app.use(errorHandler);

    app.listen(config.port, console.log(`Listening on port ${config.port}!`));
  })
  .catch(console.error);