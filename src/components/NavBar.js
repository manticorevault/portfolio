import React, { useState } from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { useRouter } from 'next/router'
import { TwitterIcon, GithubIcon, LinkedInIcon, SunIcon, MoonIcon } from './Icons'
import { motion } from 'framer-motion'
import useThemeSwitcher from './hooks/useThemeSwitcher'

const CustomLink =({ href, title, className="" }) => {

    const router = useRouter();

    return (
        <Link href={href} className={`${ className } relative group`}>
            {title}

            <span className={`
                        h-[2px] inline-block w-0 bg-dark 
                        absolute left-0 -bottom-0.5
                        group-hover:w-full transition-[width]
                        ease duration-300
                        ${router.asPath === href ? "w-full" : "w-0"}
                        `}>
                &nbsp;
            </span>
        </Link>
    )
}

const CustomMobileLink =({ href, title, className="", toggle }) => {

    const router = useRouter();

    const handleClick = () => {
        toggle()
        router.push(href)
    }

    return (
        <button href={href} className={`${ className } relative group text-light my-2`} onClick={handleClick}>
            {title}

            <span className={`
                        h-[2px] inline-block w-0 bg-light 
                        absolute left-0 -bottom-0.5
                        group-hover:w-full transition-[width]
                        ease duration-300
                        ${router.asPath === href ? "w-full" : "w-0"}
                        `}>
                &nbsp;
            </span>
        </button>
    )
}

const NavBar = () => {

    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false);
    
    const handleClick = () => {
        setIsOpen(!isOpen)
    }

  return (
    <header
        className="w-full px-32 py-8 font-medium flex items-center justify-between relative"
    >

        <button 
            className='flex flex-col justify-center items-center lg:hidden' 
            onClick={handleClick}
        >
            <span className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}>

            </span>

            <span className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
                
            </span>

            <span className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}>      
                
            </span>
        </button>


        <div className='w-full justify-between items-center hidden lg:flex'>
            <nav>
                <CustomLink href="/" title="Home" className="mr-4"/>

                <CustomLink href="/about" title="About" className="mx-4"/>

                <CustomLink href="/projects" title="Projects" className="mx-4"/>

                <CustomLink href="https://therustyco.de/" target={"_blank"} title="Blog" className="ml-4"/>
            </nav>

            <nav className='flex items-center justify-center flex-wrap'>
                <motion.a href="https://twitter.com/thearturserra" target={"_blank"}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mr-3"
                >
                    <TwitterIcon />
                </motion.a>

                <motion.a href="https://github.com/manticorevault" target={"_blank"}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mx-3"
                >
                    <GithubIcon />
                </motion.a>

                <motion.a href="https://linkedin.com/in/artur-serra" target={"_blank"}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 ml-3"
                >
                    <LinkedInIcon />
                </motion.a>
            </nav>
        </div>

        {
            isOpen ? 
                <motion.div 
                    initial={{scale:0, opacity: 0, x: "-50%", y:"-50%"}}
                    animate={{scale:1, opacity:1}}
                    className='flex min-w-[70vw] flex-col justify-between items-center 
                    z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                    bg-dark/90 rounded-lg backdrop-blur-md py-32
                    '
                >
                    <nav className='flex items-center flex-col justify-center'>
                        <CustomMobileLink href="/" title="Home" className="" toggle={handleClick}/>

                        <CustomMobileLink href="/about" title="About" className="" toggle={handleClick}/>

                        <CustomMobileLink href="/projects" title="Projects" className="" toggle={handleClick}/>

                        <CustomMobileLink href="https://therustyco.de/" target={"_blank"} title="Blog" className="" toggle={handleClick}/>
                    </nav>

                    <nav className='flex items-center justify-center flex-wrap mt-2'>
                        <motion.a href="https://twitter.com/thearturserra" target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 mr-3 sm:mx-1"
                        >
                            <TwitterIcon />
                        </motion.a>

                        <motion.a href="https://github.com/manticorevault" target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 mx-3 bg-light rounded-full sm:mx-1"
                        >
                            <GithubIcon />
                        </motion.a>

                        <motion.a href="https://linkedin.com/in/artur-serra" target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 ml-3"
                        >
                            <LinkedInIcon />
                        </motion.a>
                    </nav>
                </motion.div>
            : null
        }
        <div className="absolute left-[50%] top-2 translate-x-[-50%]"> 
            <Logo />
        </div>
    </header>
  )
}

export default NavBar