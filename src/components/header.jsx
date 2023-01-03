import styles from './Header.module.css'
import devTalksLogo from '../assets/devTalksLogo.svg'


export function Header(){
  return(
    <header className={styles.header}>
    <img src={devTalksLogo} alt="Logo do site" />
    <strong>Dev Talks</strong>
    </header>
  )
}