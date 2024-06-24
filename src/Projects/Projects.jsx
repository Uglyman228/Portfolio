import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import baikal from "./images/Baikal.png"
import cafe from "./images/Cafe.png"
import cafena from "./images/Eshik.png"
import oyna from "./images/Scoot.png"

export const Projects = () => {
  const { t, i18n } = useTranslation("projects");
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    i18n.changeLanguage(language);
    const handleResize = () => window.innerWidth >= 960 && setOpenNav(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [language, i18n]);



  return (
    <section className='bg-blue-950  dark:bg-yellow-600'>
      <div className='container pb-10'>
        <div className='flex justify-center items-center pt-28 pb-10'>
          <h1 className='text-5xl dark:text-black text-white'>
            {t("H1")}
          </h1>
        </div>
        <div className='flex flex-col lg:flex-row justify-between items-center pt-10 pb-24'>
          <div className='flex flex-col gap-10'>
            <a href="">
              <img src={baikal} alt="" className='w-[500px] hover:scale-[1.1] duration-300' />
            </a>
            <h1 className='flex items-center justify-center text-blue-400 underline cursor-pointer underline-offset-2 dark:text-blue-900 hover:text-blue-200 duration-300 dark:hover:text-blue-300 w-full h-full'>
              {t("opn")}
            </h1>
            <a href="https://eshik-oyna-shohsulton-uqa7.vercel.app/">
              <img src={cafe} alt="" className='w-[500px] hover:scale-[1.1] duration-300' />
            </a>
            <h1 className='flex items-center justify-center text-blue-400 underline cursor-pointer underline-offset-2 dark:text-blue-900 hover:text-blue-200 duration-300 dark:hover:text-blue-300 w-full h-full'>
              {t("opn")}
            </h1>
          </div>
          <div className='flex flex-col gap-10'>
            <a href="">
              <img src={cafena} alt="" className='w-[500px] hover:scale-[1.1] duration-300' />
            </a>
            <h1 className='flex items-center justify-center text-blue-400 underline cursor-pointer underline-offset-2 dark:text-blue-900 hover:text-blue-200 duration-300 dark:hover:text-blue-300 w-full h-full'>
              {t("opn")}
            </h1>
            <a href="https://scoot-xi.vercel.app/">
              <img src={oyna} alt="" className='w-[530px] h-full hover:scale-[1.1] duration-300' />
            </a>
            <h1 className='flex items-center justify-center text-blue-400 underline cursor-pointer underline-offset-2 dark:text-blue-900 hover:text-blue-200 duration-300 dark:hover:text-blue-300 w-full h-full'>
              {t("opn")}
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}
