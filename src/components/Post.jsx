import styles from './Post.module.css';
import { Comment } from './Comment'
export function Post(){
  return (
    <article className= {styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/cissaMachado.png" />
        <div className={styles.authorInfo}>
          <strong>Cecilia Machado</strong>
          <span>Web Devoloper</span>
        </div>
        </div>
        <time title= "11 de maio a 00:13h" dateTime= "2022-05-11 00:13:30">Foi publicado há 1h</time>
      </header>
      <div className={styles.content}>
        <p> Fala galeraa 👋 </p>
        <p> Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p> {' '}
        <p><a href=""> jane.design/doctorcare</a></p>
        <p> 
          <a href=""> #novoprojeto </a> {' '}
          <a href=""> #nlw </a> {' '}
          <a href=""> #rocketseat </a> {' '}
        </p>
      </div>

      <form className={styles.comentForm}>
        <strong>Deixe seu FeedBack</strong>

        <textarea
          placeholder="deixe um comentário"
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment/>
        <Comment/>
        <Comment/>
      </div>
    </article>
  )
}