import styles from './Avatar.module.css';

// o que fizemos nas props dessa função é chamado de destrturação no javascsript ler mais sobre isso!!
// nesse caso eu estou passando um objeto nas props e passando apenas oq eu quero passar  e tbm atribuindo um valor 'base' / default
export function Avatar({hasBorder=true, src}){
  return(
    <img
          className={hasBorder ? styles.avatarWithBorder : styles.avatar}
          src={src}
    />
  )
}