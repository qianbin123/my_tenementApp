import React from 'react'
import Banner from '../Banner'
import Tabs from '../Tabs'
import Comment from '../../containers/Details/subpage/Comment'
import BuyAndStore from '../../containers/Details/subpage/BuyAndStore'
import './style.less'

export default class DetailsInfo extends React.Component{
    
    render(){
        let data = this.props.data;
        let id = this.props.id;
        return(
            <div>
                {
                    this.props.data.imgs.length>0 
                    ?<Banner banners = {this.props.data.imgs}/>
                    :<div>正在加载...</div>
                }
                <Tabs>
                    <div name='商品信息'>
                        <div className='detail-info'>
                            <h3>{ data.title }</h3>
                            <div className='box'>
                                <ul>
                                    <li>
                                        <span>{ data.price }/月</span>
                                        <p>租金</p>
                                    </li>
                                    <li>
                                        <span>{ data.info.type }/月</span>
                                        <p>房型</p>
                                    </li>
                                    <li>
                                        <span>{ data.houseType }</span>
                                        <p>面积</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="info">
                                <div className="info-list">
                                    <p>楼层：{ data.info.level }</p>
                                    <p>装修：{ data.info.style }</p>
                                </div>
                                <div className="info-list">
                                    <p>类型：{ data.info.type }</p>
                                    <p>朝向：{ data.info.orientation }</p>
                                </div>
                                <div className="info-list">
                                    <p>时间：{ data.info.years }</p>
                                </div>
                            </div>
                        </div>
                        <BuyAndStore />
                    </div>
                    <div name='商品评价'>
                        <Comment id={id}/>
                    </div>
                </Tabs>
            </div> 
        )
    }
}