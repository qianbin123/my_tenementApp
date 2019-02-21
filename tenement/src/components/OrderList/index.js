import React from 'react'
import Item from './Item'

export default class OrderList extends React.Component{
    render(){
        let data = this.props.data;
        return(
            <div>
                {
                    data.map((item,index) => {
                        return <Item key = {index} data={ item } />
                    })
                }
            </div>
        )
    }
}