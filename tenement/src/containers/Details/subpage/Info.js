import React from 'react'
import { getDetailsData } from '../../../fetch/details'
import DetailsInfo from '../../../components/DetailsInfo'

export default class Info extends React.Component{

    constructor(){
        super();
        this.state = {
            data:{
                imgs:[],
                title: "",
                price: "",
                rentType: "",
                houseType: "",
                info: {
                    years: "",
                    type: "",
                    level: "",
                    style: "",
                    orientation: ""
                }
            }
        }
    }

    componentDidMount(){
        const id = this.props.id;
        let result = getDetailsData(id);
        result.then(res => {
            return res.json();
        }).then(data => {
            this.setState({
                data:data
            })
            
        })
    }

    render(){
        return(
            <div>
                {
                    this.state.data
                    ?<DetailsInfo data={ this.state.data } id={this.props.id} />
                    :<div>正在加载数据.....</div>
                }
            </div>
        )
    }
}