const GenericModel = require('../Model/GenericSchema'); // Rename 'GenericModel' and 'GenericSchema' to fit your API, e.g., 'Recipe' for a recipe API

// Rename 'createGeneric' to match your model, e.g., 'createRecipe'
exports.createGeneric = async (req, res) => {
    try {
        // Instantiate your model with request body. Rename 'generic' to fit your model, e.g., 'recipe'
        const generic = new GenericModel(req.body);

        const createdGeneric = await generic.save();

        res.status(201).json(createdGeneric);
    } catch (error) {
        res.status(400).json({
            error: error,
            message: 'Error creating new item' // Consider specifying the item type
        });
    }
};

exports.getAllGenerics = async (req, res) => {
    try {
        const generics = await GenericModel.find(); // Rename 'generics' to match your model plural form

        res.status(200).json(generics);
    } catch (error) {
        res.status(500).json({
            error: error,
            message: 'Error fetching items' // Specify the item type
        });
    }
};

exports.getGenericById = async (req, res) => {
    try {
        const genericId = req.params.id;

        const generic = await GenericModel.findById(genericId);

        if (!generic) {
            return res.status(404).json({
                message: 'Item not found' // Specify the item type
            });
        }

        res.status(200).json(generic);
    } catch (error) {
        res.status(500).json({
            error: error,
            message: 'Error fetching item' // Specify the item type
        });
    }
};

exports.updateGenericById = async (req, res) => {
    try {
        const genericId = req.params.id.trim();

        const updatedGeneric = await GenericModel.findByIdAndUpdate(genericId, req.body, { new: true });

        if (!updatedGeneric) {
            return res.status(404).json({
                message: 'Item not found' // Specify the item type
            });
        }

        res.status(200).json(updatedGeneric);
    } catch (error) {
        res.status(500).json({
            error: error,
            message: 'Error updating item' // Specify the item type
        });
    }
};

exports.deleteGenericById = async (req, res) => {
    try {
        const genericId = req.params.id.trim();

        const deletedGeneric = await GenericModel.findByIdAndDelete(genericId);

        if (!deletedGeneric) {
            return res.status(404).json({
                message: 'Item not found' // Specify the item type
            });
        }

        res.status(200).json({
            message: 'Item deleted successfully' // Specify the item type
        });
    } catch (error) {
        res.status(500).json({
            error: error,
            message: 'Error deleting item' // Specify the item type
        });
    }
};
