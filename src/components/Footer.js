import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark
              font-medium text-lg'
    >
      <Layout className='py-8 flex items-center justify-between'>
        <span>
          {new Date().getFullYear()} &copy; All Rights Reserved.
        </span>

        <div className='flex items-center'>
            Crafted with 
            <span className='text-primary text-2xl px-1'> 
              &#9825; 
            </span>
            <Link href="/" className="underline underline-offset-2">
              by Artur Serra
            </Link>
        </div>

        <Link href="mailto:artur.aserra@gmail.com" 
                    className='flex items-center justify-center bg-light text-dark p-2.5 px-6
                    rounded-lg text-lg font-semibold hover:bg-dark 
                    hover:text-light border-2 border-solid border-dark
                    hover:border-light'
        >
          Hire me!    
        </Link>
      </Layout>
    </footer>
  )
}

export default Footer