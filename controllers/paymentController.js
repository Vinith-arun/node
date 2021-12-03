'use strict';
const{Payment}=require("../models")
const paymentController= async(req,res)=> {
    const{userid,movieid,buyingMethod,date}=req.body;
    try{ 
        const payment=await Payment.create({userid,movieid,buyingMethod,date});
        res.end(payment);
        }
    catch(e){
            console.log(e)
        }
}
const latest=(req,res)=>{
    res.json([{"moviename":"Latest","year":2021},
            {"moviename":"Master","year":2021},
            {"moviename":"Master","year":2021},
            {"moviename":"Master","year":2021},
            {"moviename":"Master","year":2021}
]);
res.end();
}
const action=(req,res)=>{
    res.json([{"moviename":"action","year":2021},
            {"moviename":"action","year":2021},
            {"moviename":"action","year":2021},
            {"moviename":"Master","year":2021},
            {"moviename":"Master","year":2021}
]);
res.end();
}
const kids=(req,res)=>{
    res.json([{"moviename":"kids","year":2021},
            {"moviename":"Master","year":2021},
            {"moviename":"Master","year":2021},
            {"moviename":"Master","year":2021},
            {"moviename":"Master","year":2021}
]);
res.end();
}
const thriller=(req,res)=>{
    res.json([{"moviename":"thriller","year":2021},
            {"moviename":"Master","year":2021},
            {"moviename":"Master","year":2021},
            {"moviename":"Master","year":2021},
            {"moviename":"Master","year":2021}
]);
res.end();
}
const crime=(req,res)=>{
    res.json([{"moviename":"crime","year":2021},
            {"moviename":"Master","year":2021},
            {"moviename":"Master","year":2021},
            {"moviename":"Master","year":2021},
            {"moviename":"Master","year":2021}
]);
res.end();
}
const comedy=(req,res)=>{
    res.json([{"moviename":"comedy","year":2021},
            {"moviename":"Master","year":2021},
            {"moviename":"Master","year":2021},
            {"moviename":"Master","year":2021},
            {"moviename":"Master","year":2021}
]);
res.end();
}
const romantic=(req,res)=>{
    res.json([{"moviename":"romantic","year":2021},
            {"moviename":"Master","year":2021},
            {"moviename":"Master","year":2021},
            {"moviename":"Master","year":2021},
            {"moviename":"Master","year":2021}
]);
res.end();
}
module.exports={paymentController,latest,action,kids,thriller,crime,comedy,romantic};
