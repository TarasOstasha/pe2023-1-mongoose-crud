// ODM Mongoose
const mongoose = require('mongoose');

(async function () {
  try {
    // Установлення з'єднання
    await mongoose.connect('mongodb://localhost:27017/new_db');
    console.log(`Connection to DB OK`);

    // Створення моделі на базі схеми
    const taskSchema = new mongoose.Schema({ value: String });
    const Task = mongoose.model('Task', taskSchema);

    // CRUD
    // C - INSERT - insertOne/Many - create (save)
    const newTask = { value: 'Walk' };
    const createdTask = await Task.create(newTask);
    console.log('createdTask :>> ', createdTask);

    // R -SELECT - find - find...
    const foundTasks = await Task.find();
    console.log('foundTask :>> ', foundTasks);

    const foundTask = await Task.findById('65bf95f8bd69869cf34de52c');
    console.log('foundTask :>> ', foundTask);

    // U - UPDATE - updateOne/Many - updateOne/Many / find...
    const updatedTask = await Task.findByIdAndUpdate(
      '65bf95f8bd69869cf34de52c',
      { value: 'Updated Task 2' },
      { new: true } // if true, return the modified document rather than the original
    );
    console.log('updatedTask :>> ', updatedTask);

    // D - DELETE - deleteOne/Many - deleteOne/Many / find...
    const deletedTask = await Task.findByIdAndDelete(
      '65bf95f8bd69869cf34de52c'
    );
    console.log('deletedTask :>> ', deletedTask);
  } catch (err) {
    console.log(`Error: `, err);
  }
})();
