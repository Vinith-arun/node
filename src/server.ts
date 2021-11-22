import express from 'express';
const cors=require('cors');
const app:express.Application=express();
app.use(cors({
    origin:"http://localhost:3000"
}))
const path=require('path');
const filePath = path.join(__dirname,"../files");
app.get('/',(req:express.Request, res:express.Response, next:express.NextFunction)=>{
    res.send('This is homepage');
    res.end()
});       
app.get('/second',(req:express.Request, res:express.Response, next:express.NextFunction)=>{
    res.send('This is secondpage');
    res.end()
});
app.listen(9000,()=>{
    console.log('Server running')});

