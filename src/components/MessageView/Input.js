import React from 'react';
import styles from './Input.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Input() {
    return(
        <div className={styles.Input}>
         <input type='text' placeholder='Write a message....'/>
            <FontAwesomeIcon icon="paperclip" className={[styles.icon,styles.paperclip].join(' ')}/>
            <FontAwesomeIcon icon="smile" className={[styles.icon,styles.smile].join(' ')}/>
            <FontAwesomeIcon icon="microphone" className={[styles.icon,styles.mic].join(' ')}/>
        </div>
    )
}

export default Input