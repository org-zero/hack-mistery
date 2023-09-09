import React from 'react'
import Link from 'next/link'
import styles from '@/styles/nmap.module.css'



export default function nmap_0() {
  
  return (
<div>

<div className={styles.fullstack_container}>



</div>
<div className={styles.nmap_principal}>
<br /><br />
<div class={styles.container}>
  <div class={styles.top}>
  <span class={styles.dot}></span>
  <span class={styles.dot}></span>
  <span class={styles.dot}></span>
   
  </div>

  <div class={styles.content}>
    <h3>Namp modo sigiloso</h3><br />
    <p>Comando : <br /> <br /> nmap -T3 -Pn -f -sV 192.168.0.1</p>
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
    <h3>Evasion de Firewall</h3>
    <p>How to create a browser window look with CSS.</p>
  </div>
</div>


    </div>
    
    <div className={styles.nmap_principal}>
<br /><br />
<div class={styles.container}>
  <div class={styles.top}>
  <span class={styles.dot}></span>
  <span class={styles.dot}></span>
  <span class={styles.dot}></span>
   
  </div>

  <div class={styles.content}>
    <h3>Informacion del sistema operativo</h3>
    <p>How to create a browser window look with CSS.</p>
  </div>
</div>

<div class={styles.container}>
  <div class={styles.top}>
  <span class={styles.dot}></span>
  <span class={styles.dot}></span>
  <span class={styles.dot}></span>
   
  </div>

  <div class={styles.content}>
    <h3>Script de vulnerabilidades</h3>
    <p>How to create a browser window look with CSS.</p>
  </div>
</div>


    </div>
    <br /><br />
</div>
    
  )
}
