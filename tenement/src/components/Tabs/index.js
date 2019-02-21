import React from 'react'
import './style.less'

export default class Tabs extends React.Component{
    constructor(){
        super();
        this.state = {
            currentIndex : 0     //当前高亮index
        }
    }

    //title高亮(如果传来的值与当前index相同，则高亮)
    check_title_index(index){
        return index === this.state.currentIndex ? 'Tab_title active' : 'Tab_title'
    }

    check_item_index(index){
        return index === this.state.currentIndex ? 'Tab_item show' : 'Tab_item'
    }

    clickHandler(index){
        this.setState({
            currentIndex:index
        })
    }

    render(){
        return(
            <div>
                {/* 头部 */}
                <div className='Tab_title_wrap'>  
                    {
                        React.Children.map(this.props.children,(element,index) => {
                            return (
                                <div onClick={ this.clickHandler.bind(this,index) } className={ this.check_title_index(index) }>{ element.props.name }</div>
                            )
                        })
                    }
                </div>
                {/* 内容 */}
                <div className='Tab_item_wrap'>
                    {
                        React.Children.map(this.props.children,(element,index) => {
                            return (
                                <div className={ this.check_item_index(index) }>{element}</div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}