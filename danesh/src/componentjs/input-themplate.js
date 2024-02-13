import React from 'react';

export default function Inputthemplate(type) {

  return (
    <>
    <div className='flex justify-center items-center lg:flex-row flex-col'>
      <label htmlFor={type.id} className={`text-[10px] lg:mb-0 mb-[10px] lg:text-[13px] font-vmedium ${type.lblcss}`}>{`${type.label} : `}</label>
        <input id={type.id} {...type.formik} type={`${type.type}`} className={`border shadow-lg p-[5px] rounded-lg outline-none bg-gray-100 lg:mr-[10px] mr-0  ${type.css}`}/>
    </div>
    </>
  )
}

