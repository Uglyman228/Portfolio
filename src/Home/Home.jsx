import React, { useEffect, useState, useRef } from 'react'
import { useTranslation } from 'react-i18next';
import man from "./images/fotor-ai-2024052917581.jpg"
import { Form, Link } from 'react-router-dom'
import {
  Card,
  Collapse,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import baikal from "./images/Baikal.png"
import cafe from "./images/Cafe.png"
import cafena from "./images/Eshik.png"
import oyna from "./images/Scoot.png"

const Home = () => {
  const [open, setOpen] = React.useState(false);

  const toggleOpen = () => setOpen((cur) => !cur);
  const { t, i18n } = useTranslation("home");
  const [language, setLanguage] = useState('en');
  const form = useRef()

  useEffect(() => {
    i18n.changeLanguage(language);
    const handleResize = () => window.innerWidth >= 960 && setOpenNav(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [language, i18n]);

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm('service_n45panf', 'template_0olvsul', form.current, {
        publicKey: 'P5fZfPzCb5PKsgdZK',
      })
      .then(() => console.log("Succes"))
      .catch(() => console.error("error"))
  }
  return (

    <section className=' bg-blue-950 dark:text-white  dark:bg-black '>
      <div className='container pb-10 text-white flex flex-col items-center justify-center text-center'>
        <div className='flex justify-between items-center pt-16' data-aos='fade-up'>
          <div className='w-full lg:w-2/4 '>
            <h1 className=' text-6xl font-jura   text-white'>
              {t("h1")}
            </h1>
          </div>
          <div className='lg:flex md:flex hidden'>
            <img src={man} alt="" className='h-[60vh] rounded-full lg:flex hidden' />
          </div>
        </div>


        <div className='flex flex-col mt-20 gap-7 w-full pb-24  pt-24 bg-green-900 dark:bg-yellow-600 rounded-3xl'>
          <div className=''>
            <h1 className=' text-5xl dark:text-black'>
              {t("about")}
            </h1>
          </div>
          <div className='flex bg-green-900 dark:bg-yellow-600'>
            <Card className="w-full  flex-col lg:flex-row flex justify-center pt-10 bg-green-900 dark:bg-yellow-600">
              <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-2/5 shrink-0 rounded-r-none bg-green-900 dark:bg-yellow-600"
              >
                <img
                  src="https://www.degreequery.com/wp-content/uploads/2020/04/shutterstock_1233726961.jpg"
                  alt="card-image"
                  className=" h-96 w-96 hidden lg:flex  object-cover rounded-full bg-green-900 dark:bg-yellow-600"
                />
              </CardHeader>
              <CardBody className='flex items-center flex-col justify-center'>
                <Typography color="gray" className="mb-8 font-normal w-96 text-2xl dark:text-black">
                  {t("aboutme")}
                </Typography>
              </CardBody>
            </Card>
          </div>
          <div className='mt-24 bg-green-900 dark:bg-yellow-600'>
            <Card className="w-full  flex-col flex justify-around pt-10 items-center gap-10 bg-green-900 dark:bg-yellow-600">
              <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-2/5 shrink-0 rounded-r-none flex items-center justify-center bg-green-900 dark:bg-yellow-600"
              >
                <img
                  src="https://ton.app/media/70c7fdda-2137-4c1b-ab16-353795c30bb4.jpg"
                  alt="card-image"
                  className=" h-24  object-cover rounded-full flex items-center justify-center dark:bg-yellow-600"
                />
              </CardHeader>
              <CardBody className='flex items-center flex-col justify-center'>
                <Typography color="gray" className="mb-8 font-normal lg:w-[750px] w-[500px] text-2xl dark:text-black">
                  {t("aboutme")}
                </Typography>
                <a href="#" className="inline-block">
                  <Link to={"/about"} >
                    <Button variant="text" className="flex items-center gap-2 hover:bg-blue-950 hover:text-white duration-700 dark:hover:bg-gray-600 text-black dark:text-white bg-white p-6 rounded-2xl dark:bg-black">
                      {t("button")}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </Button>
                  </Link>
                </a>
              </CardBody>
            </Card>
          </div>
        </div>
        <div className='flex flex-col pt-48 justify-center items-center gap-11 pb-20'>
          <div className=' text-5xl'>
            {t("contact")}
          </div>
          <div className='flex items-center justify-center gap-24 mt-16'>
            <a href="https://github.com/Uglyman228">
              <FaGithub className='w-14 h-14 hover:scale-[1.1] duration-300' />
            </a>
            <a href="https://web.telegram.org/k/#@ccy_thy">
              <FaTelegram className='w-14 h-14 hover:scale-[1.1] duration-300' />
            </a>
            <a href="https://www.instagram.com/asti.e09/">
              <FaInstagram className='w-14 h-14 hover:scale-[1.1] duration-300' />
            </a>
            <a href="">
              <FaTiktok className='w-14 h-14 hover:scale-[1.1] duration-300' />
            </a>
          </div>
          <div>
            <h1 className=' text-2xl pb-10'>
              {t("contactemail")}
            </h1>
            <Card color="transparent" shadow={false} className='bg-green-900   dark:bg-yellow-600 pb-10 pt-10  w-[600px] flex justify-center items-center text-white' >
              <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={(e) => sendEmail(e)} ref={form}>
                <div className="mb-1 flex flex-col gap-6">
                  <Typography variant="h6" color="blue-gray" className="-mb-3 b">
                    Your Name
                  </Typography>
                  <Input
                    size="lg"
                    name='name'
                    placeholder="name"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900 rounded-2xl p-3"
                    labelProps={{
                      className: "before:content-none after:content-none ",
                    }}
                  />
                  <Typography variant="h6" color="blue-gray" className="-mb-3 rounded-2xl">
                    Your Email
                  </Typography>
                  <Input
                    size="lg"
                    className=" border border-white rounded-2xl p-3"

                    color='white'
                    name='email'
                    placeholder='email'
                  />
                  <Typography variant="h6" color="blue-gray" className="-mb-3 rounded-2xl">
                    Message
                  </Typography>
                  <Textarea name='message' placeholder='message' className='rounded-2xl p-4' />
                </div>
                <Button className="mt-6  hover:bg-blue-950 hover:text-white duration-700 dark:hover:bg-gray-600 text-black dark:text-white bg-white p-3 rounded-2xl dark:bg-black" fullWidth type='submit' >
                  Send email
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
      <section className='bg-blue-950  dark:bg-yellow-600'>
        <div className='container pb-10'>
          <div className='flex justify-center items-center pt-16 pb-20'>
            <h1 className='text-5xl dark:text-black text-white'>
              {t("H1")}
            </h1>
          </div>
          <div className='flex flex-col lg:flex-row justify-between items-center pt-10 pb-36'>
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
    </section>
  )
}

export default Home