

var btnsub=document.getElementById("btnsubmitclass");
var inputclass=document.getElementById("nameclass");
var forminsertnewclass=document.getElementById("forminsertnewclass");

var formeditclass=document.getElementById("formeditclass");
var btnformeditclass=document.getElementById("btnformeditclass");

// add class code 
btnsub.addEventListener("click", (e)=>{
    e.preventDefault();
    try{
         fetch("http://localhost:2080/insertclass",{
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body:JSON.stringify({inputvalue:inputclass.value})
        }).then(result=>result.json()).then((data)=>{
            forminsertnewclass.reset();
        })


    }catch(e){console.log("Error : "+e)}
})

// edit class form 
btnformeditclass.addEventListener("click",(e)=>{
    e.preventDefault();
   
    try{

        const formdata=new FormData(formeditclass);
        const dataform={};

        formdata.forEach((data,index)=>{
            dataform[index]=data
        });

         fetch("http://localhost:2080/insertclassform",{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(dataform)
        }).then(result=>result.json()).then((data)=>{
            formeditclass.reset();
        })
        
        
    }catch(e){console.log("Error"+e)}

});

// click update state information 

const updatestate=(value1,value2)=>{

    fetch("http://localhost:2080/updateState",{
        method:"POST",
        headers:{
            "Content-Type":"application/json" 
        },
        body:JSON.stringify({val1:value1,val2:value2})
    });

    window.location.href=window.location.href;

}

// click update state contactme 
const updatestatecontactme=(value1,value2)=>{
   
    fetch("http://localhost:2080/updateStateContactme",{
        method:"POST",
        headers:{
            "Content-Type":"application/json" 
        },
        body:JSON.stringify({val1:value1,val2:value2})
    });

    window.location.href=window.location.href;

}

const refreshpage=()=>{
    var btnsubmitclass=document.getElementById("btnsubmitclass");
    btnsubmitclass.addEventListener("click",()=>{window.location.reload()})
    // window.location.reload()
  }
  refreshpage();