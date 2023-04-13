import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LineIcon from './LineIcon'

const Details = ({ type, place, time, info }) => {

    const ref = useRef(null);

    return <li ref={ref} className='my-8 first:mt:0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        
        <LineIcon reference={ ref } />

        <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
        >
            <h3 className='capitalize font-bold text-2xl'>
                { type }&nbsp;
            </h3>
            <h3 className='text-primary capitalize font-bold text-2xl'>
                @{place}
            </h3>
            <span className='capitalize font-medium text-dark/75'>
                { time }
            </span>

            <p className='font-medium w-full'>
                { info }                </p>
        </motion.div>
    </li>
}

const Education = () => {

    const ref = useRef(null)
    const { scrollYProgress } = useScroll(

        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )

  return (
    <div className='mb-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center'>
            Education
        </h2>
        
        <div ref={ref} className='w-[75%] mx-auto relative'>

            <motion.div 
                className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top'
                style={{ scaleY: scrollYProgress }}
            />
            
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details 
                    type="Solidity Development Bootcamp"
                    place="Encode"
                    time="Feb 2023 - Apr 2023"
                    info="Worked with blablabla Worked with blablabla Worked with blablabla Worked with blablabla Worked with blablabla"
                />

                <Details 
                    type="MBA in Cybersecurity (DevSecOps)"
                    place="FIAP"
                    time="Mar 2021 - Mar 2022"
                    info="Worked with blablabla Worked with blablabla Worked with blablabla Worked with blablabla Worked with blablabla"
                />
                <Details 
                    type="Web Development Bootcamp"
                    place="IronHack Lisbon"
                    time="Apr 2020 - Jun 2020"
                    info="Worked with blablabla Worked with blablabla Worked with blablabla Worked with blablabla Worked with blablabla"
                />

                <Details 
                    type="Bachelor of Technology"
                    place="FIAP"
                    time="Jan 2019 - Jan 2021"
                    info="Worked with blablabla Worked with blablabla Worked with blablabla Worked with blablabla Worked with blablabla"
                />  
            </ul>
        </div>
    </div>
  )
}

export default Education