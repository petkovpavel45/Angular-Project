const { Schema, model, Types: { ObjectId } } = require('mongoose');

const fondationSchema = new Schema({
    title: { type: String, required: true, minlength: [3, 'Description must be at least 3 characters long'] },
    description: { type: String, required: true, minlength: [10, 'Description must be at least 10 characters long'] },
    location: {type: String, required: true},
    img: { type: String, required: [true, 'Image URL is required'] },
    _ownerId: { type: ObjectId, ref: 'User', required: true }
},  { timestamps: { createdAt: 'created_at' } });

const Fondation = model('Fondation', fondationSchema);

module.exports = Fondation;