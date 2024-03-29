require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// GenericController will need replacing with whatever you choose to rename it to.
const GenericController = require('./Controller/GenericController'); 

mongoose.connect(process.env.DB_URL, {
}).then(() => {
    console.log('MongoDB Connected');
}).catch(error => {
    console.log(`MongoDb Connection Error ${error}`);
});

const app = express();

app.use(express.json());
app.use(cors());

// Define The API Routes

// Controller/GenericController.js will need renaming

// rename the GenericController to your model and rename the createGeneric to your model in the controller file
app.post('/api/endpoint', GenericController.createGeneric); // route handler will need renaming 

// Rename all the endpoints.
app.get('/api/endpoint', GenericController.getAllGenerics); // route handler will need renaming 

app.get('/api/endpoint/:id', GenericController.getGenericById); // route handler will need renaming 

app.put('/api/endpoint', GenericController.updateGenericById); // route handler will need renaming 

app.delete('/api/endpoint/:id', GenericController.deleteGenericById); // route handler will need renaming 

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
