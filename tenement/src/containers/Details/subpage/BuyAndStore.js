import React from 'react'
import BuyAndStoreComponent from '../../../components/BuyAndStoreComponent'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import * as storeActions from '../../../actions/store.js'

class BuyAndStore extends React.Component{

    constructor(){
        super();
        this.state = {
          isStore:false
        }
    }

    //预定
    buyHandle(){
        //判断是否登陆
        if(this.isChecked()){
            //预定
            console.log('预定')
        }else{
            //登陆
            //当前页面地址
            var id = this.props.match.params.id;
            this.props.history.push('/login/'+encodeURIComponent('details/'+id));
        }  
    }

    //收藏
    storeClick(){
        let id = this.props.match.params.id;

        if(this.isChecked()){

            this.isStored();

            if(this.state.isStore){
                
                //已收藏 数据删除
                this.props.storeActions.rm({
                    id:id
                })
                
                this.setState({
                    isStore:false
                })
            }else{
                
                //未收藏  数据放redux
                this.props.storeActions.add({
                    id:id
                })

                this.setState({
                    isStore:true
                })
            }

        }else{
            //登陆
            //当前页面地址
            this.props.history.push('/login/'+encodeURIComponent('details/'+id));
        }  
    }

    //是否登陆判读函数
    isChecked(){
        if(this.props.userinfo.username){
            return true
        }
        return false
    }

    //是否收藏判断函数
    isStored(){
        let store = this.props.store;
        let id = this.props.match.params.id;
        store.some(item => { // 读到redux中每一条数据
            return item.id === id
        })
    }
    
    render(){
        return(
            <div>
                <BuyAndStoreComponent 
                    isStore={ this.state.isStore }
                    storeClick={this.storeClick.bind(this)}  
                    buyHandle={this.buyHandle.bind(this)}
                />
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        userinfo: state.userinfo,
        store: state.store
    }
}

function mapDispatchToProps(dispatch){
    return{
        storeActions: bindActionCreators(storeActions, dispatch)
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(BuyAndStore)) 