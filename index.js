"use strict";
const {sequelize,User,Payment} = require ("./models");
 const {paymentController,latest,action,kids,thriller,crime,comedy,romantic} =require("./controllers/paymentController");
// const all=require("./controllers/paymentController");
const cors=require('cors');
const express= require('express');
const app=express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors({
    origin:"*"
}))
app.get('/', (req, res, next) => {
    // console.log(req)
    res.send('This is Hompage');
    res.end();
    console.log(req.body);
});
// ***********Here************
app.get('/second', (req, res, next) => {
    res.send('This is secondpage');
    res.end();
});
app.get('/users', async(req, res, next) => {
   try{ 
    const users=await User.findAll();
    res.status(200).json(users);res.end();console.log(users);
}
    catch(e){
        console.log(e)
    }
});
app.post('/user', async(req, res) => {
    const{firstname,lastname,email,phoneNo}=req.body;
    try{ 
        const users=await User.create({firstname,lastname,email,phoneNo});
        res.send(req.body);
        res.end();}
    catch(e){
            console.log(e)
        }
});

app.post('/payment',paymentController);
app.get('/action',action);
app.get('/kids',kids);
app.get('/crime',crime);
app.get('/comedy',comedy);
app.get('/romantic',romantic);
app.get('/thriller',thriller);
app.get('/latest',latest);

app.listen(9000,async () => {
    console.log('Server running')
    try{
    await sequelize.sync({force:false})
    }
    catch(e){
        console.log(e);
    }
});
// paymentController= async(req,res)=> {
//     const{userid,movieid,buyingMethod}=req.body;
//     try{ 
//         const payment=await Payment.create({userid,movieid,buyingMethod});
//         res.end(payment);
//         }
//     catch(e){
//             console.log(e)
//         }
// }