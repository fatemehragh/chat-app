import React from 'react'
import styles from './TopSide.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const ToggleMenu = ()=>{
    return(
        <div className={styles.ToggleMenu}>

            <div className={styles.profile} >
             <img src={require('../../assets/img/user.jpg')} alt={'profile picture'}/>
             <p>Fatemeh</p>
             <p>+989123456789</p>
            </div>
            <div className={styles.options}>
                <FontAwesomeIcon
                    icon='user-friends'
                    className={styles.iconi}
                />
            <div >New Group</div>
                <FontAwesomeIcon
                    icon='bullhorn'
                    className={styles.iconi}
                />
            <div>New Channel</div>
                <FontAwesomeIcon
                    icon='user-alt'
                    className={styles.iconi}
                />
            <div>Contacts</div>
                <FontAwesomeIcon
                    icon='phone-alt'
                    className={styles.iconi}
                />
            <div>Calls</div>
                <FontAwesomeIcon
                    icon='cog'
                    className={styles.iconi}
                />
            <div>Settings</div>
                <FontAwesomeIcon
                    icon='moon'
                    className={styles.iconi}
                />
            <div>Night Mode</div>
            </div>
        </div>
    )
}

export default ToggleMenu