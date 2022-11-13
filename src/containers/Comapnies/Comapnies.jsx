import React from 'react'
import styles from "./Comapnies.module.scss"
import comapnies from "../../assets/comapnies.png"

const Comapnies = () => {
  return (
    <div className={styles.gt3_comapines}>
     <div className={styles.gt3_comapines_logos}>
        <img src={comapnies} alt="comapniesLogos" />
     </div>
    </div>
  )
}

export default Comapnies