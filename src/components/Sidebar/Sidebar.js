import React,{Component} from 'react'
import TopSide from './TopSide'
import Messages from './Messages'
import styles from './Sidebar.module.css';

class Sidebar extends Component{
    state={
        names:{
            name1:'fatemeh',
            name2:'hashem',
            name3:'fati',
            name4:'sadaf',
            name5:'maryam',
            name6:'milad',
            name7:'mina',
        }
    }
    render() {
        return (
            <div className={styles.Sidebar}>
                <TopSide/>
                <div className={styles.messageList}>
                    <Messages name={this.state.names.name1}/>
                    <Messages name={this.state.names.name2}/>
                    <Messages name={this.state.names.name3}/>
                    <Messages name={this.state.names.name4}/>
                    <Messages name={this.state.names.name5}/>
                    <Messages name={this.state.names.name6}/>
                    <Messages name={this.state.names.name7}/>
                    <Messages name={this.state.names.name7}/>
                    <Messages name={this.state.names.name7}/>
                    <Messages name={this.state.names.name7}/>
                    <Messages name={this.state.names.name7}/>
                </div>


            </div>
        );
    }
}
export default Sidebar