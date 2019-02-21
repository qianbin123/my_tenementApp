import React from 'react'
import LoginComponent from '../../components/LoginComponent'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userinfoActions from '../../actions/userinfo.js'
import { withRouter } from 'react-router-dom'

class Login extends React.Component{

    loginHandle(username){
        //redux中存数据
        this.props.userinfoActions.login({
            username:username
        })

        //跳转到进Login之前的页面
        //记录上个页面的地址
        let router = this.props.match.params.router;
        this.props.history.push('/' + decodeURIComponent(router))
    }

    render(){ 
        return(
            <div>
                <LoginComponent loginHandle={ this.loginHandle.bind(this) }/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch){
    return {
        userinfoActions: bindActionCreators(userinfoActions, dispatch)
    }
}
export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)) 