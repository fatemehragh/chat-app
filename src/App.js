import React from 'react';
import MessageView
    from './components/MessageView/MessageView';
import Sidebar
    from './components/Sidebar/Sidebar';
import styles from './App.module.css'
import {library} from '@fortawesome/fontawesome-svg-core'
import {
    faCheckSquare,
    faCoffee,
    faPaperclip,
    faSmile,
    faMicrophone,
    faAlignJustify,
    faPhone,
    faSearch,
    faEllipsisV,
    faUser,
    faUserFriends,faBullhorn,faUserAlt,faPhoneAlt,faCog,faMoon} from '@fortawesome/free-solid-svg-icons'

library.add(faCheckSquare, faCoffee, faPaperclip, faSmile, faMicrophone, faAlignJustify, faPhone, faSearch, faEllipsisV, faUser, faUserFriends,faBullhorn,faUserAlt,faPhoneAlt,faCog,faMoon);

function App() {
    return (
        <div className={styles.App}>
            <Sidebar/>
            <MessageView/>
        </div>
    );
}

export default App;
