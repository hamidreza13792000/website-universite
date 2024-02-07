import React from 'react';
import { useContext,useEffect } from 'react';
import { mycontext } from './context-API';

import Handeluploadfile from '@/componentjs/handeluploadfile';
import { useFormik } from 'formik';
import * as Yup from "yup";


export const getStaticProps=async()=>{
    console.log("ok getstate")
    
    const result= await fetch("http://localhost:2080/selectAllclasstb",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"            
            },
        }); 
    const nameclass= await result.json();
    const Arrayvalue=Object.values(nameclass);
    

    return{
        props:{classname:Arrayvalue}
    }
}
 
const Index = ({classname}) => {
    const {uploadfile}=useContext(mycontext)

  
    const formik = useFormik({
        initialValues:{
            fname:"",
            lname:"",
            build:"",
            nameroom:"",
            nemeclass:"",
            topic:"",
            Description:"",
            uploadfile:uploadfile[0] || "",
            uploadfile1:uploadfile[1] || "",
            uploadfile2:uploadfile[2] || "",
        },
        
        onSubmit:(values)=>{

            const handelformvalidation = async () => {
                try {
                    
                    const formdata = new FormData();

                    formdata.append("fname", values.fname);
                    formdata.append("lname", values.lname);
                    formdata.append("build", values.build);
                    formdata.append("topic", values.topic);
                    formdata.append("Description", values.Description);
                    formdata.append("nameroom", values.nameroom);
                    formdata.append("nemeclass", values.nemeclass);
                    formdata.append("uploadfile", values.uploadfile);
                    formdata.append("uploadfile1", values.uploadfile1);
                    formdata.append("uploadfile2", values.uploadfile2);
                 
                    await fetch("http://localhost:2080/send", {
                        method: "POST",
                        'Content-Type': 'multipart/form-data',
                        body:formdata
                    }).then((data)=>{
                        console.log(JSON.stringify(data));
                       
                    }) 
                   
                } catch (error) {
                    // اگر خطایی در درخواست رخ دهد، آن را چاپ کنید
                    console.error('Error:', error);
                }
               
            } 

            handelformvalidation();
            
          
        },
        validationSchema:Yup.object({
            fname:Yup.string().max(20,"نام نمی تواند بیشتر از ۲۰ حرف باشد").required("این فیلد اجباری است"),
            lname:Yup.string().max(20,"نام خانوادگی ن").required("این فیلد اجباری است"),
            build:Yup.string().required("این فیلد اجباری است"),
            nemeclass:Yup.string().required("این فیلد اجباری است"),
            topic:Yup.string().max(20,"موضوع نمیتواند بیشتر از ۲۰ کاراکتر باشد").required("این فیلد اجباری است"),
            Description:Yup.string().max(100,"توضیحات نمیتواند بیشتر از ۱۰۰ کاراکتر باشد").required("این فیلد اجباری است"),
            nameroom:Yup.string().required("این فیلد اجباری است"),
            uploadfile:Yup.mixed().required("این فیلد اجباری است"),
            uploadfile1:Yup.mixed(),
            uploadfile2:Yup.mixed(),
           
        }),
        
    })

    useEffect(()=>{
        formik.setFieldValue("uploadfile",uploadfile[0])
        formik.setFieldValue("uploadfile1",uploadfile[1])
        formik.setFieldValue("uploadfile2",uploadfile[2])
        
    },[uploadfile]);

  return (
    <> 
   
    <div className='font-vlight'>
        <div className='flex justify-center items-center flex-col py-[5rem]'>
                {/* header form  */}
                <h1 className='text-[2rem] font-vmedium border w-full text-center bg-gray-200 p-[2rem] shadow-lg mb-[2rem]'>ثبت گزارش</h1>
                {/* form  */}
                <form onSubmit={formik.handleSubmit} id='carform' encType='multipart/form-data' className='w-[70%] p-[10px] font-vlight flex justify-center items-center flex-col '>
                    
                    {/* name input  */}
                    <div className='lg:w-[400px] w-full mt-5'>
                    <label htmlFor="fname">نام ونام خانوادگی : </label>
                    <input {...formik.getFieldProps("fname")} type='text' id='fname' className='p-2 rounded-lg outline-none border-2 shadow-lg bg-gray-100 w-full'/>
                    </div>
                    {formik.touched.fname && formik.errors.fname?(<div className='bg-red-600 rounded-lg lg:w-[400px] w-full font-vlight text-[1rem] text-gray-100 text-right shadow-lg mt-2 p-1'>{formik.errors.fname}</div>):null}

                {/* family input  */}
                    <div className='lg:w-[400px] w-full mt-5'>
                    <label htmlFor="lname"> شماره موبایل : </label>
                    <input {...formik.getFieldProps("lname")} type='number' name='lname'  className='p-2 rounded-lg outline-none border-2 bg-gray-100 shadow-lg w-full'/>
                    </div>

                    {formik.touched.lname && formik.errors.lname?<div className='bg-red-600 rounded-lg lg:w-[400px] w-full font-vlight text-[1rem] text-gray-100 text-right shadow-lg mt-2 p-1'>{formik.errors.lname}</div>:null}


                    {/* build input  */}
                    <div className='lg:w-[400px] w-full mt-5'>
                    <label htmlFor="build" className='text-sm lg:text-base'>ساختمان دانشگاه:</label>
                    <select {...formik.getFieldProps("build")} id="build" form="carform" className='p-2 rounded-lg outline-none w-full text-gray-900 font-vlight shadow-lg'>
                        <option value=""></option>
                        <option value="volvo">پسران قم، شعبه عماریاسر</option>
                        <option value="opel">پسران قم ،شعبه پردیسان</option>
                        <option value="audi">دختران قم ،شعبه شهرک قدس</option>
                        <option value={"دختران قم،پردیسان"}>دختران قم ،شعبه پردیسان</option>
                    </select>
                    </div>

                    {formik.touched.build && formik.errors.build?<div className='bg-red-600 rounded-lg lg:w-[400px] w-full font-vlight text-[1rem] text-gray-100 text-right shadow-lg mt-2 p-1'>{formik.errors.build}</div>:null}

                    
                    {/* unit input  */}
                    <div className='lg:w-[400px] w-full mt-5'>
                    <label htmlFor="nameroom" className='text-sm lg:text-base'>انتخاب طبقه :</label>
                    <select {...formik.getFieldProps("nameroom")} id="nameroom" form="carform" className='p-2 rounded-lg outline-none w-full text-gray-900 font-vlight shadow-lg'>
                        <option value=""></option>
                        <option value="1">طبقه یک</option>
                    
                    </select>
                    </div>

                    {formik.touched.nameroom && formik.errors.nameroom?<div className='bg-red-600 rounded-lg lg:w-[400px] w-full font-vlight text-[1rem] text-gray-100 text-right shadow-lg mt-2 p-1'>{formik.errors.nameroom}</div>:null}
                    
                    {/* classname input  */}
                    <div className='lg:w-[400px] w-full mt-5'>
                    <label htmlFor="nemeclass" className='text-sm lg:text-base'>نام کلاس یا ازمایشگاه :</label>
                    <select {...formik.getFieldProps("nemeclass" )} id="nemeclass" form="carform" className='p-2 rounded-lg outline-none w-full text-gray-900 font-vlight shadow-lg'>
                    <option value="">یک فیلد را انتخاب کنید</option>
                    {
                        
                        classname.map((item, index) => (
                            <option key={index} value={item}> 
                                {item}
                            </option>
                          ))
                    }
                        
                       
                    
                    </select>
                    </div>

                    {formik.touched.nemeclass && formik.errors.nemeclass?<div className='bg-red-600 rounded-lg lg:w-[400px] w-full font-vlight text-[1rem] text-gray-100 text-right shadow-lg mt-2 p-1'>{formik.errors.nemeclass}</div>:null}

                
                    
                    {/* topic input  */}
                    <div className='lg:w-[400px] w-full mt-5'>
                    <label htmlFor="topic">موضوع :</label>
                    <input {...formik.getFieldProps("topic")} type='text' id='topic' className='p-2 rounded-lg outline-none border-2 w-full shadow-lg bg-gray-100'/>
                    </div>

                    {formik.touched.topic && formik.errors.topic?<div className='bg-red-600 rounded-lg lg:w-[400px] w-full font-vlight text-[1rem] text-gray-100 text-right shadow-lg mt-2 p-1'>{formik.errors.topic}</div>:null}

                    {/* discroption input  */}
                    <div className='lg:w-[400px] w-full mt-5'>
                    <label htmlFor="Description">شرح :</label>
                    <textarea {...formik.getFieldProps("Description")} type='text' id='Description' className='box-border shadow-lg p-2 rounded-lg outline-none border-2 w-full  bg-gray-100'/>
                    </div>

                    {formik.touched.Description && formik.errors.Description?<div className='bg-red-600 rounded-lg lg:w-[400px] w-full font-vlight text-[1rem] text-gray-100 text-right shadow-lg mt-2 p-1'>{formik.errors.Description}</div>:null}

                    {/* upload file input  */}
                    <div className='w-full mt-5 text-gray-900 font-vlight'>
                    <Handeluploadfile/>
                    </div>

                    

                    {formik.touched.uploadfile && formik.errors.uploadfile?<div className='bg-red-600 rounded-lg lg:w-[400px] w-full font-vlight text-[1rem] text-gray-100 text-right shadow-lg mt-2 p-1'>{formik.errors.uploadfile}</div>:null}

                

                    {/* send and cansel boutton  */}
                    <div className='flex justify-center items-center flex-row mt-5'>

                        <div className='group '>
                            <input type='submit' onClick={()=>{ window.location.reload()}} value="ارسال گزارش" className='shadow-lg border-2 p-2 rounded-lg bg-gray-900 text-yellow-300 group-hover:bg-yellow-300 group-hover:text-gray-900 transition-all duration-300 ease-in-out cursor-pointer'/>
                        </div>

                        <div className='group'>
                            <button  onClick={()=>{ formik.resetForm()}} className='shadow-lg border-2 p-2 rounded-lg mr-5 bg-gray-900 text-yellow-300 group-hover:bg-yellow-300 group-hover:text-gray-900 transition-all duration-300 ease-in-out cursor-pointer'>انصراف</button>
                        </div>
                    </div>

                </form>

        </div>
            

    </div>


    </>
  );
};


export default Index;

