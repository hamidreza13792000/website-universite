const con=require("../model/connectdb");

class actionbd {
     
    
    static selectAll=async(value)=>{
       const [result]= await con.query("select * from regerterform",);
        return result;
    }

    static insrtformcontect=async(values)=>{
        const result=await con.query("INSERT INTO regerterform (fname,lname,build,topic,Description,nameroom,nemeclass,date,state,uploadfile,uploadfile1,uploadfile2) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)",[values[0],values[1],values[2],values[3],values[4],values[5],values[6],values[7],values[8],values[9],values[10],values[11]])
        return result
    }

    static insertcontactme=async(values)=>{
        const result=await con.query("insert into contactme(fname,lname,numberstudent,discription,state,data) values (?,?,?,?,?,?)",[values[0],values[1],values[2],values[3],values[4],values[5]]);
        return result;
    }
    
    static selectAlladminpage=async(valus)=>{
        const result=await con.query("select * from admintb");
        return result;
    }
    
    
    static selectAllclass=async()=>{
        const [result]=await con.query("select * from nameclass");
        return result;
    }
    
    
        static insertclass=async(values)=>{
            const result=await con.query("insert into nameclass(class) values (?)",[values[0]]);
            return result;
        }
    
        static insertclasstb=async(values)=>{
            const result=await con.query("insert into classtb(classname) values (?)",[values[0]]);
            return result;
        }
        
        static deleteclasstb=async()=>{
            const result=await con.query("DELETE FROM `classtb`");
            return result;
        }
    
        static selectAllclasstb=async()=>{
            const [result]=await con.query("select * from classtb");
            return result;
        }
        
        static updateState=async(value)=>{
            const result=await con.query("UPDATE regerterform SET state=? WHERE id=? ",[value[0],value[1]]);
            return result;
        }


        static selectContactme=async()=>{
            const [result]=await con.query("select * from contactme");
            return result;
        }


        static updateStateContactme=async(value)=>{
            console.log(value)
            const result=await con.query("UPDATE contactme SET state=? WHERE id=? ",[value[0],value[1]]);
            return result;
        }


        

}


module.exports=actionbd;