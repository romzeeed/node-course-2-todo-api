// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
     // return will stop function if called here; alternative to else
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
   
    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').deleteMany({name: 'Roman'}).then((res) => {
        console.log(res);
    });

    db.collection('Users').deleteOne({_id: ObjectID('5b883651cb00ad3a39c15ce1')}).then((res) => {
        console.log(res);
    });    

    // client.close();
});