import Layout from "@/components/Layout"
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from "../styles/Fullstack.module.css"



export default function Fullstack () {

    
    return(
      
        <Layout title="Org. Zero" description="Framework Z">

<div className={styles.fullstack_container}>
<div className={styles.grid}>
  <article className={styles.main}> <br />  
    <h1>Anonymous. The Mystery House of Software Piracy</h1> <br />
    <p>
    Nuestra innovadora herramienta de ciberseguridad es mucho más que una simple solución de protección. <br /><br />
    Es un tesoro de conocimiento a tu alcance. Con una vasta colección de recursos en constante actualización, incluyendo PDF, documentaciones técnicas y acceso a foros exclusivos, no solo defendemos tus activos digitales, sino que te empoderamos para comprender y aprender de las amenazas cibernéticas. <br /><br />
    Nuestra herramienta es tu socio de confianza en el emocionante viaje de la ciberseguridad, proporcionándote las herramientas y la información necesaria para estar un paso adelante en la protección de tu entorno digital. <br /><br />
    Este párrafo enfatiza la riqueza de recursos que ofrece tu herramienta de ciberseguridad para que los usuarios puedan aprender y mejorar su comprensión de las amenazas cibernéticas, además de proteger sus activos digitales.
    </p> <br /><br /><br />
  
  </article>
  <section className={styles.side}>
    <img src="img/hack1.png" alt="Mi Imagen" className={styles.hack_nav} /> 
  </section>
</div>
<br /><br />

</div>
<div className={styles.scrollmenu}>
            
            <a href="https://github.com/org-zero"><i className=" fa fa-github"></i> Repositorios de Githibb </a>
            <a href="https://www.linkedin.com/in/aaron-padilla-somarribas-658715275/"><i className=" fa fa-linkedin"></i> Contacteme por Linkedin</a>
            <a href="https://www.freelancer.es/u/aaronfullstack07"><i className=" fa fa-code"></i> Trabajo por medio de Freelancer</a>
            <a href="https://www.instagram.com/org_zero/"><i className=" fa fa-instagram"></i> Canal de Instagram</a>
            <a href="https://www.facebook.com/profile.php?id=100092653993282"><i className=" fa fa-facebook"></i> Canal de Facebook</a>
            <a href="https://www.facebook.com/profile.php?id=100092653993282"><i className=" fa fa-youtube"></i> Canal de Youtube</a>
            <a href="https://www.facebook.com/profile.php?id=100092653993282"><i className=" fa fa-telegram"></i> Canal de Telegram</a>

       </div>  

<h1 className={styles.secs}>Herramientas de hacking Preferidas + como usarlas + documentaciones</h1><br />
<div className={styles.grid_1}>

  <section className={styles.side_1}>
    <h1 className={styles.top_card}><br /> NMAP</h1> <br />
    <p className={styles.text_cards}>Nmap es una herramienta de escaneo de redes que permite descubrir dispositivos, servicios y vulnerabilidades en una red. <br /><br /> Utiliza técnicas de escaneo avanzadas para proporcionar información detallada sobre la topología de la red y los sistemas en ella, lo que es útil tanto para administradores de red como para hackers éticos.</p>
    <br /> <br /><Link href="/tools/Nmap/nmap_0"><button className={styles.button}>Documentacion</button></Link> <br /><br />
  </section>
  <section className={styles.side_1}>
  <h1 className={styles.top_card}> <br /> Maltego</h1>
  <p className={styles.text_cards}><br /> Maltego es una herramienta de inteligencia de código abierto utilizada en ciberseguridad y análisis de amenazas. <br /> Permite recopilar y visualizar información sobre entidades en línea, como dominios, direcciones IP y perfiles de redes sociales, ayudando en la investigación de amenazas y en la obtención de datos para análisis forenses y de seguridad. </p>
  <br /> <br /><Link href="/tools/Maltego/maltego"><button className={styles.button}>Documentacion</button></Link> <br /><br />
  </section>
  <section className={styles.side_1}>
  <h1 className={styles.top_card}><br /> Shodan</h1><br />
  <p className={styles.text_cards}>Shodan es un motor de búsqueda especializado en dispositivos conectados a Internet. <br /><br /> Escanea la red en busca de servidores, cámaras, enrutadores y otros dispositivos, proporcionando información detallada sobre ellos. Es utilizado para fines de seguridad y análisis de la infraestructura de Internet.</p>
  <br /> <br /><Link href="/tools/Shodan/shodan"><button className={styles.button}>Documentacion</button></Link> <br /><br />


  </section>
  <section className={styles.side_1}>
  <h1 className={styles.top_card}><br /> DNSenum</h1><br />
  <p className={styles.text_cards}> Escanea un dominio en busca de registros DNS, como servidores de nombres, subdominios y direcciones IP relacionadas, proporcionando información valiosa para auditorías de seguridad y pruebas de penetración. <br /><br /> DNSenum ayuda a identificar posibles puntos de entrada y vulnerabilidades en la infraestructura de DNS de un dominio.</p>
  <br /> <br /><Link href="/tools/Nmap/nmap_0"><button className={styles.button}>Documentacion</button></Link> <br /><br />


  </section>
</div>

<br /><br />

<div className={styles.grid_1}>

  <section className={styles.side_1}>
    <h1 className={styles.top_card}><br /> Metasploit</h1> <br />
    <p className={styles.text_cards}>Metasploit es una plataforma de pruebas de penetración de código abierto que ayuda a evaluar la seguridad de sistemas y aplicaciones mediante el uso de exploits y herramientas de hacking controladas. <br /> Es ampliamente utilizada por profesionales de la ciberseguridad para identificar vulnerabilidades y fortalecer la seguridad. También puede ser mal utilizada por actores maliciosos.</p>
    <br /> <br /><Link href="/tools/Nmap/nmap_0"><button className={styles.button}>Documentacion</button></Link> <br /><br />
  </section>
  <section className={styles.side_1}>
  <h1 className={styles.top_card}> <br /> Burpsuite</h1>
  <p className={styles.text_cards}><br /> 
Burp Suite es una herramienta de prueba de seguridad de aplicaciones web ampliamente utilizada por profesionales de la ciberseguridad. Permite identificar vulnerabilidades en aplicaciones web, como inyecciones SQL y cross-site scripting, mediante escaneos y pruebas controladas. Burp Suite ofrece una variedad de funcionalidades para evaluar y mejorar la seguridad de aplicaciones web. </p>
  <br /> <br /><Link href="/tools/Nmap/nmap_0"><button className={styles.button}>Documentacion</button></Link> <br /><br />
  </section>
  <section className={styles.side_1}>
  <h1 className={styles.top_card}><br /> Zaproxy</h1><br />
  <p className={styles.text_cards}>
ZAP (Zed Attack Proxy), comúnmente conocido como zaproxy, es una herramienta de prueba de seguridad de aplicaciones web de código abierto. Se utiliza para identificar y mitigar vulnerabilidades en aplicaciones web mediante escaneos y pruebas de penetración automatizadas. ZAP ofrece una interfaz gráfica y una API para evaluar y mejorar la seguridad de aplicaciones web de manera eficaz.</p>
  <br /> <br /><Link href="/tools/Nmap/nmap_0"><button className={styles.button}>Documentacion</button></Link> <br /><br />


  </section>
  <section className={styles.side_1}>
  <h1 className={styles.top_card}><br /> Wireshark</h1><br />
  <p className={styles.text_cards}> Wireshark es un software de análisis de paquetes de red de código abierto que permite capturar y analizar el tráfico de una red en tiempo real. Se utiliza para diagnosticar problemas de red, detectar actividades sospechosas y examinar la comunicación entre dispositivos. Wireshark es una herramienta esencial para administradores de redes y profesionales de seguridad cibernética.</p>
  <br /> <br /><Link href="/tools/Nmap/nmap_0"><button className={styles.button}>Documentacion</button></Link> <br /><br />
  </section>
</div>

<br /><br />
<div className={styles.grid_1}>

  <section className={styles.side_1}>
    <h1 className={styles.top_card}><br />Etthercap</h1> <br />
    <p className={styles.text_cards}>Nmap es una herramienta de escaneo de redes que permite descubrir dispositivos, servicios y vulnerabilidades en una red. <br /><br /> Utiliza técnicas de escaneo avanzadas para proporcionar información detallada sobre la topología de la red y los sistemas en ella, lo que es útil tanto para administradores de red como para hackers éticos.</p>
    <br /> <br /><Link href="/tools/Nmap/nmap_0"><button className={styles.button}>Documentacion</button></Link> <br /><br />
  </section>
  <section className={styles.side_1}>
  <h1 className={styles.top_card}> <br /> Acutenix</h1>
  <p className={styles.text_cards}><br /> Maltego es una herramienta de inteligencia de código abierto utilizada en ciberseguridad y análisis de amenazas. <br /> Permite recopilar y visualizar información sobre entidades en línea, como dominios, direcciones IP y perfiles de redes sociales, ayudando en la investigación de amenazas y en la obtención de datos para análisis forenses y de seguridad. </p>
  <br /> <br /><Link href="/tools/Nmap/nmap_0"><button className={styles.button}>Documentacion</button></Link> <br /><br />
  </section>
  <section className={styles.side_1}>
  <h1 className={styles.top_card}><br /> SQLmap</h1><br />
  <p className={styles.text_cards}>Shodan es un motor de búsqueda especializado en dispositivos conectados a Internet. <br /><br /> Escanea la red en busca de servidores, cámaras, enrutadores y otros dispositivos, proporcionando información detallada sobre ellos. Es utilizado para fines de seguridad y análisis de la infraestructura de Internet.</p>
  <br /> <br /><Link href="/tools/Nmap/nmap_0"><button className={styles.button}>Documentacion</button></Link> <br /><br />


  </section>
  <section className={styles.side_1}>
  <h1 className={styles.top_card}><br /> Air-crack ng</h1><br />
  <p className={styles.text_cards}> Escanea un dominio en busca de registros DNS, como servidores de nombres, subdominios y direcciones IP relacionadas, proporcionando información valiosa para auditorías de seguridad y pruebas de penetración. <br /><br /> DNSenum ayuda a identificar posibles puntos de entrada y vulnerabilidades en la infraestructura de DNS de un dominio.</p>
  <br /> <br /><Link href="/tools/Nmap/nmap_0"><button className={styles.button}>Documentacion</button></Link> <br /><br />


  </section>


</div>

        </Layout>
    )
}
