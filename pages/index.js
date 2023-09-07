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
            Ninja List | Homepage
        </title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}> Texto texto texto texto texto texto texto texto texto texto texto texto texto </p>
        <p className={styles.text}> Texto texto texto texto texto texto texto texto texto texto texto texto texto </p>
        <Link href="/ninjas" className={styles.btn}>
          Veja outra página aqui
        </Link>
      </div>
    </>
    
   )
}
