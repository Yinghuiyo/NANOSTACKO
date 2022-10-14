const express = require('express');
const app = express();
app.use(express.urlencoded({extended: true}));
app.get("/", function(req, res){
  res.render('home');
});
app.listen(3000, function()
  {console.log("Server started on port 3000");}
);

app.set("view engine", "ejs");

app.post("/", function(req, res){
  collection.insertOne(req.body, (err, result) => {  
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/') // or do something else here
  })
});

const MongoClient = require('mongodb').MongoClient;

const CONNECTION_URL = "mongodb+srv://ychua:cXPF5lDHxmvNo0ul@nanostacko.ahrgsi7.mongodb.net/?retryWrites=true&w=majority";
const DATABASE_NAME = "nanostacko"; // you can change the database name
var database, collection;

MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
  if(error) throw error;

  database = client.db(DATABASE_NAME);
  collection = database.collection("newcollection"); // you can change the collection name

  // Start the application after the database connection is ready
  app.listen(port, () => {
    console.log('This app is running on port ' + port)
  });
});

