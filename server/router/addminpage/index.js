const express=require("express");
const route=express();
const con=require("../../Controlers/connecttiondb");
route.use(express.json());

route.get("/adminpage",async (req,res)=>{
   
    const result=await con.selectAll()
    const result1=await con.selectAllclass();
    const result2=await con.selectContactme();
        const groupedByNemeclass = {};
        result.forEach((obj) => {
        const nemeclass = obj.nemeclass;
            
        if (!groupedByNemeclass[nemeclass]) { 
            groupedByNemeclass[nemeclass] = [];
        }

        groupedByNemeclass[nemeclass].push(obj);

        });
      
        

    res.render("./adminpage.ejs",{regesterform:groupedByNemeclass,selectclass:result1,selectcontactme:result2}); 

})

route.post("/insertclass",(req,res)=>{
    const{inputvalue}=req.body;
    con.insertclass([inputvalue])
    res.json({respons:"insert new class"});
    console.log("----insert new class----")
})



route.post("/insertclassform",(req,res)=>{
    con.deleteclasstb();
    const select=req.body;
    Object.keys(select).forEach((data)=>{
        con.insertclasstb([select[data]])
    })
    
    res.json({respons:"update class"});

    console.log("update data calss ...!!")
});
   

route.post("/selectAllclasstb",(req,res)=>{
    console.log("ok select classtb ....!!");
   con.selectAllclasstb().then((data)=>{
    
    const object = {};
   data.forEach((data)=>{
  
      object[data.classname]=data.classname;
   }) 
   res.json(object)

   });
   
})

// update state 
route.post("/updateState",(req,res)=>{
    const val1=req.body.val1
    const val2=req.body.val2
   con.updateState([val1,val2]);
 
    res.end();
});

// update state contactme 
route.post("/updateStateContactme",(req,res)=>{
    const val1=req.body.val1
    const val2=req.body.val2
   con.updateStateContactme([val1,val2]);
 
    res.end();
});

 

module.exports=route;