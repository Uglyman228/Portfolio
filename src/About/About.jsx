import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import me from "./images/me.jpg"

import {
  Card,
  Collapse,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";


  const About = () => {
    const [open, setOpen] = React.useState(false);
  
    const toggleOpen = () => setOpen((cur) => !cur);
    const { t, i18n } = useTranslation("aboutt");
    const [language, setLanguage] = useState('en');
  
    useEffect(() => {
      i18n.changeLanguage(language);
      const handleResize = () => window.innerWidth >= 960 && setOpenNav(false);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, [language, i18n]);


  return (
    <div className=' bg-blue-950  dark:bg-yellow-600'>
      <div className='container flex flex-col  gap-14 w-full pb-44  pt-24'>
    <div className='bg-blue-950 dark:bg-yellow-600 flex items-center justify-center'>
      <h1 className=' text-5xl dark:text-black text-white'>
        {t("about")}
      </h1>
    </div>
    <div className='flex bg-blue-950 dark:bg-yellow-600'>
      <Card className="w-full  flex justify-around pt-10 flex-col lg:flex-row bg-blue-950 dark:bg-yellow-600">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none bg-blue-950 dark:bg-yellow-600"
        >
          <img
            src="https://www.jagoanhosting.com/blog/wp-content/uploads/2020/10/arnold-francisca-nPhl2x4fk2s-unsplash-1024x683.jpg "
            alt="card-image"
            className="  object-cover h-[400px] w-full rounded-xl hidden lg:flex  bg-blue-950 dark:bg-yellow-600"
          />
        </CardHeader>
        <CardBody className='flex items-center flex-col justify-center'>
          <Typography color="gray" className="mb-8 font-normal lg:w-[560px] text-center h-full text-sm  lg:text-2xl dark:text-black text-white ">
            {t("aboutme1")}
          </Typography>
          <a href="#" className="inline-block">
           
          </a>
        </CardBody>
      </Card>
    </div>
    <div className='mt-24 bg-blue-950 dark:bg-yellow-600'>
      <Card className="w-full   flex-col lg:flex-row-reverse flex justify-around pt-10 items-center gap-10 bg-blue-950 dark:bg-yellow-600">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none flex items-center justify-center bg-blue-950 dark:bg-yellow-600"
        >
          <img
            src="https://www.epitech-it.es/wp-content/uploads/2022/07/danial-igdery-FCHlYvR5gJI-unsplash-1536x864.jpg"
            alt="card-image"
            className=" object-cover flex items-center justify-center dark:bg-yellow-600 rounded-xl"
          />
        </CardHeader>
        <CardBody className='flex items-center flex-col justify-center'>
          <Typography color="gray" className="mb-8 font-normal  lg:w-[560px] h-full text-2xl dark:text-black text-white text-center">
            {t("aboutmee")}
          </Typography>
          <a href="#" className="inline-block">
          
          </a>
        </CardBody>
      </Card>
    </div>
  </div>

      </div>
  )
}

export default About