import React from 'react'
import SearchInput from '../SearchInput'
import './style.less'

export default class SearchHeader extends React.Component{

    //返回
    clickHandle(event){
        this.props.history.push('/home')
    }

    //回车时回到当前搜索页
    enterHandle(inputData,event){
        this.props.history.push('/search/'+inputData);
    }

    render(){
        return(
            <div id='search-header' className='clear-fix'>
                <span className='back-icon float-left' onClick={this.clickHandle.bind(this)}>
                    <i className="icon-chevron-left"></i>
                </span>
                <div className="input-container">
                    <i className="icon-search"></i>
                    &nbsp;
                    <SearchInput value="" enterHandle={this.enterHandle.bind(this)} />>
                </div>
            </div>
        )
    }
}