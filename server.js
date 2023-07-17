import express from 'express';
import mongoose from 'mongoose'; // Importer Mongoose

import evenementRoutes from './routes/evenement.js';
import categorieRoutes from './routes/categorie.js';
import notificationRoutes from './routes/notification.js';
import cors from 'cors';

import logger from 'morgan';
const app = express();
app.use(logger('dev'));

// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000;
const databaseName = 'manel';

// Cela afichera les requêtes MongoDB dans le terminal
mongoose.set('strictQuery', true);
// Utilisation des promesses ES6 pour Mongoose, donc aucune callback n'est nécessaire
// eslint-disable-next-line no-undef
mongoose.Promise = global.Promise;

// Se connecter à MongoDB
mongoose
  .connect(`mongodb://127.0.0.1:27017/${databaseName}`)
  .then(() => {
    // Une fois connecté, afficher un message de réussite sur la console
    console.log(`Connected to ${databaseName}`);
  })
  .catch(err => {
    // Si quelque chose ne va pas, afficher l'erreur sur la console
    console.log(err);
  });

app.use(express.json());
app.use(cors({
  origin: '*'
}));
app.use('/evenements', evenementRoutes);
app.use('/categorie', categorieRoutes);
app.use('/notifications', notificationRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});