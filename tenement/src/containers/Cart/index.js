import React from 'react'
import Header from '../../components/Header'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import UserInfo from '../../components/UserInfo'
import Order from '../../containers/Cart/subpage/order'

class Cart extends React.Component{

    componentDidMount(){

        if(this.isChecked()){

        }else{

            //到登陆页
            this.props.history.push('/login/' + encodeURIComponent('cart'));
        }
    }
 
    //判断是否登陆
    isChecked(){
        if(this.props.userinfo.username){
            return true
        }
        return false
    }
      

    render(){
        return(
            <div>
                <Header title="购物车" router='/' history={ this.props.history }/>
                <UserInfo username = { this.props.userinfo.username } city = { this.props.city.cityName }/>
                <Order username = { this.props.userinfo.username } />
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        userinfo:state.userinfo,
        city:state.city
    }
}

export default withRouter(connect(
    mapStateToProps
)(Cart))
