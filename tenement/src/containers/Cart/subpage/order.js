import React from 'react'
import { getOrderData } from '../../../fetch/cart'
import OrderList from '../../../components/OrderList'
import './style.less'

export default class Order extends React.Component{

    constructor(){
        super();
        this.state = {
            data:[]
        }
    }

    componentDidMount(){
        let username = this.props.username;
        let result = getOrderData(username);

        result.then(res => {
            return res.json()
        }).then(data => {
            this.setState({
                data:data
            })
        })
    }

    componentWillUnmount(){
            this.setState = (state,callback)=>{
            return;
        };
    }

    render(){
        return(
            <div>
                {
                    this.state.data.length>0
                    ?<OrderList data = {this.state.data} />
                    :<div>正在加载数据</div>
                }
            </div>
        )
    }
}