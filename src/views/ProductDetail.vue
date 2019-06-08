<template>
  <div class="all-wraper">
    <div class="head-wrap">
      <head-com :titleHead="'商品详情'"></head-com>
    </div>
    <!--主体内容-->
    <div class="pd-banner-wrap">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img class="img-show" src="static/product_detail.png" alt="轮播图"></div>
          <div class="swiper-slide"><img class="img-show" src="static/product_detail.png" alt="轮播图"></div>
          <div class="swiper-slide"><img class="img-show" src="static/product_detail.png" alt="轮播图"></div>
        </div>
        <!--分页器-->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <!--商品信息-->
    <div class="pd-detail-wrap">
      <div class="detail-title medium-font-500 multiline-ellipsis">八爪鱼海鲜鲜活水产冷冻小章鱼迷你八抓鱼章鱼足长腿大爆头1斤装</div>
      <p class="detail-desc regular-font-400">鲜活加工，低温速冻，鲜嫩劲道，紧致弹牙！鲜活加工，低温速冻，鲜嫩劲道，紧致弹牙！鲜活加工，低温速冻，鲜嫩劲道，紧致弹牙！鲜活加工，低温速冻，鲜嫩劲道，紧致弹牙！</p>
      <div class="price-fav-box flex-between-center">
        <div class="price-wrap semibold-font-600"><span class="curr-symbol">￥</span>42.00<span class="unit-symbol regular-font-400">/斤</span></div>
        <div @click="handleCollect" class="favorite-wrap flex-start-center">
          <i :class="{'favorite-icon': true, 'favorite-icon-ok': isCollect}"></i>
          <span :class="{'favorite-desc': true, 'regular-font-400': true, 'favorite-desc-ok': isCollect}">加入收藏</span>
        </div>
      </div>
    </div>
    <!--商品规格-->
    <div class="pd-paramer-wrap">
      <div class="paramer-box">
        <p class="paramer-title regular-font-400">规格</p>
        <ul class="param-detail-outter flex-start-center">
          <li class="param-inner regular-font-400 active">大号</li>
          <li class="param-inner regular-font-400">中号</li>
          <li class="param-inner regular-font-400">小号</li>
        </ul>
      </div>
    </div>
    <!--商品介绍-->
    <div class="pd-show-wraper">
      <div class="show-title-box flex-all-center">
        <span class="title-line"></span>
        <span class="title-text regular-font-400">商品详情</span>
        <span class="title-line"></span>
      </div>
      <div class="show-img-box">
        <img class="show-img" src="static/detail.png">
      </div>
    </div>
    <!--占位-->
    <div class="nothing"></div>
    <!--底部固定按钮栏-->
    <div class="buy-fixed-wraper flex-start-center">
      <div class="buy-left-part flex-start-center">
        <div class="fast-link-btn">
          <img class="btn-icon" src="../assets/img/productdetail/service.png">
          <p class="btn-text">联系客户</p>
        </div>
        <div class="fast-link-btn">
          <img class="btn-icon" src="../assets/img/productdetail/cart.png">
          <p class="btn-text">购物车 </p>
        </div>
      </div>
      <div class="buy-right-part flex-all-center regular-font-400">加入购物车</div>
    </div>
  </div>
</template>

<script>
//引入swiper
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";

export default {
  name: "producdetail",
  data: function(){
    return {
      isCollect: false
    }
  },
  mounted() {
    var banner = new Swiper(".swiper-container", {
      direction: "horizontal",
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false
      },
      loop: false,
      pagination: {
        el: ".swiper-pagination"
      }
    })
  },
  methods: {
    //点击加入收藏按钮
    handleCollect(){
      this.isCollect = !this.isCollect;
    },
  },
}
</script>

<style lang="scss">
  .head-wrap{
    width: 100%;
    height: 100px;
  }
  .all-wraper{
    background-color: #F1F4F7;
  }
  .pd-banner-wrap{
    width: 750px;
    height: 750px;
    .swiper-container{
      .img-show{
        width: 750px;
        height: 750px;
      }
      .swiper-pagination-bullet{
        width: 30px;
        height: 10px;
        display: inline-block;
        border-radius: 10px;
        background: #f2f2f2;
        opacity: 0.5;
      }
      .swiper-pagination .swiper-pagination-bullet-active{
        background-color: #1dce7e;
        opacity: 1;
      }
    }
  }
  .pd-detail-wrap{
    width: 100%;
    box-sizing: border-box;
    padding: 35px 32px;
    background-color: #fff;
    .detail-title{
      font-size:32px;
      color:rgba(0,0,0,1);
      line-height:48px;
      -webkit-line-clamp: 2;
      margin-bottom: 16px;
    }
    .detail-desc{
      font-size:28px;
      color:rgba(153,153,153,1);
      line-height:40px;
    }
  }
  .price-fav-box{
    margin-top: 26px;
    .price-wrap{
      font-size: 42px;
      color: rgba(255,24,16,1);
      line-height: 30px;
      .curr-symbol{
        font-size: 28px;
      }
      .unit-symbol{
        font-size: 24px;
        color:rgba(153,153,153,1);
        line-height:20px;
      }
    }
    .favorite-icon{
      width: 36px;
      height: 36px;
      background-image: url('../assets/img/productdetail/favorite.png');
      background-repeat: no-repeat;
      background-position: center;
      background-size: 36px 36px;
      margin-right: 10px;
    }
    .favorite-icon-ok{
      background-image: url('../assets/img/productdetail/favorite_ok.png');
    }
    .favorite-desc{
      font-size: 28px;
      color:rgba(0,0,0,1);
      line-height:40px;
    }
    .favorite-desc-ok{
      color: #1DCE7E;
    }
  }
  .pd-paramer-wrap{
    padding: 36px 32px;
    background-color: #fff;
    margin: 24px 0;
    .paramer-title{
      margin-bottom: 26px;
    }
    .param-detail-outter{
      flex-wrap: wrap;
    }
    .param-inner{
      padding: 14px 32px;
      border-radius: 8px;
      background-color: #F2F2F2;
      color: #333;
      font-size: 28px;
      line-height: 28px;
      margin-right: 32px;
      &.active{
        color: #fff;
        background-color: #1DCE7E;
      }
    }
  }
  .pd-show-wraper{
    .show-title-box{
      padding: 24px 0;
      background-color: #fff;
      .title-line{
        background-color: #ccc;
        width: 180px;
        height: 1px;
      }
      .title-text{
        margin: 0 16px;
        font-size:28px;
        color:rgba(51,51,51,1);
        line-height:28px;
      }
    }
    .show-img{
      width: 750px;
    }
  }
  .nothing{
    height: 98px;
  }
  .buy-fixed-wraper{
    height: 98px;
    background-color: #fff;
    position: fixed;
    width: 100%;
    z-index: 10;
    left: 0;
    bottom: 0;
    .buy-left-part{
      padding: 14px 0 10px;
      width: 65%;
    }
    .fast-link-btn{
      text-align: center;
      width: 30%;
    }
    .btn-icon{
      width: 36px;
      height: 36px;
    }
    .btn-text{
      font-size: 20px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(102,102,102,1);
      line-height: 28px;
    }
    .buy-right-part{
      background-color: #1DCE7E;
      font-size:32px;
      color:rgba(255,255,255,1);
      line-height:32px;
      width: 35%;
      height: 98px;
    }
  }
</style>
