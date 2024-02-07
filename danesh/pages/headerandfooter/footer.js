import React from 'react';
import {AiOutlinePhone,AiOutlineInstagram,AiOutlineMail} from "react-icons/ai"
import {FaTelegramPlane} from "react-icons/fa"
import {BsDiscord} from "react-icons/bs"

export default function Footer() {
  return (
    <>
    <footer className=" dark:bg-gray-900 bg-gray-900 text-white">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 bg-gray-900">
           

            <p
            className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 dark:text-gray-400 font-vmedium text-[20px]"
            >
           شما میتوانید گزارشات خود مربوطه به اصلاح کلاس ها وکارگاه ها را در این صفحه گزارش نمایید
            </p>

            <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12 font-vmedium">
            <li>
                <a
                className="text-white transition hover:text-yellow-300 dark:text-white dark:hover:text-yellow-300 "
                href="/"
                >
                درباره ما
                </a>
            </li>

            <li>
                <a
                className="text-white transition hover:text-yellow-300 dark:text-white dark:hover:text-yellow-300 "
                href="/"
                >
                اصلاحات
                </a>
            </li>

            <li>
                <a
                className="text-white transition hover:text-yellow-300 dark:text-white dark:hover:text-yellow-300 "
                href="/"
                >
                تاریخچه
                </a>
            </li>

            <li>
                <a
                className="text-white transition hover:text-yellow-300 dark:text-white dark:hover:text-yellow-300 "
                href="/"
                >
                خدمات ما
                </a>
            </li>

            <li>
                <a
                className="text-white transition hover:text-yellow-300 dark:text-white dark:hover:text-yellow-300 "
                href="/"
                >
                گالری تصاویر
                </a>
            </li>

            <li>
                <a
                className="text-white transition hover:text-yellow-300 dark:text-white dark:hover:text-yellow-300 "
                href="/"
                >
                بلاگ
                </a>
            </li>
            </ul>

            <ul className="mt-12 flex justify-center gap-6 md:gap-8">
            <li>
                <a href="/" rel="noreferrer" target="_blank"
                className="text-white transition hover:text-yellow-300/75 dark:text-white dark:hover:text-yellow-300/75"
                 >
               <AiOutlinePhone className=' w-[30px] h-[30px]'/>
                </a>
            </li>
            <li>
                <a href="/" rel="noreferrer" target="_blank"
                className="text-white transition hover:text-yellow-300/75 dark:text-white dark:hover:text-yellow-300/75"
                 >
               <FaTelegramPlane className=' w-[30px] h-[30px]'/>
                </a>
            </li>
            <li>
                <a href="/" rel="noreferrer" target="_blank"
                className="text-white transition hover:text-yellow-300/75 dark:text-white dark:hover:text-yellow-300/75"
                 >
               <AiOutlineInstagram className=' w-[30px] h-[30px]'/>
                </a>
            </li>
            <li>
                <a href="/" rel="noreferrer" target="_blank"
                className="text-white transition hover:text-yellow-300/75 dark:text-white dark:hover:text-yellow-300/75"
                 >
               <BsDiscord className=' w-[30px] h-[30px]'/>
                </a>
            </li>
            <li>
                <a href="/" rel="noreferrer" target="_blank"
                className="text-white transition hover:text-yellow-300/75 dark:text-white dark:hover:text-yellow-300/75"
                 >
               <AiOutlineMail className=' w-[30px] h-[30px]'/>
                </a>
            </li>

            </ul>
        </div>
    </footer>
    
    </>
  )
}
