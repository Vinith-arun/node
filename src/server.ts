import express, { response } from 'express';
import { url } from 'inspector';
const cors=require('cors');
const app:express.Application=express();
let jso=[{"name":"vinith"}]
let vj=[{id:1,name:"Master",price:"20",bought:false,rent:true,daysLeft:"6"},
    {id:2,name:"Bigil",price:"15",bought:false,rent:false,daysLeft:""}]
let aj=[
    {id:5,name:"Vedalam",price:"25" ,bought:false,rent:false,daysLeft:""},
    {id:6,name:"Vivegam",price:"15",bought:false,rent:false,daysLeft:""},
    {id:3,name:"Viswasam",price:"15",bought:true,rent:false,daysLeft:""},
    {id:4,name:"Valimai",price:"15",bought:true,rent:false,daysLeft:""}]
app.use(cors({
    origin:"http://localhost:3000"
}))
app.get('/',(req:express.Request, res:express.Response, next:express.NextFunction)=>{
    res.send(jso);
    res.set({"content-type": "text/json; charset=utf-8"});
    res.end()
});       
app.get('/second',(req:express.Request, res:express.Response, next:express.NextFunction)=>{
    res.header("Content-Type","text/html");
    res.sendFile('/font-end/public/index.html');
    res.end()
});
app.get('/vijaymovie',(req:express.Request, res:express.Response, next:express.NextFunction)=>{
    res.send(vj);
    res.end();
});
app.get('/ajithmovie',(req:express.Request, res:express.Response, next:express.NextFunction)=>{
    res.send(aj);
    res.end();
});
app.listen(9000,()=>{
    console.log('Server running')});

 


