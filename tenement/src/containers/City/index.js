import React from 'react'
import Header from '../../components/Header'
import CurrentCity from '../../components/CurrentCity'
import CityList from '../../components/CityList'
//使用redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as cityActions from '../../actions/city'
import { withRouter } from 'react-router-dom'
import * as localMethod from '../../utils/index'

class City extends React.Component{

    //获取城市
    changeFn(cityName){

        //添加redux管理状态
        this.props.cityActions.update({
            cityName: cityName
        })

        //修改local的数据
        localMethod.setupDefaultCity(cityName);

        //获取到城市之后，关闭当前页
        window.history.back();
    }

    render(){
        return(
            <div>
                <Header title="城市选择"/>
                <CurrentCity cityName={ this.props.city.cityName }/>
                <CityList changeFn={this.changeFn.bind(this)}/>
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
)(City))



