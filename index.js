"use strict";
const {sequelize} = require ("./models");
// const all=require("./controllers/paymentController");
const cors=require('cors');
const express= require('express');
const movierouter=require("./routes/movieRoutes")
const userrouter=require("./routes/userRoutes")
const payrouter=require("./routes/paymentRoutes")
const mymovierouter=require("./routes/usermovieRoutes")

const app=express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors({
    origin:"*"
}))
app.get('/', (req, res, next) => {
    res.send('This is Hompage');
    res.end();
    console.log(req.body);
});
app.get('/second', (req, res, next) => {
    res.send('This is secondpage');
    res.end();
});
app.use('/usermovie',payrouter)
app.use('/user',userrouter)
app.use('/movie',movierouter);
app.use('/user/movies',mymovierouter)
// app.post('/payment',paymentController);
// app.get('/action',action);
// app.get('/kids',kids);
// app.get('/crime',crime);
// app.get('/comedy',comedy);
// app.get('/romantic',romantic);
// app.get('/thriller',thriller);
// app.get('/latest',latest);
app.listen(9000,async () => {
    console.log('Server running')
    try{
    await sequelize.sync({force:false})
    }
    catch(e){
        console.log(e);
    }
});
