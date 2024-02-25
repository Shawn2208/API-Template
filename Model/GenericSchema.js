const mongoose = require('mongoose');

// Renaming PlaceholderSchema to GenericSchema
const GenericSchema = new mongoose.Schema({
    // Keeping the structure generic but customizable
    title: {
        type: String,
        required: true, // You can adjust the requirement as per your data model
    },
    other: {
        type: String,
        required: true, // This is just a placeholder, rename 'other' to something relevant to your data model
    },
    description: {
        array1: [String], // Example of an array of strings, rename 'array1' to reflect its content
        array2: [String] // Another example of an array of strings, rename 'array2' accordingly
    }
});

// Renaming NameOfCollection to GenericModel to reflect the generic nature of this schema
const GenericModel = mongoose.model('GenericModel', GenericSchema); // Replace 'GenericModel' with the actual name of your collection

// Exporting so it can be used in the controller file
module.exports = GenericModel;
