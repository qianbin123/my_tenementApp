import React from 'react'
import SearchHeader from '../../components/SearchHeader'
import SearchList from './subpage/searchlist'

export default class Search extends React.Component{

    render(){
        //读取路由地址,通过match读到所有参数
        const params = this.props.match.params;

        return(
            <div>
                <SearchHeader history={ this.props.history }/>
                <SearchList keywords={ params.keywords }/>
            </div>
        )
    }
}