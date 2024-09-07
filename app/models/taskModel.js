const db = require('../../config/db');
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: { type: String, require: true },
    description: { type: String, require: true },
    status: { type: String, default: 'non-favorite' },
    dueDate: { type: Date },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', require: true },

}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);