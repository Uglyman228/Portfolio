import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";

export const Foooter = () => {
  const { t, i18n } = useTranslation("footer");
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    i18n.changeLanguage(language);
    const handleResize = () => window.innerWidth >= 960 && setOpenNav(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [language, i18n]);
  return (
    <footer className="text-secondary duration-300 text-white   bg-blue-950 dark:bg-black pb-10 ">
      <div className='container'>
      <div className="container flex flex-row justify-between border-white  border-t border-t-secondary  h-full pt-5 items-center">
        <h1 className="font-jura text-5xl  dark:text-white text-white text-center">{t("thanks")}</h1>
      </div>
      </div>
    </footer>
  )
}
