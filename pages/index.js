import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return ( 
    <>
      <Head>
        <title>
            Homepage
        </title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}> This website was created as part of my educational journey into web development with a specific focus on Next.js. It serves as a practical learning exercise and is intended solely for educational purposes. Through this project, I aim to explore and understand the capabilities of Next.js while honing my web development skills. Please note that this website is not meant for commercial use and is purely a product of my studies and experimentation in web development. </p>
        <Link href="/ninjas" className={styles.btn}>
          Another page here
        </Link>
      </div>
    </>
    
   )
}
