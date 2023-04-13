import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import HireMe from '@/components/HireMe'
import Head from 'next/head'
import Image from 'next/image'
import profile from "../../public/images/profile/arturprofile-side.png"
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'

export default function Home() {
  return (
    <>
      <Head>
        <title>Artur Serra - Portfolio</title>
        <meta name="description" content="Artur Serra" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className='pt-0'>
          <div className="flex items-center justify-between w-full">
            <div className="w-2/6">
              <Image 
                src={profile}
                alt="Artur Serra"
                className="h-full w-auto"
              />
            </div>

            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText text="Reliable solutions, quality code" className=' !text-left'/>
              <p className='my-4 text-base font-medium'>
                Cybersecurity graduate turned full-stack developer with a knack for blockchain development, focused on building secure and dynamic digital applications.
              </p>
              <div className='flex items-center self-start mt-2'>
                <Link 
                  href="/artur-serra-resume.pdf" target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6
                              rounded-lg text-lg font-semibold hover:bg-light 
                              hover:text-dark border-2 border-solid border-transparent
                              hover:border-dark
                  "
                  download={true}
                >
                  Resume
                  <LinkArrow className={"w-6 ml-1"}/>
                </Link>

                <Link 
                  href="https://t.me/+5511983355231"
                  className='ml-4 text-lg font-medium capitalize text-dark underline'   
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
