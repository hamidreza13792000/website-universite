import React from 'react';
import Image from 'next/image';
import {AiOutlineMail,AiOutlinePhone} from "react-icons/ai";
import {TbHomePlus} from "react-icons/tb"
import Inputthemplate from '@/componentjs/input-themplate';
import { useFormik } from 'formik';
import * as Yup from "yup";



export default function Contact() {


    const formik=useFormik({
        initialValues:{
            fname:"",
            lname:"",
            numberstudent:"",
            discription:""
        },
        onSubmit:(value)=>{
         
           const submitform=async()=>{
            
            try{
              await fetch("http://localhost:2080/contactroute",{
                    method:"POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body:JSON.stringify({
                        fname:value.fname,
                        lname:value.lname,
                        numberstudent:value.numberstudent,
                        discription:value.discription
                    })
                }).then(reasult=>reasult.json()).then((data)=>{
                    console.log(data)
                })
               

            }
            catch(e){console.error("connect server error "+e)}

           }
           submitform();

        },
        validationSchema:Yup.object({
            fname:Yup.string().max(20,"طول این فیلد نمیتواند بیشتر از ۲۰ حرف باشد").required("پر کردن این فیلد اجباری است"),

            lname:Yup.string().max(20,"طول این فیلد نمیتواند بیشتر از ۲۰ حرف باشد").required("پر کردن این فیلد اجباری است"),

            discription:Yup.string().max(100,"طول این فیلد نمیتواند بیشتر از 100 حرف باشد").required("پر کردن این فیلد اجباری است"),

            numberstudent:Yup.number().max(100000000000000,"شماره دانشجویی نمیتواند بیشتر ازاین باشد.").positive('سن باید عدد مثبت باشد')
            .integer('سن باید عدد صحیح باشد').required("پر کردن این فیلد اجباری است")
        })
    })



  return (
    <>
    <div className="back-contact bg-gray-800 pt-[5rem]">

        <div className='container mx-auto mb-auto mt-[9rem] text-center  font-vmedium leading-9 lg:w-[800px] px-[10px] text-3xl text-gray-300'>
        <h1>شما میتوانید نظرات خود درباره این وب سایت و همین طور عمل کردن بهتر ان در اینجا مطرح کنید.</h1>
        </div>

        <div className=' mt-[9rem] container m-auto grid lg:grid-cols-2 grid-cols-1 gap-10 font-vlight px-[10px] '>

            {/* form contact page  */}
            <div className='flex justify-center items-center'>
                <form onSubmit={formik.handleSubmit} className='bg-gray-200 lg:px-[2rem] px-[1rem] py-[2rem] lg:py-[4rem] rounded-xl shadow-xl border w-full'>

                    <div className='flex justify-evenly items-center flex-row mt-[10px] whitespace-nowrap'>

                        <Inputthemplate formik={...formik.getFieldProps("fname")} type={"text"} css={"lg:w-[80%] w-[70%]"} id={"name"} label={"نام"}/>
                        

                        <Inputthemplate formik={...formik.getFieldProps("lname")} type={"text"} css={"lg:w-[70%] w-[65%]"} id={"name"} label={"نام خانوادگی" }/>

                    </div>
                    <div  className='flex justify-start items-center flex-row mt-[10px] whitespace-nowrap'>

                    {formik.touched.fname && formik.errors.fname?(<div className='bg-red-600 rounded-lg lg:w-[300px] w-full font-vlight text-[1rem] text-gray-100 text-right shadow-lg mt-2 p-1'>{formik.errors.fname}</div>):null}

                    {formik.touched.lname && formik.errors.lname?(<div className='bg-red-600 rounded-lg lg:w-[300px] w-full font-vlight text-[1rem] text-gray-100 text-right shadow-lg mt-2 p-1 mr-[20px]'>{formik.errors.lname}</div>):null}
                    </div>


                    <div className=' mt-[20px] whitespace-nowrap  w-full overflow-hidden rounded-lg'>
                        <Inputthemplate formik={...formik.getFieldProps("numberstudent")} type={"number"} css={"w-full"} id={"name"} label={"شماره دانشجویی"}/>
                        {formik.touched.numberstudent && formik.errors.numberstudent?(<div className='bg-red-600 rounded-lg lg:w-[300px] w-full font-vlight text-[1rem] text-gray-100 text-right shadow-lg mt-2 p-1 mr-[7rem]'>{formik.errors.numberstudent}</div>):null}
                    </div>

                    <div className='flex justify-start items-start flex-col mt-[20px]'>
                        <label htmlFor='explanation' className=' font-vmedium text-[10px] lg:text-[13px] mx-[1rem]'>نظرات انتقادات و پیشنهادات : </label>
                     <textarea id='explanation' {...formik.getFieldProps("discription")} className='border bg-gray-100 w-[100%] rounded-lg shadow-lg'></textarea>
                     {formik.touched.discription && formik.errors.discription?(<div className='bg-red-600 rounded-lg lg:w-[300px] w-full font-vlight text-[1rem] text-gray-100 text-right shadow-lg mt-2 p-1 mr-[7rem]'>{formik.errors.discription}</div>):null}
                       
                    </div>

                    <div className='flex justify-center items-center flex-row mt-[3rem]'>

                        <div className='group '>
                        <input type='submit' value="ارسال گزارش" onClick={()=>{ window.location.reload()}} className='shadow-lg border-2 p-2 rounded-lg bg-gray-900 text-yellow-300 group-hover:bg-yellow-300 group-hover:text-gray-900 transition-all duration-300 ease-in-out cursor-pointer'/>
                        </div>

                        <div className='group'>
                        <button onClick={()=>{ formik.resetForm()}}  className='shadow-lg border-2 p-2 rounded-lg mr-5 bg-gray-900 text-yellow-300 group-hover:bg-yellow-300 group-hover:text-gray-900 transition-all duration-300 ease-in-out cursor-pointer'>انصراف</button>
                        </div>
                    </div>
                                        
                </form>
               
            </div>
            
            {/* img and information  */}
            <div className=' flex justify-start items-center flex-col p-[10px]  shadow-lg lg:w-[80%] rounded-xl bg-gray-200 lg:mr-10 py-[2rem]'>
                {/* img  */}
                <div className='  shadow-lg lg:w-auto w-full flex justify-start items-center rounded-lg'>
                    <Image src={require('../../src/img/1.png')}  alt='test-img' className=' lg:w-[20rem] w-full rounded-lg mt-[5%]'/>
                </div>
                {/* ul list  */}
                <div className=' w-[90%] flex justify-center items-start flex-col font-vlight mt-[10%]'>

                    <h1 className='font-vmedium lg:text-[20px] text-[12px] whitespace-pre-wrap'>شما میتوانید از طریق راه های زیر به پشتیبانی وب سایت در تمای باشید.</h1>

                    <ul className='font-vlight lg:text-[15px] text-[12px] mr-[10px] mt-[20px]'>

                        <li className='flex justify-start items-center flex-row'>
                            <span className='ml-[10px] '><AiOutlineMail className='w-[20px] h-[25px]'/></span>
                            <span className='lg:text-[20px] font-vmedium'>ایمیل :  </span>
                            <span className='lg:text-[20px] mr-[5px]'> test-email@email.com </span>
                        </li>

                        <li className='flex justify-start items-center flex-row'>
                            <span className='ml-[10px]'><AiOutlinePhone className='w-[20px] h-[25px]'/></span>
                            <span className='lg:text-[20px] font-vmedium'>شماره تماس : </span>
                            <span className='lg:text-[20px] mr-[5px]'>۱۱۱۱۱۱۱۱۱۱۱۱۱۱۱۱</span>
                        </li>

                        <li className='flex justify-start items-center flex-row'>
                            <span className='ml-[10px]'><TbHomePlus className='w-[20px] h-[25px]'/></span>
                            <span className='lg:text-[20px] font-vmedium'>ادرس : </span>
                            <span  className='lg:text-[20px] mr-[5px]'>عماریاسر- اداره پست-کوچه۲۳</span>
                        </li>

                    </ul>
                </div>

            </div>

        </div>
        <br></br><br></br><br></br>
    </div>

    </>
  );
}
