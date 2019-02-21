import React from 'react'
import { getSearchList } from '../../../fetch/search'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import ListComponent from '../../../components/ListComponent'
import LoadMore from '../../../components/LoadMore'

class SearchList extends React.Component{

    constructor(){ 
        super();
        this.state = {
            hasMore:false,            //判断加载更多
            data:[],                  //搜索请求数据源
            page:0,                   //页码
            isLoadingMore:false       //true加载中   false加载完毕
        }
    }

    componentDidMount(){
        this.loadFirstPageData();
    }

    componentDidUpdate(prevProps, prevState){
        const keywords = this.props.keywords;
        //如果输入相同则不再次进行搜索
        if(keywords === prevProps.keywords){
            return;
        }
        this.ressultHttp();
    }

    //第一次请求数据，此时page=0
    loadFirstPageData(){
        let keywords =  this.props.keywords;
        let cityName = this.props.city.cityName;
        //网络请求
        let result = getSearchList(cityName,0,keywords);
        this.ressultHttp(result);
    }

    //合并数据 加载更多
    loadMoreFn(){
        this.setState({
            isLoadingMore:true
        })
        let keywords =  this.props.keywords;
        let cityName = this.props.city.cityName;
        let page = this.state.page;
        //网络请求
        let result = getSearchList(cityName,page,keywords);
        this.ressultHttp(result);
        this.setState({
            isLoadingMore:false
        })
    }

    ressultHttp(result){
        result.then(res => {
            return res.json()
        })
        .then(data => {
            this.setState({
                //将每次数据累加
                data:this.state.data.concat(data.data),        
                hasMore:data.hasMore,
                page:this.state.page + 1
            })
        })
    }

    render(){
        return(
            <div>
                {
                    this.state.data.length > 0
                    ?<ListComponent data={this.state.data}/>
                    :<div>正在加载数据</div>
                }
                {
                    this.state.hasMore
                    ?<LoadMore loadMoreFn = {this.loadMoreFn.bind(this)} isLoadingMore = {this.state.isLoadingMore}/>
                    :<div>已经到底了</div>
                }
            </div>
        ) 
    }

}

function mapStateToProps(state){
    return{
        city:state.city
    }
}

export default withRouter(connect(
    mapStateToProps
)(SearchList))