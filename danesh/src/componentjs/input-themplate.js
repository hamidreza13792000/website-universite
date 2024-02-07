import React from 'react';

export default function Inputthemplate(type) {

  return (
    <>
    <div className=''>
      <label htmlFor={type.id} className='text-[10px] lg:text-[13px] font-vmedium'>{`${type.label} : `}</label>
        <input id={type.id} {...type.formik} type={`${type.type}`} className={`border shadow-lg p-[5px] rounded-lg outline-none bg-gray-100  ${type.css}`}/>
    </div>
    </>
  )
}

