import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import {AiOutlineClose,AiOutlineHome} from "react-icons/ai";
import {AiOutlineMenu} from "react-icons/ai";
import {FaStackExchange} from "react-icons/fa";
import {MdContactSupport,MdContactPhone} from "react-icons/md";

export default function Header() {

const [activemenu,setactivemenu]=useState(true);
const [activeform,setactiveform]=useState(false);

const clickmenu=(e)=>{
  e.preventDefault();
    setactivemenu((menu)=>!menu);
}
const clickactiveform=(e)=>{
e.preventDefault();
setactiveform((form)=>!form)

}

  // =============================================================
  return (
    <React.Fragment>

      <div className="bg-gray-900 w-full ">
        <section className="fixed z-10 w-full mx-auto  bg-gray-900  flex lg:justify-center lg:items-center">

          <nav className="container m-auto flex lg:justify-center lg:items-center bg-gray-900 text-white h-[5rem] w-screen whitespace-nowrap z-10">
            {/* start code menu desktop  */}
            <div className="w-full h-full  hidden lg:flex ">
             
              <ul className="hidden lg:flex lg:justify-center lg:items-center  pr-[40%] font-vmedium h-full ">

                <li className='ml-[30px] group '>
                  <span className="hover:text-yellow-200 " href="#">
                  <Link href={"/"} className='font-vmedium'>صفحه اصلی</Link>
                  </span>
                  <div className='group-hover:w-full group-hover:h-[2px]  group-hover:animate-linemenu bg-yellow-300'></div>
                </li>


                <li className='ml-[30px] group'>
                  <span className="hover:text-yellow-200 " href="#">
                  <Link href={"/contactme"} className='font-vmedium'>تماس باما</Link>
                  </span>
                  <div className='group-hover:w-full group-hover:h-[2px]  group-hover:animate-linemenu bg-yellow-300'></div>
                </li>

              </ul>

              <div className="hidden lg:flex mr-[50%]">

                  <button className="group flex items-center" >
                    <Link href={"/regester-form"}>
                      <span className='font-vlight border-[1px] border-yellow-300 border-solid p-[5px] rounded-lg group-hover:bg-yellow-200 group-hover:text-gray-900'> لاگین ادمین</span>
                      <span className="flex absolute -mt-9 ml-5">
                        <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                          </span>
                      </span>
                    </Link>
                  </button>

              </div>

            </div>
            {/* end code menu desktop  */}

            {/* icon mobile */}
            <div className='flex justify-between items-center flex-row w-full px-[10px]'>
            {/* info button  */}
            <button className="group lg:hidden flex items-center" href="#">
              <Link href={"/regester-form"} className='border-[1px] border-yellow-300 p-[8px] rounded-lg group-hover:text-gray-900 group-hover:bg-yellow-200'> 
                <span className=''> لاگین ادمین</span>
                <span className="flex absolute -mt-10 ml-[50px]">
                  <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                  </span>
                </span>
              </Link>
            </button>

              {/* menu icon */}
            <button onClick={clickmenu} className={`lg:hidden ${activemenu ? "flex" : "hidden"} transition-all duration-200 ease-in-out navbar-burger self-center`} >
            <AiOutlineMenu className='w-[30px] h-[30px]'/>
            </button>

            <button onClick={clickmenu} className={`lg:hidden ${activemenu ? "hidden" : "flex"} transition-all duration-200 ease-in-out navbar-burger self-center`} >
            <AiOutlineClose className='w-[30px] h-[30px]'/>
            </button>


            </div>
          </nav>

          {/* menu mobile  */}
          <div className={`${activemenu ? "h-[0vh]":"h-[100vh]"} block lg:hidden absolute transition-all duration-500 ease-in-out  w-full z-20 mt-[5rem] overflow-hidden bg-gray-900 animate-submenu`}>
          
          <ul className='text-white mt-[50px] text-[20px] font-vmedium flex justify-center items-center flex-col'>

              <li className='flex justify-center items-center flex-row-reverse mt-[40px]'>
                <Link href={"/"} onClick={()=>{setactivemenu(!activemenu)}}>صفحه اصلی</Link>
                <span className='ml-[10px]'><AiOutlineHome/></span>
              </li>
            
              <li className='flex justify-center items-center flex-row-reverse mt-[40px]'>
                <Link href={"/contactme"} onClick={()=>{setactivemenu(!activemenu)}}> تماس باما</Link>
                <span className='ml-[10px]'><MdContactPhone/></span>
              </li>
              
          </ul>
          
          </div>

        </section>
        
      </div>

          {/* form active  */}
      {/* <div className={` container m-auto relative ${activeform ? "flex" : "hidden"} justify-center items-start overflow-hidden z-10`}>

      <div className='lg:w-[800px] w-full h-[39rem] lg:h-[30rem] fixed  p-10 rounded-lg shadow-lg overflow-y-scroll hiddenscroll flex justify-center items-start text-yellow-300
      bg-gradient-to-bl from-gray-700 via-gray-900 to-black
      '>

        <AiOutlineClose onClick={()=>{setactiveform(!activeform)}} className='absolute top-3 left-3 cursor-pointer'/>

        <form id='carform' action='#' method='#' encType='multipart/form-data' className='w-[70%] p-[10px] font-vlight flex justify-center items-center flex-col '>

          <div className='lg:w-[400px] w-full mt-5'>
            <label htmlFor="fname">نام : </label>
            <input type='text' name='fname' id='fname' className='p-2 rounded-lg outline-none border-2 shadow-lg bg-gray-100 w-full'/>
          </div>

          <div className='lg:w-[400px] w-full mt-5'>
            <label htmlFor="lname">نام خانوادگی : </label>
            <input type='text' name='lname' id='lname' className='p-2 rounded-lg outline-none border-2 bg-gray-100 shadow-lg w-full'/>
          </div>

          <div className='lg:w-[400px] w-full mt-5'>
            <label htmlFor="build" className='text-sm lg:text-base'>ساختمان دانشگاه:</label>
            <select name="build" id="build" form="carform" className='p-2 rounded-lg outline-none w-full text-gray-900 font-vlight shadow-lg'>
              <option value=""></option>
              <option value="volvo">پسران قم، شعبه عماریاسر</option>
              <option value="opel">پسران قم ،شعبه پردیسان</option>
              <option value="audi">دختران قم ،شعبه شهرک قدس</option>
              <option value={"دختران قم،پردیسان"}>دختران قم ،شعبه پردیسان</option>
            </select>
          </div>

          <div className='lg:w-[400px] w-full mt-5'>
            <label htmlFor="nemeclass" className='text-sm lg:text-base'>نام کلاس یا ازمایشگاه :</label>
            <input type='text' name='nemeclass' id='nameclass' className='p-2 rounded-lg outline-none shadow-lg border-2 w-full  bg-gray-100'/>
          </div>

          <div className='lg:w-[400px] w-full mt-5'>
            <label htmlFor="Title" className='text-sm lg:text-base'>عنوان محل رویداد :</label>
            <input type='text' name='Title' id='Title' className='p-2 rounded-lg outline-none border-2 w-full shadow-lg bg-gray-100'/>
          </div>

          <div className='lg:w-[400px] w-full mt-5'>
            <label htmlFor="topic">موضوع :</label>
            <input type='text' name='topic' id='topic' className='p-2 rounded-lg outline-none border-2 w-full shadow-lg bg-gray-100'/>
          </div>

          <div className='lg:w-[400px] w-full mt-5'>
            <label htmlFor="Description">شرح :</label>
            <textarea type='text' name='Description' id='Description' className='box-border shadow-lg p-2 rounded-lg outline-none border-2 w-full  bg-gray-100'/>
          </div>

          <div className='w-full mt-5 text-gray-900 font-vlight'>
            <Handeluploadfile/>
          </div>

          <div className='flex justify-center items-center flex-row mt-5'>

            <div className='group '>
              <input type='submit' value="ارسال گزارش" className='shadow-lg border-2 p-2 rounded-lg bg-gray-900 text-yellow-300 group-hover:bg-yellow-300 group-hover:text-gray-900 transition-all duration-300 ease-in-out cursor-pointer'/>
            </div>

            <div className='group'>
              <button onClick={clickactiveform} className='shadow-lg border-2 p-2 rounded-lg mr-5 bg-gray-900 text-yellow-300 group-hover:bg-yellow-300 group-hover:text-gray-900 transition-all duration-300 ease-in-out cursor-pointer'>انصراف</button>
            </div>
          </div>

        </form>

      </div>

      </div> */}


      <br></br><br></br><br></br>
    </React.Fragment>
  );


}
