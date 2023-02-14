import styles from './Avatar.module.css';
import {ImgHTMLAttributes} from 'react'
// o que fizemos nas props dessa função é chamado de destrturação no javascsript ler mais sobre isso!!
// nesse caso eu estou passando um objeto nas props e passando apenas oq eu quero passar  e tbm atribuindo um valor 'base' / default
interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>  {
  hasBorder?: boolean;
}



export function Avatar({ hasBorder=true, ...props }: AvatarProps){
  return(
    <img
          className={hasBorder ? styles.avatarWithBorder : styles.avatar}
          {...props}
    />
  )
}