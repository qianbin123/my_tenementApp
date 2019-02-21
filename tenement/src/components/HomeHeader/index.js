import React from 'react'
import './style.less'
import SearchInput from '../SearchInput'
import { Link } from 'react-router-dom'

export default class HomeHeader extends React.Component{

    enterHandle(inputData){
        //接受携带而来的数据
        this.props.history.push('/search/'+inputData);
    }

    render(){
        return(
            <div id='home-header' className='clear-fix'>
                <div className='home-header-left float-left'>
                    <Link to = '/city'>
                        <span>
                            { this.props.cityName }
                        </span>
                        &nbsp;
                        <i className='icon-angle-down'></i>
                    </Link>
                </div>
                <div className='home-header-right float-right'>
                    <Link to='/cart'>
                        <i className='iconfont icon-car'></i>
                    </Link>
                </div>
                <div className='home-header-middle'>
                    <div className='search-container'>
                        <i className='icon-search'></i>
                        &nbsp;
                        <SearchInput enterHandle = { this.enterHandle.bind(this) }/>
                    </div>
                </div>
            </div>
        )
    }
}

