import { Header } from "./components/header";
import { Post } from "./components/post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

//o que o post precisa para ser exibido: 
// author: {avatar_url: "", name: "", cargo(role): "",}
//publishedAt: Date
//content: String

const posts = [
  {
    id:1,
    author: {
      avatarUrl: "http://github.com/cissaMachado.png", 
      name: "Cecília dos Santos Machado", 
      cargo: "Web Devolper",
    },
    content: [
        { type: 'paragraph', content: 'Fala galeraa 👋' }, 
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
        { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date ('2023-01-06 09:00:00'),
  },
  {
    id:2,
    author: {
      avatarUrl: "http://github.com/leivasGabi.png", 
      name: "Gabrielle pinto Leivas", 
      cargo: "Mobile Devolper",
    },
    content: [
        { type: 'paragraph', content: 'Fala galeraa 👋' }, 
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
        { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date ('2023-01-06 10:00:00'),
  },
]


function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
        {
          posts.map(post =>{
            return (
            <Post
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
            />
          )})}
        </main>
      </div>
    </div>
  );
}

export default App;
