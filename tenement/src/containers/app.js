import React from 'react'
import * as Key from '../utils/key.js'
import * as localMethod from '../utils/index.js'
//使用redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as cityActions from '../actions/city'
import { withRouter } from 'react-router-dom'

class App extends React.Component{

    //处理城市初始化信息
    componentDidMount(){
        //城市是否被存储
        let cityName = localMethod.getDefaultCity(Key.LOCAL_CITY);
        if(!cityName){
            //默认定位
            cityName = "北京";
            localMethod.setupDefaultCity(cityName);
        }
        //写入到redux
        this.props.cityActions.update({
            cityName:cityName
        })
    }

    render(){
        
        return(
            <div>
                { this.props.children }
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        city: state.city
    }
}

function mapDispatchToProps(dispatch){
    return {
        cityActions: bindActionCreators(cityActions, dispatch)
    }
}
 
export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(App))