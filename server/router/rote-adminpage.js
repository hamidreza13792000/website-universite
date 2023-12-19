const express=require("express");
const router=express.Router();
const path=require("path");
const {check,validationResult}=require("express-validator");
const actondb=require("../Controlers/connecttiondb");



const login1=()=>{return ("http://localhost:2080/adminpage")}
const login2=()=>{return ("http://localhost:3000/")}

router.post("/adminpage",[
    check("username").isString().notEmpty().withMessage("یوزرنیم نمیتواند خالی باشد"),
    check("password").isString().notEmpty().withMessage("پسورد نمیتواند خالی باشد")
],(req,res,next)=>{

    const error=validationResult(req);
    if(!error.isEmpty()){
        console.log(error)
        return res.status(400).json({error:error.array()})
    }
    else{
        
        const{username,password}=req.body;
       

      actondb.selectAlladminpage().then(([data])=>{
         data.forEach((data1)=>{

            if(data1.username===username && data1.password===password){
               
                res.send({login:login1()})
            }
            else{
                res.send({login:login2()})
                console.log("error render file")
            }
        })
      })
        
        
  
    }

});



module.exports=router;