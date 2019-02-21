import React from 'react'
import './style.less'

//实现数据携带，和回车跳转
export default class SearchInput extends React.Component{

    constructor(){
        super();
        this.state = {
            value: ''
        }
    }

    ChangeHandle(event){
        this.setState({ 
            value:event.target.value
        })
    }

    KeyUpHandle(event){
        if(event.keyCode !== 13){
            return;
        }

        //当点击回车键时，携带输入框数据跳转搜索页面
        this.props.enterHandle(event.target.value);
    }

    render(){
        return(
            <input 
                className = 'search-input' 
                type='text' 
                placeholder = '请输入关键字'
                onChange = { this.ChangeHandle.bind(this) }
                onKeyUp = { this.KeyUpHandle.bind(this) }
                value = { this.state.value }
            />
        )
    }
}