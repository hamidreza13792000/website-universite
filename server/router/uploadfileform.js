const express = require('express');
const roter=express.Router();
const con=require("../Controlers/connecttiondb")
var fs = require('fs');
var moment = require('jalali-moment');

const {check,validationResult}=require("express-validator");
const multer = require('multer');
const path=require("path");

let errorfile=false;

storage = multer.diskStorage({

    destination: function (req, file, cb) {
        cb(null, 'uploads')  // آدرس ذخیره فایل‌ها
    },
    filename: function (req, file, cb) {
            cb(null,file.fieldname+"-"+Date.now()+file.originalname);
       
    },
   
});

const upload = multer({ 
    storage: storage,
    fileFilter:(req,file,cb)=>{

        var ext = path.extname(file.originalname)
        if(ext===".jpg" || ext===".png" || ext==="jpeg"){

            cb(null,true);
        }
      
        else{
            cb(null,false);
            errorfile=!errorfile;
            console.log(errorfile)
            console.log("error path")
        }

    }
 });
 const multiuploded=upload.fields([{name:"uploadfile"},{name:"uploadfile1"},{name:"uploadfile2"}])

 roter.post("/send",multiuploded,[
    check('fname').notEmpty().withMessage('نام نمی‌تواند خالی باشد'),
    check('lname').notEmpty().withMessage('نام نمی‌تواند خالی باشد'),
    check('build').notEmpty().withMessage('نام نمی‌تواند خالی باشد'),
    check('nemeclass').notEmpty().withMessage('نام نمی‌تواند خالی باشد'),
    check('topic').notEmpty().withMessage('نام نمی‌تواند خالی باشد'),
    check('Description').notEmpty().withMessage('نام نمی‌تواند خالی باشد'),
    
],(req,res)=>{
    const error=validationResult(req);
    if(!error.isEmpty() || errorfile===true){
        console.log(error)
        console.log("error upload file or fild input")
        return res.send({error:error.array(),message:"فیلد ها نباید خالی باشد و فایل مورد نظر باید به فرمت های زیر باشد  jpg, png, jpeg, mp4, web ,mkv ,wmv ,mov, avi"})
    }
    else{
       const {fname,lname,build,nemeclass,Title,topic,Description,nameroom,}=req.body;
       
        let uploadfile = "";
        let uploadfile1 = "";
        let uploadfile2 = "";
        let date = moment(new Date(), 'YYYY/MM/DD HH:MM:SS').locale('fa').format('YYYY/MM/DD HH:MM:SS')
       let state="جدید";
        if (req.files.uploadfile) {
            uploadfile = req.files.uploadfile[0].path;
            console.log(req.files.uploadfile[0].path)
        }

        if (req.files.uploadfile1) {
            uploadfile1 = req.files.uploadfile1[0].path;
            console.log(req.files.uploadfile1[0].path)
        }

        if (req.files.uploadfile2) {
            uploadfile2 = req.files.uploadfile2[0].path;
            console.log(req.files.uploadfile2[0].path)
        }

           con.insrtformcontect([fname,lname,build,topic,Description,nameroom,nemeclass,date,state,uploadfile,uploadfile1,uploadfile2]);
           console.log("ok")
        }

});

module.exports=roter;