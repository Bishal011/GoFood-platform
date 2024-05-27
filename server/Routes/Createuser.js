// by router we can give multiple rqst of different pages

const express = require("express");

const router = express.Router();

const User = require("../models/user");

const { body, validationResult } = require('express-validator');


const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const jwtSecret = "MynameisBishalPradhanfromSiliconInstituteOfTechnology@#$";

// create post rqst

router.post("/createuser", 

 // username must be an email
 body('email',"invalid email").isEmail(),
 body('name',"name must be more than 2 characters").isLength({ min: 3 }),
 // password must be at least 5 chars long (write comma and some msg)
 body('password', "Pasword must be 5 chars long").isLength({ min: 6 }),
async (req, res) => {

    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
    }

    // password hashing using bcrypt. All bcrypt functions are async

    const salt = await bcrypt.genSalt(10);

    // first para will be the value for which we create a hash and  2nd para in which we craete salt to make it more secure
    let secPassword = await bcrypt.hash( req.body.password, salt)



    // After /createuser will hit then it will send data to db
    try{
       await  User.create({
            // send  data created by user in frontend

            name : req.body.name,
            // here we have bcrypt password
            password: secPassword,
            email: req.body.email,
            location: req.body.location
        })
        //if above will run successfully then it will send respose as true 

        // when the endpoint will hit and send back the response
        .then(res.json({success: true}));

    } catch(error) {
        console.log(error);
        res.json({success: false});
    }
    // now tell backed that user is created
})


// we will create jwt at the time of login
router.post("/loginuser", 

// username must be an email
body('email',"invalid email").isEmail(),
// password must be at least 5 chars long (write comma and some msg)
body('password', "Pasword must be 5 chars long").isLength({ min: 6 }),

async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
    }

    let email = req.body.email;

    // After /createuser will hit then it will send data to db
    try{
       let userData = await User.findOne({email});
    //    if email is empty
       if(!userData) {
        return res.status(400).json({ errors: "Try login with correct credentials"});
       }

    //    using bcrpt we make make the psw which comes from userData which is a normal psw and another is hashed psw 
       const pwdCompare = await bcrypt.compare(req.body.password, userData.password);


    //    if userdata already present during signUp
       if(!pwdCompare) {
        return res.status(400).json({ errors: "Try login with correct credentials"});
       }

       const data = {
        user: {
            id : userData.id
        }
       }

    //    crete jwt token jwtSecret will be the secret key for user
       const authToken = jwt.sign(data, jwtSecret);
    //    now send authorization token
       return res.json({ success: true, authToken: authToken });

    } catch(error) {
        console.log(error);
        res.json({success: false});
    }
    // now tell backed that user is created
})




module.exports = router;