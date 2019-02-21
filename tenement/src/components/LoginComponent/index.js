import React from 'react'
import './style.less'

export default class LoginComponent extends React.Component{

    constructor(){
        super();
        this.state = {
            username: ''
        }
    }

    changeHandle(event){
        this.setState({ 
            username:event.target.value
        })
    }

    clickHandle(){
        //暂时简化成 直接点解就表示登陆成功
        let username = this.state.username;
        let loginHandle = this.props.loginHandle;
        loginHandle(username);
    }

    render(){
        return(
            <div id='login-container'>
                <div className='input-container phone-container'>
                    <i className='icon-tablet'></i>
                    <input 
                        type='text'
                        placeholder='输入用户名'
                        onChange={this.changeHandle.bind(this)}
                        value={this.state.username }
                    />
                </div>
                <div className='input-container password-container'>
                    <i className='icon-key'></i>
                    <input type='text' placeholder='输入密码'/>
                </div>
                <button className='btn-login' onClick={this.clickHandle.bind(this)}>登陆</button>
            </div>
        )
    }
}