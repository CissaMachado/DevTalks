import { Header } from "./components/header";
import { Post } from "./components/post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
        <Post/>
        <Post/>
        </main>
      </div>
    </div>
  );
}

export default App;