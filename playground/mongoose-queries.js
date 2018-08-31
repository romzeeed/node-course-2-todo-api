const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5b89a16743d9213ce6d21ec011';

// if (!ObjectId.isValid(id)) {
//     console.log('ID not valid');
// };

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));




//query users collections (grab id from my user document)
//load user mongoose model
// User.findById   handle three cases: query works, but no user
// user was found (print his name), and handle error
//no need to use isValid. 

var userId = '5b892b513395dc6f995c7814';

User.findById(userId).then((user) => {
    if (user === null) {
        return console.log('No user with this ID');
    } console.log('User found:', user);
}).catch((e) => console.log('Horrible error'));