import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import atomicoProject from "../../public/images/projects/atomico.png"
import toffProject from "../../public/images/projects/toff.png"

const FeaturedProject = ({ type, title, summary, img, link, github }) => {

    return (
        <article className='w-full flex items-center justify-between
                            rounded-3xl border border-solid border-dark
                            bg-light shadow-2xl p-12 relative rounded-br-2xl
        '>

            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%]
                 rounded-[2.5rem] bg-dark rounded-br-3xl'
            />
            
            <Link href={link} target="_blank"
                className='w-1/2 cursor-pointer overflow-hidden rounded-lg'
            >
                <Image 
                    src={img} 
                    alt={title}
                    className="w-full h-auto"
                />
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                <span className='text-primary font-medium text-xl'>
                    { type }
                </span>

                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold'>
                        { title }
                    </h2>
                </Link>
                <p className='my-2 font-medium text-dark '>
                    { summary }
                </p>

                <div className='mt-2 flex items-center'>
                    <Link href={github} target="_blank" className='w-10'>
                        <GithubIcon />
                    </Link>

                    <Link href={link} target="_blank"
                        className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'
                    >
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({ title, type, img, link, github }) => {
    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl
                            border border-solid border-dark bg-light p-6 relative

        '>

            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%]
                 rounded-[2rem] bg-dark rounded-br-3xl'
            />

            <Link href={link} target="_blank"
                className='w-full cursor-pointer overflow-hidden rounded-lg'
            >
                <Image 
                    src={img} 
                    alt={title}
                    className="w-full h-auto"
                />
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl'>
                    { type }
                </span>

                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold'>
                        { title }
                    </h2>
                </Link>
                
                <div className='w-full mt-2 flex items-center justify-between'>

                    <Link href={link} target="_blank"
                            className='text-lg font-semibold underline'
                    >
                        Visit
                    </Link>

                    <Link href={github} target="_blank" className='w-8'>
                        <GithubIcon />
                    </Link>
                </div>
            </div>
        </article>
    )
}

const projects = () => {
  return (
    <>
        <Head>
            <title>
                Artur Serra | Project Page
            </title>

            <meta name="description" content="test description"/>
        </Head>

        <main className='w-full mb-16 flex flex-col items-center justify-center'>
            <Layout className='pt-16'>
                <AnimatedText text="Glimpe the unthinkable"/>

                <div className='grid grid-cols-12 gap-24 gap-y-32 mt-12'>
                    <div className='col-span-12'>
                        <FeaturedProject 
                            
                            title="Atomico"
                            img={atomicoProject}
                            summary="Feature-rich eCommerce marketplace focused on fast, reliable buying experience. Built with VTEX, React, TypeScript and GraphQL"
                            link="https://www.atomico.ro"
                            github="github.com/manticorevault"
                            type="Featured Project"
                        />
                    </div>

                    <div className='col-span-6'>
                        <Project 
                            
                            title="Atomico"
                            img={atomicoProject}
                            link="https://www.atomico.ro"
                            github="github.com/manticorevault"
                            type="Project"
                        />
                    </div>

                    <div className='col-span-6'>
                        <Project 
                            
                            title="Atomico"
                            img={atomicoProject}
                            link="https://www.atomico.ro"
                            github="github.com/manticorevault"
                            type="Project"
                        />
                    </div>

                    <div className='col-span-12'>
                        <FeaturedProject 
                            
                            title="TOFF"
                            img={toffProject}
                            summary="Sophisticated, minimalist eCommerce website for a fashion brand. Focus on displaying a beautiful frontend. Built with VTEX, React, Typescript and GraphQL"
                            link="https://www.toff.ro/"
                            github="github.com/manticorevault"
                            type="Featured Project"
                        />
                    </div>
                </div>  
            </Layout>
        </main>
    </>
  )
}

export default projects