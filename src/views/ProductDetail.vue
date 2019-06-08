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
    <div class="pd-detail-wrap">
      <div class="detail-title medium-font-500 multiline-ellipsis">八爪鱼海鲜鲜活水产冷冻小章鱼迷你八抓鱼章鱼足长腿大爆头1斤装</div>
      <p class="detail-desc regular-font-400">鲜活加工，低温速冻，鲜嫩劲道，紧致弹牙！鲜活加工，低温速冻，鲜嫩劲道，紧致弹牙！鲜活加工，低温速冻，鲜嫩劲道，紧致弹牙！鲜活加工，低温速冻，鲜嫩劲道，紧致弹牙！</p>
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
    
  },
}
</script>

<style lang="scss">
  .head-wrap{
    width: 100%;
    height: 100px;
  }
  .pd-banner-wrap{
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
</style>
