const { query } = require('express');
const Task = require('../models/taskModel');

//Create Controller
exports.createTask = async (req, res) => {
    try {
        const task = await Task.create(req, body);
        res.status(200).json(task);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

//Get Controller
// _id is a default id from mongodb
exports.getTask = async (req, res) => {
    try {
        const getTask = await Task.find({
            userId: req.user._id
        });
        res.status(200).json(getTask);

    } catch (e) {
        res.status(400).json({ error: 'You are not Authorized : ' + e.message });
    }
}

exports.updateTask = async (req, res) => {
    try {
        const updateTask = await Task.findByIdAndUpdate(
            req.params.id,
            req.body, {
            new: true
        });
        res.status(200).json(updateTask);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

exports.deleteTask = async (req, res) => {
    try {
        const deleteTask = await Task.findByIdAndDelete(
            req.params.id
        );
        res.status(200).json({ message: 'Task Deleted Successfully! :)' })
    } catch (e) {
        res.status(400).json({ error: e.message })
    }
}
