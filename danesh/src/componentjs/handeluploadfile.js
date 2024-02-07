import React, { useEffect,useState,useContext } from 'react';
import { MdCloudUpload } from "react-icons/md";
import { mycontext } from '../../pages/context-API';



export default function Handeluploadfile() {

  const {setuploadfile,uploadfile}=useContext(mycontext);

  const handeldrop = (e) => {
    e.preventDefault();
    setDroppedFiles(e.dataTransfer.files);
  
  };

  const handleFileSelect = (e) => {
    setuploadfile(e.target.files);
  };

  return (
    <>
      <div className="flex items-center justify-center bg-grey-lighter" onDrop={handeldrop}>
        <label htmlFor="fileselect" className="w-64 relative flex flex-col items-center px-4 py-6 rounded-lg border shadow-lg cursor-pointer overflow-hidden  bg-gray-100">
          <MdCloudUpload className='w-[30px] h-[30px]' />
          <span className="mt-2 text-base leading-normal mb-4">فایل مورد نظر خود را وارد یا بکشید</span>

          <input id='fileselect' name='uploadfile' type='file' className=' w-full h-full z-10 cursor-pointer' multiple
            onChange={handleFileSelect}/>

        </label>
      </div>
      
      
    </>
  )
}
