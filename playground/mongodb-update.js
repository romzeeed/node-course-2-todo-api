// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
     // return will stop function if called here; alternative to else
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
   
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5b884db7ea2acb135ebdf48b')    
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });    

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b8835e2775b8c3a072840e0')    
    }, {
        $set: {
            name: 'Roman'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });    

    // client.close();
});

//set name to my name and age to "1"
//use $inc instead if $set