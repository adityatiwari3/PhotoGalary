const mongoose = require('mongoose');
const express = require('express');
const App = express();
const port = 8000;


const DB = "mongodb+srv://aaditytiwari3:aadi@cluster0.44dcn.mongodb.net/Gallery?retryWrites=true&w=majority"
mongoose.connect(DB,{
    useNewUrlParser: true,
    //useCreateIndex: true,
   // useFindAndModify:false,
    useUnifiedTopology: true
}).then(()=>{

    console.log("conection sucsecfull");
}).catch((err)=> {
    console.log(err);
});
App.use(express.json());
const bodyParser = require('body-parser')
App.use(bodyParser.urlencoded({ extended: true }))
App.use(bodyParser.json())
App.use(require("./Router/auth"));

App.listen(port,()=>{
    console.log(`server is runing on ${port}`);
});