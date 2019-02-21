import React from 'react'
import './style.less'

export default class BuyAndStoreComponent extends React.Component{

    //让容器组件去处理业务逻辑
    buyClickHandle(){
        let buyHandle = this.props.buyHandle;
        buyHandle();
    }

    storeClickHandle(){
        let storeClick = this.props.storeClick;
        storeClick();
    }
    
    render(){
        let isStore = this.props.isStore;

        return( 
            <div className='buy-store-container clear-fix'>
                <div className='item-container float-left'>
                    {
                        isStore
                        ?<button className='selected' onClick={ this.storeClickHandle.bind(this) }>已收藏</button>
                        :<button className='o' onClick={ this.storeClickHandle.bind(this) }>收藏</button>
                    }
                </div>
                <div className='item-container float-left'>
                    <button onClick={ this.buyClickHandle.bind(this) }>预定</button>
                </div>
            </div>
        )
    }
}