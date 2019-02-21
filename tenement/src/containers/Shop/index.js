import React from 'react'
import FooterNav from '../../components/FooterNav'
import HomeHeader from '../../components/HomeHeader'
import Banner from '../../components/Banner'
import ShopList from './subpage/shoplist'
import Buttons from '../../components/Buttons'
import './style.less'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as cityActions from '../../actions/city.js'
import { withRouter } from 'react-router-dom'

import banner4 from '../../static/images/banner4.png'
import banner5 from '../../static/images/banner5.png'
import banner6 from '../../static/images/banner6.png' 

class Shop extends React.Component{

    constructor(){
        super();
        this.state = {
            banners: [ banner4,banner5,banner6 ]
        }
    }

    render(){ 
        return(
            <div>
                <HomeHeader cityName={ this.props.city.cityName } history={ this.props.history } />
                <Banner banners={this.state.banners}/>
                <div className='btn-group'>
                    <Buttons buttonText='找室友'/>
                    <Buttons buttonText='找房子'/>
                </div>
                <ShopList />
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
        cityActions: bindActionCreators(cityActions,dispatch)
    } 
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Shop))