import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import Switcher from '../Theme/Switcher';
import { GiHamburgerMenu } from "react-icons/gi";
import {
    Navbar,
    MobileNav,
    IconButton,
} from "@material-tailwind/react";

export const Header = () => {
    const [openNav, setOpenNav] = React.useState(false);
    const { t, i18n } = useTranslation("header");
    const [language, setLanguage] = useState('en');

    useEffect(() => {
        i18n.changeLanguage(language);
        const handleResize = () => window.innerWidth >= 960 && setOpenNav(false);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [language, i18n]);
    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <li className='hover:underline hover:underline-offset-8  hover:text-blue-200 hover:scale-[0.9]  duration-300 '>
                <Link to={"/About"}>
                    {t("about")}
                </Link>
            </li>
            <li className='hover:underline hover:underline-offset-8  hover:text-blue-200 hover:scale-[0.9]  duration-300'>
                <Link to={"/Contact"}>
                    {t("contact")}
                </Link>
            </li>
            <li className='hover:underline hover:underline-offset-8  hover:text-blue-200 hover:scale-[0.9]  duration-300'>
                <Link to={"/projects"}>
                    {t("projects")}
                </Link>
            </li>
        </ul>
    );

    return (
        <Navbar className="dark:text-white dark:bg-black text-white bg-blue-900  top-0 sticky z-50 border-none rounded-none py-3" >
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <Link to={"/"}>
                    <h1 className='font-jura lg:text-5xl text-2xl flex'>SHOXA</h1>
                </Link>
                <div className="hidden lg:block">{navList}</div>
                <div className='flex lg:gap-10 gap-4 items-center'>
                    <Switcher className=' bg-white w-5 h-5' />
                    <select name="" id=""
                        defaultValue="en"
                        onChange={(e) => setLanguage(e.target.value)} className=' bg-blue-900 dark:bg-black '>
                        <option value="en">EN</option>
                        <option value="ru">RU</option>
                    </select>
                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </IconButton>
                </div>
            </div>
            <MobileNav open={openNav}>
                <div className="container mx-auto">
                    {navList}
                </div>
            </MobileNav>
        </Navbar>
    );
}
// export const Header = () => {
//     const { t, i18n } = useTranslation("header");
//     const [language, setLanguage] = useState('en');

//     useEffect(() => {
//         i18n.changeLanguage(language);
//         const handleResize = () => window.innerWidth >= 960 && setOpenNav(false);
//         window.addEventListener("resize", handleResize);
//         return () => window.removeEventListener("resize", handleResize);
//     }, [language, i18n]);

//     return (
//         <header className=' dark:text-white dark:bg-black text-white bg-blue-900  top-0 sticky z-50 '>
//             <div className='container  w-full lg:gap-28 gap-2 flex-row md:flex-row justify-around   flex lg:justify-between items-center h-20'>
//                 <Link to={"/"}>
//                     <h1 className='font-jura lg:text-5xl text-2xl flex'>SHOXA</h1>
//                 </Link>
//                 <div className='flex '>
//                     <ul className='lg:flex items-center justify-between text-xl gap-10 hidden  '>
//                         <li className='hover:underline hover:underline-offset-8  hover:text-blue-200 hover:scale-[0.9]  duration-300 '>
//                             <Link to={"/About"}>
//                                 {t("about")}
//                             </Link>
//                         </li>
//                         <li className='hover:underline hover:underline-offset-8  hover:text-blue-200 hover:scale-[0.9]  duration-300'>
//                             <Link to={"/Contact"}>
//                                 {t("contact")}
//                             </Link>
//                         </li>
//                         <li className='hover:underline hover:underline-offset-8  hover:text-blue-200 hover:scale-[0.9]  duration-300'>
//                             <Link to={"/projects"}>
//                                 {t("projects")}
//                             </Link>
//                         </li>
//                     </ul>
//                 </div>
//                 <div className='flex lg:gap-10 gap-4  '>
//                     <Switcher className=' bg-white w-5 h-5' />
//                     <select name="" id=""
//                         defaultValue="en"
//                         onChange={(e) => setLanguage(e.target.value)} className=' bg-blue-900 dark:bg-black '>
//                         <option value="en">EN</option>
//                         <option value="ru">RU</option>
//                     </select>
//                     <GiHamburgerMenu className='flex lg:hidden mt-4 items-center justify-center ' />
//                 </div>
//             </div>
//         </header>
//     )
// }