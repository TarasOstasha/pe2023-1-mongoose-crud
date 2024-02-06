const { Router } = require('express');
const { phoneController } = require('../controller');

const phoneRouter = Router();


// POST /api/phones
// GET /api/phones
phoneRouter
    .route('/')
    .get(phoneController.getPhones)
    .post(phoneController.createPhone);

// GET /api/phone/1
// PATCH /api/phone/1
// DELETE /api/phone/1
phoneRouter
    .route('/:phoneId')
    .get(phoneController.getPhoneById)
    .patch(phoneController.updatePhoneById)
    .delete(phoneController.deletePhoneById);




module.exports = phoneRouter;
