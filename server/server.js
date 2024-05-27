//  for checking server is working or not using nodemon server follow 2 to 14
const express = require("express");

// const Fooditem = require("./models/foodmodel");

const mongoDB = require("./main");
// mongoDB();

const app = express();


app.use((req,res,next) =>{
  // by next we are creating middleware
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header (
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})

app.use(express.json());

app.get("/", (req,res) => {
    res.send("Hello Server working Bishal Pradhan" + port);
});

// // in app.getroot print all objects of pizzas collection
// app.get("/getfooditems", (req, res) =>{

//     Fooditem.find({})
//     .then((docs) => {
//       res.send(docs);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

const port = process.env.PORT || 8000;

app.use('/api', require("./Routes/Createuser"));

app.use('/api', require("./Routes/DisplayData"));

app.use('/api', require("./Routes/OrderData"));

app.listen(port, () => 'server running on port ');
console.log("Server is running" + port)

