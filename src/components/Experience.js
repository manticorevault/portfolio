import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LineIcon from './LineIcon'

const Details = ({ position, company, time, address, work}) => {

    const ref = useRef(null);

    return <li ref={ref} className='my-8 first:mt:0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        
        <LineIcon reference={ ref } />

        <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
        >
            <h3 className='capitalize font-bold text-2xl'>
                { position }&nbsp;
            </h3>
            <h3 className='text-primary capitalize font-bold text-2xl'>
                @{company}
            </h3>
            <span className='capitalize font-medium text-dark/75'>
                { time } | { address }
            </span>

            <p className='font-medium w-full'>
                { work }                </p>
        </motion.div>
    </li>
}

const Experience = () => {

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
            Experience
        </h2>
        
        <div ref={ref} className='w-[75%] mx-auto relative'>

            <motion.div 
                className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top'
                style={{ scaleY: scrollYProgress }}
            />
            
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details 
                    position="FullStack Web Developer"
                    company="DigitalNINJA"
                    time="Oct 2021 - Oct 2022"
                    address="Romania/Remote"
                    work="Worked with an international team to develop and maintain multiple high-performing eCommerce experiences, handling over 15,000 monthly users and resulting in a boost in revenue of over 100,000$ per year.
                            Utilized NodeJS, ExpressJS, GraphQL, and TypeScript to create APIs that improved the commercial pipeline and increased store owners' productivity and delivery services. 
                            Developed storefronts using ReactJS and TypeScript, resulting in improved performance.  
                            Demonstrated strong teamwork skills and the ability to work effectively in an asynchronous team environment with developers from different countries.
                    "
                />

<               Details 
                    position="FullStack Web Developer"
                    company="DigitalNINJA"
                    time="Oct 2021 - Oct 2022"
                    address="Romania/Remote"
                    work="Worked with an international team to develop and maintain multiple high-performing eCommerce experiences, handling over 15,000 monthly users and resulting in a boost in revenue of over 100,000$ per year.
                            Utilized NodeJS, ExpressJS, GraphQL, and TypeScript to create APIs that improved the commercial pipeline and increased store owners' productivity and delivery services. 
                            Developed storefronts using ReactJS and TypeScript, resulting in improved performance.  
                            Demonstrated strong teamwork skills and the ability to work effectively in an asynchronous team environment with developers from different countries.
                    "
                />

                <Details 
                    position="FullStack Web Developer"
                    company="DigitalNINJA"
                    time="Oct 2021 - Oct 2022"
                    address="Romania/Remote"
                    work="Worked with an international team to develop and maintain multiple high-performing eCommerce experiences, handling over 15,000 monthly users and resulting in a boost in revenue of over 100,000$ per year.
                            Utilized NodeJS, ExpressJS, GraphQL, and TypeScript to create APIs that improved the commercial pipeline and increased store owners' productivity and delivery services. 
                            Developed storefronts using ReactJS and TypeScript, resulting in improved performance.  
                            Demonstrated strong teamwork skills and the ability to work effectively in an asynchronous team environment with developers from different countries.
                    "
                />

                <Details 
                    position="FullStack Web Developer"
                    company="DigitalNINJA"
                    time="Oct 2021 - Oct 2022"
                    address="Romania/Remote"
                    work="Worked with an international team to develop and maintain multiple high-performing eCommerce experiences, handling over 15,000 monthly users and resulting in a boost in revenue of over 100,000$ per year.
                            Utilized NodeJS, ExpressJS, GraphQL, and TypeScript to create APIs that improved the commercial pipeline and increased store owners' productivity and delivery services. 
                            Developed storefronts using ReactJS and TypeScript, resulting in improved performance.  
                            Demonstrated strong teamwork skills and the ability to work effectively in an asynchronous team environment with developers from different countries.
                    "
                />
            </ul>
        </div>
    </div>
  )
}

export default Experience