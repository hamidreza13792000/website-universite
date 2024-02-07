const express=require("express");
var moment = require('jalali-moment');
const route=express();
const con =require("../Controlers/connecttiondb");
const {check,validationResult}=require("express-validator");


route.post("/contactroute",[
    check("fname").isString().notEmpty().withMessage("نام نمیتواند خالی باشد"),
    check("lname").isString().notEmpty().withMessage("نام خانوادگی نمی تواند خالی باشد"),
    check("numberstudent").isNumeric().notEmpty().withMessage("شماره دانشجویی نمیتواند بیشتر از این باشد."),
    check("discription").isString().notEmpty().isLength({min:10,max:500}).withMessage("توضیحات نمی تواند خالی باشد و حداکثر طول ان نمیتواند بیشتر از ۵۰۰ حرف باشد.")
],(req,res)=>{
    const error=validationResult(req);
    if(!error.isEmpty()){
    console.log("validation error");
    console.log(error)
    return res.status(400).json({error:error.array()})
} 
else{
    const{fname,lname,numberstudent,discription}=req.body;
    const date=moment(new Date(), 'YYYY/MM/DD HH:MM:SS').locale('fa').format('YYYY/MM/DD HH:MM:SS')
    const state="جدید";
    con.insertcontactme([fname,lname,numberstudent,discription,state,date]).then((data)=>{  
    })
}



})


module.exports=route;