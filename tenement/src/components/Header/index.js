import React from 'react'
import './style.less'

export default class Header extends React.Component{

    clickBack(event){
        var router = this.props.router;
        if(router){
            this.props.history.push(router);
        }else{
            //用到window中history对象
            window.history.back();
        }
    }

    render(){

        const title = this.props.title;

        return(
            <div id='common-header'>
                <span className='back-icon' onClick={this.clickBack.bind(this)}>
                    <i className="icon-chevron-left"></i>
                </span>
                <h1>{ title }</h1>
            </div>
        )
    }
}