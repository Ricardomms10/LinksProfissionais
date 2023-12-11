'use client'

import Image from 'next/image';
import styles from './page.module.scss';
import imagePerfil from '../../public/assests/fotoperfil.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpenText, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Home() {
  const [copiado, setCopiado] = useState(false);
  const email = 'RICARDOMMS10@GMAIL.COM';

  const copiarEmail = () => {
      navigator.clipboard.writeText(email);
      setCopiado(true);
      setTimeout(() => {
          setCopiado(false);
      }, 1000);
  };


  return (
    <div className={styles.container}>

      <Image
        alt="Foto do perfil"
        src={imagePerfil}
        width={200}
        priority={true}
        className={styles.box}
      />

      <h1>@Ricardomms10</h1>
      <p>Web Developer</p>

      <div className={styles.boxBtns}>
        <a href="https://www.linkedin.com/in/ricardo-malta/" target="_blank" rel="noopener noreferrer">
          <button className={styles.button}>
            <div className={styles.buttonContent}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              <p>LINKEDIN</p>
            </div>
          </button>
        </a>

        <a href='https://portfolio2024-taupe.vercel.app/' target="_blank" rel="noopener noreferrer">
          <button className={styles.button}>
            <div className={styles.buttonContent}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gallery-vertical-end">
                <path d="M7 2h10"></path>
                <path d="M5 6h14"></path>
                <rect width="18" height="12" x="3" y="10" rx="2"></rect>
              </svg>
              <p> PORTFÓLIO </p>
            </div>
          </button>
        </a>

        <a href="https://github.com/Ricardomms10" target="_blank" rel="noopener noreferrer">
          <button className={styles.button}>
            <div className={styles.buttonContent}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
              <p> GITHUB </p>
            </div>
          </button>
        </a>

        
          <button className={styles.button} onClick={copiarEmail}>
            <div className={styles.buttonContent}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
              <p>{copiado ? 'EMAIL COPIADO!' : 'COPIAR EMAIL'}</p>
            </div>
          </button>
        

      </div>
    </div>
  );
}
