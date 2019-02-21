var express = require("express");
var router = express.Router();
var homehot1 = require("./home/homehot1.js");
var homehot2 = require("./home/homehot2.js");
var searchData = require("./search/index.js");
var shopData = require("./shop/index.js");
var detailsData = require('./details/index.js');
var commentData = require('./details/comment');
var cartData = require("./cart/index")
var url = require("url");

/**
 *  home
 */
//商品
router.get('/api/homehot1',function(req,res){
    var query = url.parse(req.url,true).query;
    console.log("城市:" + query.city);

    res.send(homehot1);
})

//商品
router.get('/api/homehot2',function(req,res){
    var query = url.parse(req.url,true).query;
    console.log("城市:" + query.city);

    res.send(homehot2);
})

/**
 *  search
 */
//搜索字段
router.get('/api/search',function(req,res){ 
    //搜索内容,页面分段输入
    var query = url.parse(req.url,true).query;
    console.log("当前城市:" + query.city);
    console.log("当前页数:" + query.page);
    console.log("搜索内容:" + query.keywords);
    res.send(searchData); 
})

/**
 *  shop
 */
router.get('/api/shop',function(req,res){
    //搜索内容,页面分段输入
    var query = url.parse(req.url,true).query;
    console.log("当前城市:" + query.city);
    console.log("当前页数:" + query.page);
    res.send(shopData); 
})

/**
 * details
 */
router.get('/api/details',function(req,res){
    //搜索内容,页面分段输入
    var query = url.parse(req.url,true).query;
    console.log("商品id:" + query.id);
    res.send(detailsData); 
})

//评价
router.get('/api/comment',function(req,res){
    //搜索内容,页面分段输入
    var query = url.parse(req.url,true).query;
    console.log("商品id:" + query.id);
    res.send(commentData); 
})

/** 
 * cart
 */
router.get('/api/order',function(req,res){
    
    var query = url.parse(req.url,true).query;
    console.log("用户名:" + query.username);
    res.send(cartData); 
})

/**
 * 评价信息
 */
router.post('/api/comment',function(req,res){
    var comment = req.param('comment');
    console.log('you')
    //判断是否收到信息，进行返回
    if(comment){
        res.send({
            msg: 'success'
        })
    }else{
        res.send({
            msg: 'error'
        })
    }
})

module.exports = router;