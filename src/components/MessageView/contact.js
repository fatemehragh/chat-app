import React, {Component} from 'react';
import styles
    from './contact.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Aux from '../Hoc/Aux'
import Options from './Options'


class Contact extends Component {

    state = {
        showOptions: false
    };

    optionHandler(){
        this.setState((prevState)=>({
            showOptions:!prevState.showOptions
        }));
    }
    closeHandler(){
        this.setState(()=>({
            showOptions:false
        }))
    }

    render() {

        return (
            <Aux>
                <div
                    className={styles.contact}>
                    <FontAwesomeIcon
                        onClick={()=>this.optionHandler()}
                        icon='ellipsis-v'
                        className={[styles.icon, styles.dots].join(' ')}
                    />
                    {this.state.showOptions && <Options/> }
                    {this.state.showOptions && <div onClick={()=>this.closeHandler()} className={styles.backdrop}></div>}
                    <FontAwesomeIcon
                        icon='user'
                        className={[styles.icon, styles.user].join(' ')}
                    />

                    <FontAwesomeIcon
                        icon='search'
                        className={[styles.icon, styles.magnifier].join(' ')}

                    />
                    <FontAwesomeIcon
                        icon='phone'
                        className={[styles.icon, styles.phone].join(' ')}

                    />
                    <p className={styles.name}>Hashem</p>
                    <p className={styles.date}>Last
                        seen at tue</p>

                </div>
            </Aux>
        )
    };
}

export default Contact