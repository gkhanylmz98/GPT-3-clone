import React from 'react'
import styles from "./Header.module.scss"
import ai from "../../assets/ai.png"
import people from "../../assets/people.png"






const Header = () => {
    return (
      <div className={styles.gpt3_header}>
        <div className={styles.gpt3_header_content}>
        <h1 >Let’s Build Someth <br/> ingamazing with GPT-3  <br/> OpenAI </h1>
              <p> Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
          <div className={styles.gpt3_header_input}>
              <input type="text"  placeholder='Your Mail Adress' />
              <button className={styles.gpt3_header_input_btn}> Get Started</button>
          </div>
          <div className={styles.gpt3_header_people}>
          </div>
          <div className={styles.gpt3_header_people}>
            <img src={people} alt={"people"} className={styles.gpt3_header_image}/>
            <p>1.600 people requested access a visit in last 24 hours</p>
          </div>
          
          </div>
          <div className={styles.gpt3_header_right}>
              <img src={ai} alt="iaimage"/> 
              </div>

      </div>
  )
}

export default Header