//FIRST WE CREATE EXPRESS AND LISTENING DATA THEN IT CONNECT TO DATABASE

const express=require('express');
const mongoose=require('mongoose');//after mongoose install, mogoose import here 
const routes=require('./routes.js');//import routes
const dotenv=require('dotenv');

const app=express();
const PORT=3007;
app.listen(PORT,()=>{

console.log(`server in running on port ${PORT}`)
});

app.use(express.json());                           //all files are read we "use"//middlewares
app.use("/",routes);

dotenv.config();

//const uri=process.env.mongodb_url;


mongoose.connect(
    "mongodb://localhost:27017/Certi_Deatils"             //kba_1 is the database folder name, it does not give already  then it show as text

   // uri
);
const database=mongoose.connection;
database.on("error",(error)=>{

    console.log(error);
});
database.once("connected",() => {

console.log("Database connected");

});
