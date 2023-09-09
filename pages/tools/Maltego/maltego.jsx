import React from 'react'
import styles from '@/styles/Maltego.module.css'
import Link from 'next/link'
import Video_maltego from './Video_maltego';



export default function maltego() {
  return (
    <div>
    <div className={styles.fullstack_container}> </div>
      <br /><br />
    <Video_maltego
        src="https://www.youtube.com/embed/pnbIewY5IpM?si=A-Fp7AzB_0D1aSJ1"
        title="Título del Video"
      />
    
    </div>
  )
} 
