import { useState } from "react";
import "./App.css";
import Post from "./Components/Post";
import styles from "../app.module.css";
import Newpost from "./Components/Newpost";

function App() {

  return (
    <>
      <Newpost />
      <div className={styles.div1}>
        <Post author="collins  Minene" />
        <Post body="am learning frontend development with udemy masterclass" />
      </div>

      <div className={styles.div1}>
        <Post author="collins  Minene" />
        <Post body="am learning frontend development with udemy masterclass" />
      </div>
    </>
  );
}

export default App;
