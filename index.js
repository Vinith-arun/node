"use strict";
const {sequelize} = require ("./models");
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors = require('cors');
const app = (0, express_1.default)();
const r = express_1.default.Router();
app.use(cors({
    origin: "http://localhost:3000"
}));
const path = require('path');
const filePath = path.join(__dirname, "../files");
app.use(express_1.default.static(filePath));
const add = (a, b) => a + b;
app.get('/', (req, res, next) => {
    // console.log(req)
    res.send('This is Hompage');
    res.end();
});
// ***********Here************
app.get('/second', (req, res, next) => {
    res.send('This is secondpage');
    res.end();
});
console.log('hi');
app.listen(9000,async () => {
    console.log('Server running')
    try{
    await sequelize.sync({force:true})
    }
    catch(e){
        console.log(e);
    }
});
