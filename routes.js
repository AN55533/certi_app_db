
const Router=require('express');
const sample =require ('./models/certidetails.js')
var router=Router();
router.post('/create',async(req,res)=>{  //api starting
   try{
       const data=req.body;
       const result=await sample.create(data);
       res.status(201).json(result);
   }
   catch(error){
       console.log(error);
       res.status(500).json();
   }
})
router.get('/read',async(req,res)=>{


    //const id = req.params.id;
    //console.log(id);
   //const details = await sample.findOne({userid: id});//useridfrom schema
   const details = await sample.find({});
  console.log("details",details);


   res.json(details);




})
module.exports=router;//routeer import

