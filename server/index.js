const express = require('express');
const app=express();
const path=require("path");

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// / تنظیمات مربوط به EJS

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

// accsess set file in server 
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); 
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

const pathstyle=path.join(__dirname,"src","style");
const jsfile=path.join(__dirname,"src","js");
const swiperslider=path.join(__dirname,"src","lib","swiper-slider");
const uploadfile1=path.join(__dirname,"uploads");

app.use("/style",express.static(pathstyle));
app.use("/jsfile",express.static(jsfile));
app.use("/style",express.static(swiperslider));
app.use("/uploads",express.static(uploadfile1));


const uploadfile=require("./router/uploadfileform");
const adminpage=require("./router/rote-adminpage");
const contactroute=require("./router/contactme");
const adminpareadmin=require("./router/addminpage/index")

app.use(uploadfile);
app.use(adminpage);
app.use(contactroute);
app.use(adminpareadmin);

app.listen(2080);