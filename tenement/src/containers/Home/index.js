import React from 'react'
import HomeHeader from '../../components/HomeHeader'
import Banner from '../../components/Banner'
import HomeHot from './subpage/homehot'
import FooterNav from '../../components/FooterNav'
//使用redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as cityActions from '../../actions/city'
import { withRouter } from 'react-router-dom'

import banner1 from '../../static/images/banner1.png'
import banner2 from '../../static/images/banner2.png'
import banner3 from '../../static/images/banner3.png'

class Home extends React.Component{

    constructor(){
        super();
        this.state = {
            banners:[banner1,banner2,banner3]
        }
    }

    render(){
        return(
            <div>
                {/*history是路由的history对象*/}
                <HomeHeader cityName={ this.props.city.cityName } history={ this.props.history }/>
                <Banner banners={ this.state.banners }/>
                <HomeHot/>
                <FooterNav />
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
)(Home))
