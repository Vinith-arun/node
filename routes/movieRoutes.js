const {addMovie,getMovieDeatils,MoviesByGenre}=require("../controllers/movieController")

const movierouter = require('express').Router()

movierouter.post("/addNewMovie",addMovie)
movierouter.get("/findByGenre/",MoviesByGenre)
movierouter.get("/findById/",getMovieDeatils)

module.exports=movierouter;