import React,{Component} from 'react'
import ChatContent from './ChatContent'
import Contact from './contact'
import Input from './Input';
import styles from './MessageView.module.css'

class MessageView extends Component {

    render() {
        return (
            <div
                className={styles.MessageView}>
                <Contact />
                <ChatContent/>
                <Input/>
            </div>
        );
    }
}
export default MessageView