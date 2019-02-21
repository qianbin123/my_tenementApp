import React from "react";

export default class LoadMore extends React.Component {
    componentDidMount() {
        //读取父级传递的加载更多事件
        let loadMoreFn = this.props.loadMoreFn;
        //增加定时器
        let timeoutId;
        //获取元素
        const wrapper = this.refs.wrapper;

        //获取当前浏览器视口高度
        const windowHeight = window.screen.height;

        function callback() {
            //获取top值
            const top = wrapper.getBoundingClientRect().top;

            if (top && top < windowHeight) {
                //去出发父级加载更多数据
                loadMoreFn();
            }
        }

        window.addEventListener("scroll",function() {
                if (this.props.isLoadingMore) {
                    return;
                }

                if (timeoutId) {
                    clearTimeout(timeoutId);
                }
                timeoutId = setTimeout(callback, 50);
            }.bind(this)
        );
    }

    render() {
        return (
            <div className="load-more" ref="wrapper">
                加载更多....
            </div>
        );
    }
}
