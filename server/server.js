var express = require('express');
var bodyParser = require('body-parser');
const ObjectId = require('mongodb').ObjectId;

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    })
});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    if (ObjectId.isValid(id) === false) {
        return res.status(404).send();
    } 
        
    Todo.findById(id).then((todo) => {
        if (!todo) {
            res.status(404).send();
        } res.send({todo});
    }).catch((e) => {
        res.status(400).send();
    });
    
    
    // Todo.findById(id).then((tres) => {
        //     res.send(tres);
        // }, res.status(404));
    

    // findById
      // success
        // it todo - send it back
        // if no todo - send back 404 with empty body
      // error
        // 400 - and send empty body back
});

app.listen(3000, () => {
    console.log('Started on port 3000');
});

module.exports = {app};