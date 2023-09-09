import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'




export default function Layout({ children, title, description }) {

    const hack = "Ethical Hacker"
    const developer = "Fullstack"

    Layout.defaultprops = {

      description : "Anonymous. The Mystery House of Software Piracy"
  }

    return (
        <div>

      <Head>
        <title> {title} </title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>
         
          <nav className="Navbar">
         
          <div className='Navbar_Left'> <br /> <i class="fa fa-code-fork" aria-hidden="true"></i> Org. Zero </div>

          <div className='Navbar_Rigth'>
             <Link href="Fullstack"  className='links'> <i className='fa fa-code'></i> {developer}  </Link>
             <Link href="Pentester"   className='links'> <i className='fa fa-bug'></i> {hack} </Link>
          </div>
         
          </nav>

        <main>
           {children}
         </main>
       <br /><br />   
   

   
        </div>
    )
    
}


