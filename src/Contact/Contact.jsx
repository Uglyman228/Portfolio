import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [open, setOpen] = React.useState(false);

  const toggleOpen = () => setOpen((cur) => !cur);
  const { t, i18n } = useTranslation("contact");
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
  };

  return (
    <section className=' bg-blue-950  dark:bg-yellow-600 '>
      <div className='flex flex-col  justify-center container items-center gap-11 pt-16 pb-16'>
        <div className=' text-4xl dark:text-black text-white pt-20'>
          <h1 className='text-center'>
            {t("contacth1")}
          </h1>
        </div>

        <Card color="transparent" shadow={false} className='bg-green-900 dark:bg-black pb-10 pt-10  lg:w-[600px] flex justify-center items-center text-white' >
          <form className="mt-8 mb-2 px-3 lg:w-80 max-w-screen-lg sm:w-96 pb-10" onSubmit={(e) => sendEmail(e)} ref={form}>
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Name
              </Typography>
              <Input
                size="lg"
                name='name'
                placeholder="name"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 p-3 px-2 rounded-2xl"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Email
              </Typography>
              <Input
                size="lg"
                className=" border border-white p-3 rounded-2xl focus:ring-2 focus:ring-blue-600"
                label=''
                color='white'
                name='email'
                placeholder='email'
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Message
              </Typography>
              <Textarea name='message' className='p-4 rounded-2xl' placeholder='message' />
            </div>
            <Button className="mt-6 bg-white text-black  hover:bg-blue-950 hover:text-white duration-700 dark:text-black dark:bg-white dark:hover:text-white dark:hover:bg-gray-400 p-3 rounded-2xl " fullWidth type='submit' >
              Send email
            </Button>
          </form>
        </Card>

        <h1 className=' text-2xl dark:text-black text-white'>
          {t("contactor")}
        </h1>
        <div className='flex items-center justify-center lg:gap-24 gap-10 mt-16 pb-10'>
          <a href="https://github.com/Uglyman228">
            <FaGithub className='w-14 h-14 text-white dark:text-black hover:scale-[1.1] duration-300' />
          </a>
          <a href="https://web.telegram.org/a/#1981271397">
            <FaTelegram className='w-14 h-14 text-white dark:text-black hover:scale-[1.1] duration-300' />
          </a>
          <a href="">
            <FaInstagram className='w-14 h-14 text-white dark:text-black hover:scale-[1.1] duration-300' />
          </a>
          <a href="">
            <FaTiktok className='w-14 h-14 text-white dark:text-black hover:scale-[1.1] duration-300' />
          </a>
        </div>
        <div>

        </div>
      </div>
    </section>
  )
}

export default Contact

export function SimpleRegistrationForm() {
  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Name
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900 p-6"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900 "
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button className="mt-6" fullWidth>
          sign up
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <a href="#" className="font-medium text-gray-900">
            Sign In
          </a>
        </Typography>
      </form>
    </Card>
  );
}