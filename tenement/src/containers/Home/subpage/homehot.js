//作为一个容器组件
import React from 'react'
import { getHomeHot1Data,getHomeHot2Data } from '../../../fetch/home'
import HotProduct from '../../../components/HotProduct'
import * as keyMethod from '../../../utils/index.js'
import * as Key from '../../../utils/key.js'

export default class Homehot extends React.Component{

    constructor(){
        super();
        this.state = {
            hot1Data:[],
            hot2Data:[]
        }
    } 

    componentDidMount(){
        var cityName = keyMethod.getDefaultCity(Key.LOCAL_CITY);

        //hot1
        const resultHot1 = getHomeHot1Data(cityName);
        resultHot1.then(res => {
            return res.json()
        })
        .then(data=>{
            this.setState({
                hot1Data:data
            })
        })

        //hot2
        const resultHot2 = getHomeHot2Data(cityName);
        resultHot2.then(res => {
            return res.json()
        })
        .then(data=>{
            this.setState({
                hot2Data:data
            })
        })
    }

    render(){
        return(
            <div>
                {
                    //判断是否有数据
                    this.state.hot1Data.length > 0?
                    <HotProduct data={this.state.hot1Data} title="热销商品"/>
                    : <div>正在加载数据 ^_^||</div>
                }
                {
                    //判断是否有数据
                    this.state.hot2Data.length > 0?
                    <HotProduct data={this.state.hot2Data} title="热门商品"/>
                    : <div>正在加载数据 ^_^||</div>
                }
            </div>
        )
    }
}
