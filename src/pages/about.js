import React, { useRef, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import aboutProfile from "../../public/images/profile/arturprofile-business.jpg"
import { useInView, useMotionValue, useSpring } from 'framer-motion'

const AnimatedNumbers = ({ value }) => {

    const ref = useRef(null);

    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if(isInView) {
            motionValue.set(value)
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if(ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0)
            }
        })
    }, [springValue, value])

    return <span ref={ref}></span>
}

const about = () => {
  return (
      <>
        <Head>
            <title>
                Artur Serra | About Page
            </title>

            <meta name="description" content="test description"/>
        </Head>

        <main className='flex w-full flex-col items-center justify-center'>
            <Layout className='pt-16'>
                <AnimatedText text="Inspiration ignites innovation" className=''/>

                <div className='grid w-full grid-cols-8 gap-16'>
                    <div className='col-span-3 flex flex-col items-start justify-start'>
                        <h2 className='mb-4 mt-16 text-lg font-bold uppercase text-dark/75'>
                            whoami
                        </h2>

                        <p className='font-medium'>
                            Hello there! Thanks for making it here, it makes me really pleased! I am Artur, a web developer and software engineer with a passion for pushing the boundaries of innovation and integrating sustainable tech into my projects. With a degree in Cybersecurity and an MBA also in Cybersecurity focused on DevSecOps, I have what you need to make your applications secure. But with my background in web development, my passion for art and my business knowledge, I check every field if you want to make your ideas stand out. I don't build products, I turn dreams into reality.
                        </p>
                        
                        <p className='font-medium my-4'>
                        In my three years of experience in the software development field, I cultivated a keen eye for detail and a knack for delivering projects that bring real value to clients. My approach to application development is thoughtful and meticulous, always considering the full lifecycle of a project.
                        </p>

                        <p className='font-medium'>
                            As a professional who is dedicated to staying on top of the latest trends in tech, I am the perfect addition to any team looking for someone who can bring fresh ideas and innovation to the table. If you're seeking a talented web developer and software engineer who prioritizes success and sustainability, look no further. I am here.
                        </p>

                    </div>

                    <div className='col-span-3 relative h-max rounded-2xl pt-16
                    '>
                    <div className='absolute top-15% -right-3 -z-10 w-[102%] h-[92%] rounded-[2rem] bg-dark'/>
                        <Image 
                            src={aboutProfile} alt="Artur Serra" className="w-full h-auto rounded-2xl border-2 border-dark
                                bg-light p-8
                            "
                        />
                    </div>

                    <div className='col-span-2 pt-16 flex flex-col items-end justify-between'>

                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-7xl font-bold'>
                               <AnimatedNumbers value={3}/>+
                            </span>
                            <h2 className='text-xl font-medium text-dark/75'>
                                years of experience
                            </h2>
                        </div>

                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-7xl font-bold'>
                               <AnimatedNumbers value={25} />+
                            </span>
                            <h2 className='text-xl font-medium text-dark/75'>
                                satisfied clients
                            </h2>
                        </div>

                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-7xl font-bold'>
                                <AnimatedNumbers value={30}/>k+
                            </span>
                            <h2 className='text-xl font-medium text-dark/75'>
                                users handled
                            </h2>
                        </div>
                    </div>
                </div>
            </Layout>
        </main>
      </>
  )
}

export default about