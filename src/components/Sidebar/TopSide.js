import React,{Component} from 'react';
import styles from './TopSide.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ToggleMenu from './ToggleMenu'


class TopSide extends Component {

    state = {
        showMenu: false
    };

    menuHandler(){
        this.setState(()=>({
            showMenu:true
        }));
    }

    closeHandler(){
        this.setState(()=>({
            showMenu:false
        }))
    }

    render() {

        return (
            <div
                className={styles.Topside}>
                <input type='text'
                       placeholder='Search'/>
                {this.state.showMenu && <ToggleMenu/>}
                {this.state.showMenu && <div onClick={()=>this.closeHandler()} className={styles.backdrop}></div>}
                <FontAwesomeIcon
                    onClick={()=>this.menuHandler()}
                    icon="align-justify"
                    className={styles.icon}/>
            </div>
        )
    }
}

export default TopSide