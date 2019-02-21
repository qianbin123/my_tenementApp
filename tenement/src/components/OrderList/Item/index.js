import React from 'react'
import { submitCommentData } from '../../../fetch/comment/index.js'
import './style.less'

export default class Item extends React.Component{

    constructor(){
        super();
        this.state = {
            commentState: 0 // 0未评价   1评价中     2已评价
        }
    }

    componentDidMount(){
        this.setState({
            commentState: this.props.data.commentState
        })

    }

    //提交
    submitCommentHandler(){
        //提交后台
        let textareaContext = this.refs.commentText;

        let result = submitCommentData({
            comment: textareaContext
        });

        result.then(res => {
            return res.json()
        }).then(data => {
            console.log(data)
        })

        this.commentOk();
    }

    //评价提交
    commentOk(){
        this.setState({
            commentState: 2
        })
    }

    //评价取消
    hindeComment(){
        this.setState({
            commentState: 0
        })
    }

    //评价
    showComment(){
        this.setState({
            commentState: 1
        })
    }

    render(){
        let data = this.props.data;
        return(
            <div className = 'clear-fix order-item-container'>
                <div className = 'order-item-img float-left'>
                    <img src={ data.img} alt=''/>
                </div>
                <div className = 'order-item-comment float-right'>
                    {
                        this.state.commentState === 0
                        ?<button className = 'btn' onClick={ this.showComment.bind(this) }>评价</button>
                        :this.state.commentState === 1
                        //评价中 按钮出显示为空
                        ?''
                        :<button className = 'btn unselected-btn'>已评价</button>
                    }
                </div>
                <div className='order-item-content'>
                    <span>商户：{data.title}</span>
                    <span>类型：{data.houseType}</span>
                    <span>价格：¥ {data.price}</span>
                </div>
                {
                    this.state.commentState !== 1 
                    ?'' 
                    :<div>
                        <textarea style={{width: '100%', height: '80px' , border: '1px solid #eee'}} className='comment-text' ref='commentText' placeholder='请输入...'></textarea>
                        <button className='btn' onClick={this.submitCommentHandler.bind(this)}>提交</button>
                        &nbsp;
                        <button className='btn unselected-btn' onClick={this.hindeComment.bind(this)}>取消</button>
                    </div>
                }
            </div>
        )
    }
}