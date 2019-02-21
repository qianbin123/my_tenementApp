import React from 'react'
import './style.less'

export default class Start extends React.Component{
    render(){

        let star = this.props.star || 0
        //处理大于0的不正常情况
        if(star > 5){
            star = star % 5
        }

        return(
            <div className='star-container'>
                {
                    [1,2,3,4,5].map((item, index) => {
                        const lightClass = star >= item ? ' light' : ''
                        return <i key={index} className={'icon-star' + lightClass}></i>
                    })
                }
            </div>
        )
    }
}