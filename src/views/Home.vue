<template>
  <div class="home">
    <!--占位-->
    <div style="height: 17.067vw;"></div>
    <!--搜索框-->
    <div class="h-search-container">
      <div class="search-box">
        <input class="input-box" type="text" value="" placeholder="请输入关键字">
      </div>
      <div class="msg-box">
        <img class="msg-show-img" src="../assets/img/index/notice.png" alt="消息">
      </div>
    </div>
    <!--轮播图-->
    <div class="h-banner-container">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img class="img-show" src="../assets/img/index/1.jpg" alt="轮播图"></div>
          <div class="swiper-slide"><img class="img-show" src="../assets/img/index/2.jpg" alt="轮播图"></div>
          <div class="swiper-slide"><img class="img-show" src="../assets/img/index/3.jpg" alt="轮播图"></div>
        </div>
        <!--分页器-->
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>

<script>
//引入swiper
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";

export default {
  data: function(){
    return {

    }
  },
  mounted: function(){
    var homeBanner = new Swiper(".swiper-container", {
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
    });
  }
}
</script>

<style lang="scss">
  /*定义颜色,字体等变量*/
  $bg-white: #fff;

  $main-green: #1dce7e;
  $main-gray: #f2f2f2;

  $text-none: 0;
  $text-normal: 28px;
  $text-xsmall: 24px;
  $text-small: 26px;
  $text-middle: 30px;
  $text-big: 32px;
  /***搜索框***/
  .h-search-container{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    box-sizing: border-box;
    padding: 33px 32px;
    z-index: 10;
    background-color: $bg-white;
    .search-box{
      display: inline-block;
      vertical-align: middle;
      box-sizing: border-box;
      width: 610px;
      height: 64px;
      border-radius: 32px;
      background-color: $main-gray;
      background-image: url("../assets/img/index/search.png");
      background-repeat: no-repeat;
      background-position: 20px center;
      background-size: 36px 36px;
      padding-left: 72px;
      .input-box{
        width: 90%;
        height: 64px;
        background-color: $main-gray;
        font-size: 26px;
      }
    }
    .msg-box{
      display: inline-block;
      vertical-align: middle;
      font-size: $text-none;
      margin-left: 32px;
      .msg-show-img{
        width: 44px;
        height: 44px;
      }
    }
  }
  /***轮播图***/
  .h-banner-container{
    width: 750px;
    height: 400px;
    .img-show{
      width: 100%;
      height: 400px;
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
      background-color: $main-green;
      opacity: 1;
    }
  }














  @svg 1px-border{
    width: 4px;
    height: 4px;
    @rect {
      fill: transparent;
      width: 100%;
      height: 100%;
      stroke-width: 25%;
      stroke: var(--color, black);
    }
  }
  .test-con{
    background-color: #eee;
    border: 1px solid transparent;
    border-image: svg(1px-border param(--color #00b1ff)) 1 stretch;
    width: 200px;
    height: 500px;
  }
</style>
