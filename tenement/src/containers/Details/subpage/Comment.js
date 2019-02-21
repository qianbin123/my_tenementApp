import React from 'react'
import { getCommentData } from '../../../fetch/details'
import CommentList from '../../../components/CommentList/index.js'

export default class Comment extends React.Component{

    constructor(){
        super();
        this.state = {
            data:[],
            hasMore: false
        }
    }

    componentDidMount(){
        const id = this.props.id;
        let result = getCommentData(id);
        result.then(res => {
            return res.json();
        }).then(data =>{
            this.setState({
                data: data.data,
                hasMore: data.hasMore
            })
        })
    }

    render(){
        return(
            <div>
                {
                    this.state.data.length > 0
                    ?<CommentList data={this.state.data} />
                    :<div>正在加载数据</div>
                }
            </div>
        )
    }
}