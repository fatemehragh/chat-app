import React from 'react'
import styles from './contact.module.css'
 const Options = ()=>{
    return(
        <div className={styles.options}>
         <div>view profile</div>
         <div>mute</div>
         <div>Edit contact</div>
         <div>Share contact</div>
         <div>Delete contact</div>
         <div>Clear history</div>
         <div>Block user</div>
        </div>
    )
 }

 export default Options