import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
export function Comment(){
  return(
    <div className={styles.comment}>
      <img src="https://github.com/diego3g.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time title= "11 de maio a 00:13h" dateTime= "2022-05-11 00:13:30">Foi publicado há 1h</time>
            </div>
            <button title="Deletar comentário">
              <Trash size={20}/>
            </button>
          </header>

          <p> Muito bom Devon, parabéns!! 👏👏</p>
        </div>

          <footer>
            <button>
              <ThumbsUp/>
              Aplaudir <span>20</span>
            </button>
          </footer>

      </div>

    </div>
  )
}