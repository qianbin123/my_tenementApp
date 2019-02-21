import React from 'react'
import ReactSwipe from 'react-swipe';
import './style.less'
import { Link } from 'react-router-dom'

export default class Banner extends React.Component{

    constructor(){
        super();
        this.state = {
            index: 0
        }
    }

    render(){
        const banners = this.props.banners;

        const opt = {
            auto: 2500,
            callback:function(index,elem){
                this.setState({
                    index:index
                })
            }.bind(this)
        }

        return(
            <div id='home-category'>
                <ReactSwipe swipeOptions={ opt }>
                {
                    banners.map ((element,index) => {
                        return(
                            <div key={ index } className='carousel-item'>
                                <Link to={`/search/${index}`}>
                                    <img src={ element } alt='提示' />
                                </Link>
                            </div>
                        )
                    })
                }   
                </ReactSwipe>
                <div className='index-container'>
                    <ul>
                        {
                            banners.map((element,index) =>{
                                return (
                                    <li key={index} className={this.state.index === index ? 'selected' : ''}></li>
                                )
                            })
                        }
                    </ul>
                </div>

            </div>
        )
    }
}