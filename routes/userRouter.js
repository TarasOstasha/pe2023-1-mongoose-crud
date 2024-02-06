const { Router } = require('express');
const { userController } = require('../controller');

const userRouter = Router();

userRouter
  .route('/')
  .get(userController.getUsers)
  .post(userController.createUser);

userRouter
  .route('/:userId')
  .get(userController.getUserById)
  .patch(userController.updateUserById)
  .delete(userController.deleteUserById);

userRouter
  .route('/:userId/posts')
  .post(userController.createUserPost)
  .get(userController.getUserPosts);


// POST /api/users/1/phones
// GET /api/users/1/phones
userRouter
  .route('/:userId/phones')
  .post(userController.createUserPhone)
  .get(userController.getUserPhones);



module.exports = userRouter;
