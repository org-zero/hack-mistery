import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'




const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title> &copy;Org.  Zero &rarr; Framework Z &trade;</title>
        <meta httpEquiv="refresh" content="4;url=/Fullstack" />
        <meta name="description" content="Piratas Informaticos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>          
         <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> 
<center>
<Image
      src="/img/hackers.png"
      width={100}
      height={100}
      alt="aaron"
      className={styles.hack}
    /> 
  	<div class={styles.contenedor}>
		<h1 className={styles.text_machine}> Cargando.....<span>&#160;</span></h1>
		</div>
    <br/><br/>
    <div className={styles.progress_bar}>
    <div className={styles.progress_fill}></div>
    </div>
</center>

      </main>
    </>
  )
}
