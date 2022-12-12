const dataController = require('express').Router();

// const { hasUser } = require('../middlewares/guards');
const { getAll, create, getById, update, deleteById, getByUserId } = require('../services/itemService');
const { parseError } = require('../utils/parser');


async function getAllItems(req, res) {
    let items = [];
    if (req.query.where) {
        const userId = JSON.parse(req.query.where.split('=')[1]);
        items = await getByUserId(userId);
    } else {
        items = await getAll();
    }
    res.json(items);
};

async function createFondation(req, res) {
    try {
        const data = Object.assign({ _ownerId: req.user._id }, req.body);
        const item = await create(data);
        res.json(item);
    } catch (err) {
        const message = parseError(err);
        res.status(400).json({ message });
    }
};

async function getFondation (req, res, next) {
    const item = await getById(req.params.fondationId);
    res.json(item);
};

async function updateFondation (req, res, next) {
    const item = await getById(req.params.fondationId);
    console.log((req.user._id).str === (item._ownerId).str);
    if ((req.user._id).str !== (item._ownerId).str) {
        return res.status(403).json({ message: 'You cannot modify this record' });
    }

    try {
        const result = await update(req.params.fondationId, req.body);
        res.json(result);
    } catch (err) {
        const message = parseError(err);
        res.status(400).json({ message });
    }
};

async function deleteFondation (req, res) {
    const item = await getById(req.params.fondationId);
    if ((req.user._id).str !== (item._ownerId).str) {
        return res.status(403).json({ message: 'You cannot modify this record' });
    }

    try {
        await deleteById(req.params.fondationId);
        res.status(204).end();
    } catch (err) {
        const message = parseError(err);
        res.status(400).json({ message });
    }
};

module.exports = {
    getAllItems,
    createFondation,
    getFondation,
    updateFondation,
    deleteFondation
}