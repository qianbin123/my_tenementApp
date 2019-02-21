import React from 'react'
import { getShopListData } from '../../../fetch/shop/index.js'
import ListComponent from '../../../components/ListComponent'
import LoadMore from '../../../components/LoadMore'

import * as keyMethod from '../../../utils/index.js'
import * as Key from '../../../utils/key.js'

export default class ShopList extends React.Component{

    constructor(){
        super();
        this.state = {
            page: 0,
            data: [],
            isLoadingMore: false,
            hasMore:false,
        }
    }

    componentDidMount(){
        //第一次数据加载
        var cityName = keyMethod.getDefaultCity(Key.LOCAL_CITY);
        let page = this.state.page;
        let result = getShopListData(cityName,page)
        this.resultData(result) 
    }

    resultData(result){
        result.then(res =>{
            return res.json();
        })
        .then(data =>{
            this.setState({
                data: this.state.data.concat(data.data),
                page: this.state.page + 1,
                hasMore: data.hasMore
            })
        })
    }

    loadMoreFn(){
        this.setState({
            isLoadingMore:true
        })
        let cityName = keyMethod.getDefaultCity(Key.LOCAL_CITY);
        let page = this.state.page;
        let result = getShopListData(cityName,page);
        this.resultData(result);
        this.setState({
            isLoadingMore: false
        })
    }

    render(){
        let { data,hasMore,isLoadingMore } = this.state 
        return(
            <div>
                <div>
                    {
                        data.length > 0
                        ?<ListComponent data={ data }/>
                        :<div>正在加载数据</div>
                    }
                    {
                        hasMore
                        ?<LoadMore loadMoreFn={ this.loadMoreFn.bind(this)} isLoadingMore={ isLoadingMore }/>
                        :<div>已经到底了</div>
                    }
                </div>
            </div>

        )
    }

    
}