const { Router } = require('express');
const { phoneController } = require('../controller');

const phoneRouter = Router();


// POST /api/phones
// GET /api/phones
phoneRouter
    .get('/', phoneController.getPhones)
// GET /api/phone/1
// PATCH /api/phone/1
// DELETE /api/phone/1



module.exports = phoneRouter;
