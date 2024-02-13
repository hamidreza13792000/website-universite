import React from 'react'
import Inputthemplate from '@/componentjs/input-themplate';
import { useFormik } from 'formik';
import * as Yup from "yup";




export default function Regester() {


  const formik=useFormik({
    initialValues:{
      username:"",
      password:""
    },
    onSubmit:(values)=>{

      const submitlogin=async()=>{
        console.log(values)
        try{
     await fetch("http://localhost:2080/adminpage", {
                        method: "POST",
                        headers: {
                          'Content-Type': 'application/json'
                      },
                        body:JSON.stringify({
                          username: values.username,
                          password: values.password
                      })

                    }).then(result => result.json())
                  .then((data)=>{
                    console.log(data);
                    window.location.href=data.login
                  })
        }catch(e){
        console.error("error:"+e)
        }
      }
      submitlogin();


    },
    validationSchema:Yup.object({
      username:Yup.string().required("این فیلد اجباری است وباید پر شود."),
      password:Yup.string().required("این فیلد نمی تواند خالی باشد.")
    })

  })


  return (
    <>

      <div className='flex justify-center items-center py-[10rem]'>

            <div className='border p-[10rem] bg-gray-400 w-[360px] lg:w-[600px] rounded-xl shadow-lg' >  

                <form onSubmit={formik.handleSubmit} className='flex justify-center items-center flex-col'>


                    <Inputthemplate formik={...formik.getFieldProps("username")} id={"username"} type={"text"} lblcss={"lg:mr-0 mr-[-150px]"} label={"نام کاربری"}/>

                    {formik.touched.username && formik.errors.username ? (<div className='bg-red-600 rounded-lg lg:w-[250px] w-[250px] font-vlight text-[1rem] text-gray-100 text-right shadow-lg mt-2 p-1 mr-[3.5rem]'>{formik.errors.username}</div>):null}
                    <br></br>

                    <Inputthemplate formik={...formik.getFieldProps("password")} id={"username"} type={"password"} lblcss={"lg:mr-0 mr-[-150px]"} label={`پسورد`} css={``}/>

                    {formik.touched.password && formik.errors.password ?(<div className='bg-red-600 rounded-lg lg:w-[250px] w-[250px]  font-vlight text-[1rem] text-gray-100 text-right shadow-lg mt-2 p-1 mr-[3.5rem]'>{formik.errors.password}</div>):null}


                  <input type='submit' value={"ورود"} className='border-2 p-[10px]
                  mt-[2rem] w-[10rem] rounded-lg bg-gray-900 text-white transition-all duration-200 ease-in-out hover:bg-yellow-300 hover:text-gray-900 cursor-pointer'/>
                    
                </form>

            </div>

      </div>
            
    </>
  )
}
