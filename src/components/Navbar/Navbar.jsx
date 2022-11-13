import React from 'react'
import styles from "./Navbar.module.scss"
import logo from "../../assets/GPT-3.png"

const Navbar = () => {
  return (
    <div className={styles.gpt3_navbar}>
        <div className={styles.gpt3_logo}>
             <img src={logo} className={styles.gpt3_logo_img} alt="logo"/>
             </div>
             <div className={styles.gpt3_navbar_links}>
              <ul>
                <li> Home</li>
                <li> What is GPT?</li>
                <li> Open Al</li>
                <li> Case Studies</li>
                <li> Library</li>
              </ul>
             </div>
             <div className={styles.gpt3_navbar_buttons}>
              <p> Sign in</p>
              <button className={styles.signUpBtn}>Sign up</button>
       </div>
 
    </div>
  )
}

export default Navbar