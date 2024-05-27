const mongoose = require("mongoose");

require("dotenv").config();


const mongoDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });
        console.log("Connected to MongoDB");

        const fetched_data = await mongoose.connection.db.collection("fooditems");
        const data = await fetched_data.find({}).toArray()

        global.fooditems = data;
        

        const foodCategory = await mongoose.connection.db.collection("foodcategories");
        const categorydata = await foodCategory.find({}).toArray()

        global.foodCategory = categorydata;
       
        
        

    }
     catch (error) {
        console.error("Error connecting to MongoDB:", error);
     }
}
module.exports =  mongoDB(); 

