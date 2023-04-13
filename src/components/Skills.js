import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LineIcon from './LineIcon'

const Details = ({ area, categories }) => {

    const ref = useRef(null);

    return <li ref={ref} className='my-8 first:mt:0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        
        <LineIcon reference={ ref } />

        <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
        >
            <h3 className='capitalize font-bold text-2xl'>
                { area }&nbsp;
            </h3>

            <p className='font-medium w-full'>
                { categories }                </p>
        </motion.div>
    </li>
}

const Skills = () => {

    const ref = useRef(null)
    const { scrollYProgress } = useScroll(

        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )

  return (
    <div className='mb-64 mt-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center'>
            Skills
        </h2>
        
        <div ref={ref} className='w-[75%] mx-auto relative'>

            <motion.div 
                className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top'
                style={{ scaleY: scrollYProgress }}
            />
            
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details 
                    area="Development"
                    categories="TypeScript, JavaScript, HTML, ReactJS, TailwindCSS, Boostrap, Semantic UI, Saas, React Native, NextJS, Cascading Style Sheets (CSS), NodeJS, ExpressJS, Firebase, Rust, Rest APIs GraphQL, MongoDB, MariaDB, NoSQL, Insomnia"
                />

                <Details 
                    area="Security"
                    categories="Web Application Security, Ethical Hacking, Web Application Pentesting, Kali Linux, OWASP, DevSecOps, Vulnerability Management, Authentication"
                />
                <Details 
                    area="Cloud Computing"
                    categories="AWS, Lamba Functions, Serverless Architecture, CI/CD, Cloud Infrastructure, Microservices, Vercel, Netlify, Heroku"
                />

                <Details 
                    area="Blockchain"
                    categories="Ethereum, Solidity, Solana, IPFS, Alchemy, NEAR Protocol, Chainlink, Filecoin, Blockchain Security, Remix, Truffle Suite"
                />

                <Details 
                    area="Visuals"
                    categories="Adobe Photoshop, Canva, Asesprite, MagicaVoxel, Blender, Unreal Engine 5, Godot, Notion, Trello, Asana"
                />

                <Details 
                    area="Soft Skills"
                    categories="Teamwork, Mentoring, Presentations, Creativity, Problem Solving, Collaborative Problem Solving, Interdisciplinary Collaboration, Easily Adaptable, Agile Methods"
                />
            </ul>
        </div>
    </div>
  )
}

export default Skills