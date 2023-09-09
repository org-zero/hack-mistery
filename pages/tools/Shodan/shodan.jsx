import React from 'react'
import Link from 'next/link'
import styles from '@/styles/shodan.module.css'


export default function shodan() {

  
  return (
    <div>
      <div className={styles.fullstack_container}>
        <center> <br /><br /><br /><br /><br /><br /><br /><br /> 
         <h1 className={styles.shodan}>Shodan Search Engine</h1></center>
    </div>


<div className={styles.shodan_principal}>
<br /><br />
<div class={styles.container}>
  <div class={styles.top}>
  <span class={styles.dot}></span>
  <span class={styles.dot}></span>
  <span class={styles.dot}></span>
   
  </div>

  <div class={styles.content}>
    <h3>Filtros con Shodan</h3><br />
    <p>
    country: Para buscar en un país en específico. country:py <br /> <br />
city: Filtro por ciudad. city:»Los Angeles» <br /> <br />
port: Para buscar dispositivos que tengan un puerto abierto. port:3306 <br /> <br />
net: Búsqueda de una ip específica o rangos de ip. ip:182.93.44.0/24 <br /> <br />
hostname: Busca el texto que le indiquemos en el nombre del host. hostname:iplocal <br /> <br />
geo: Buscar dispositivos mediante coordenadas. geo:32.9775,-70.1293 <br /> <br />
os: Para listar un sistema operativo determinado. os:Linux <br /> <br />
after: Dispositivos agregados después de la fecha. <br /> <br />
before: Lo mismo, pero antes de la fecha. after/before:27/03/2015 <br /> <br />
has_screenshot: Nos muestra dispositivos de los cuales hay una captura. has_screenshot:true
    </p>
    <br /><br />
    <Link href="./" className={styles.links}>Ver tutorial</Link>
  </div>
</div>

<div class={styles.container}>
  <div class={styles.top}>
  <span class={styles.dot}></span>
  <span class={styles.dot}></span>
  <span class={styles.dot}></span>
   
  </div>

  <div class={styles.content}>
  <iframe className={styles.video} src="https://www.youtube.com/embed/TPpKBpWKUu8?si=nf8DbZQk70AyQ1KU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
</div>


    






    </div> <br /><br />
    </div>
  )
}
