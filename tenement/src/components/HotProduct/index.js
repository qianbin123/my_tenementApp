import React from 'react'
import './style.less'

export default class HotProduct extends React.Component{
    render(){

        var data = this.props.data;
        var title = this.props.title;

        return(
            <div className='hotproduct'>
                <h3>{ title }</h3>
                <div className='hot-container'>
                    <ul className='clear-fix'>
                        {
                            data.map((element,index) => {
                                return (
                                    <li key={index}>
                                        <a href={ element.link }>
                                            <img src={ element.img } alt="" />
                                            <span>{ element.title }</span>
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}