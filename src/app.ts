import express from 'express';
const app:express.Application=express();
const add=(a:number, b:number):number =>a+b;
app.get('/',(req:express.Request, res:express.Response, next:express.NextFunction)=>{
    console.log(add(5,6))
    res.send('Hello');
});
app.listen(5000,()=>console.log('Server running'));
