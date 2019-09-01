import React from 'react';
import styles from './Messages.module.css';

function Messages(props) {
    return(
        <div className={styles.Messages}>
            <img src={require('../../assets/img/user-1.jpg')} alt='fsdk'/>
                <div>
            <span className={styles.name}>{props.name}</span>
            </div>
        </div>
    )
}
export default Messages
