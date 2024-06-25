const {Schema}=require('mongoose');//from mongoose download schema & model
const {model}=require('mongoose');
const demo =new Schema({
    userid:{ type:String,required:true},//requiredtrue means must need//false 
    name:{ type:String, required: true},
    course:{type:String,required:true},
    grade:{type:String,required:true},
    date:{type:String,required:true}

});
const sample=model('certi',demo);//sample1 is the colllection(data stored as collection) name//
module.exports=sample;