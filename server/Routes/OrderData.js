const express = require("express");

const router = express.Router();

const Order = require("../models/orders");

router.post('/orderData',async(req, res) => {
    // order_data data send from frontend to backend
    let data = req.body.order_data;

    await data.splice(0,0, {order_data: req.body.order_date});

    // if email not exist in db then create else: insertMany()

    let emailid = await Order.findOne({'email': req.body.email})
    console.log(emailid);

    // order is users first order
    if(emailid === null) {

        try {

            await Order.create ({

                email: req.body.email,
                order_data: [data]

            }).then(() => {

                res.json({success: true})

            })

        } catch (error) {

            console.log(error.message);
            res.send("Server Error");

        }

    }

    else {

        try {
             
            // if the user had already ordered and ordering again
            await Order.findOneAndUpdate({email: req.body.email},

                {
                    // instead of append data it will refresh it
                    $push: {order_data: data} 
                } 

            ).then(() => {
                res.json({success: true})
            })

        } catch (error) {
            res.send("Server Error", error.message)
        }

    }



})



router.post('/myorderData', async (req, res) => {
    try {
        let myData = await Order.findOne({ 'email': req.body.email });
        
        if (myData) {
            res.json({ orderData: myData.order_data });
        } else {
            res.json({ orderData: [] }); // Return an empty array if no data found
        }
    } catch (error) {
        res.status(500).send("Server Error: " + error.message);
    }
})


module.exports = router;