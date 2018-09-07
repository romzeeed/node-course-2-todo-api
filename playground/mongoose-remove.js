const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove({_id: '5b92c08a316e891a63e28307'}).then((result) => {
//     console.log(result);
// });

// Todo.findByIdAndRemove('5b92c08a316e891a63e28307').then((result) => {
//     console.log(result);
// });