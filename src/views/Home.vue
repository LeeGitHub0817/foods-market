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
          <div class="swiper-slide"><img class="img-show" src="static/index/1.jpg" alt="轮播图"></div>
          <div class="swiper-slide"><img class="img-show" src="static/index/2.jpg" alt="轮播图"></div>
          <div class="swiper-slide"><img class="img-show" src="static/index/3.jpg" alt="轮播图"></div>
        </div>
        <!--分页器-->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <!--快捷按钮-->
    <div class="h-quickbtn-container">          
      <div class="common-quickbtn order">
        <a href="">        
          <i class="common-btn-img order-img"></i>
          <div class="common-title">我的订单</div>
        </a>
      </div>  
      <div class="common-quickbtn list">
        <a href="">
          <i class="common-btn-img list-img"></i>
          <div class="common-title">常用清单</div>
        </a>
      </div>
      <div class="common-quickbtn askprice">
        <a href="">
          <i class="common-btn-img askprice-img"></i>
          <div class="common-title">产品询价</div>
        </a>
      </div>
      <div class="common-quickbtn usercenter">
        <a href="">
          <i class="common-btn-img usercenter-img"></i>
          <div class="common-title">个人中心</div>
        </a>
      </div>    
    </div>
    <!--新闻-->
    <div class="h-news-container">
      <div class="news">
        <div class="news-img">
          <img class="img-show" src="../assets/img/index/news.png" alt="">
        </div>
        <div class="news-info">
          <div class="swiper-container-news">
            <div class="swiper-wrapper">
              <a class="swiper-slide news-shortcut" href="">限时全场商品每满1000减80元满800减50满500减30满300减10</a>
              <a class="swiper-slide news-shortcut" href="">限时全场商品每满1000减80元满800减50满500减30满300减10</a>
              <a class="swiper-slide news-shortcut" href="">限时全场商品每满1000减80元满800减50满500减30满300减10</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--精品推荐-->
    <div class="h-good-container">
      <div class="good-head">
        <span class="hot-icon">HOT</span>
        <span class="good-title">精品推荐</span>
        <div class="swiper-pagination-good right-float">right</div>
      </div>
      <div class="product-box">
        <!--左边部分-->
        <div class="product-box-left">
          <div class="product-left-img">
            <img class="product-img-show" src="static/index/5.png" alt="精品产品">
          </div>
          <div class="product-left-title">散装精品三文鱼</div>
          <div class="product-left-price">
            <span class="currency-symbol">￥</span>
            <span class="price-number">42.00</span>
            <span class="unit-symbol">/斤</span>
          </div>
        </div>
        <!--右边部分-->
        <div class="product-box-right">
          <div class="product-right-up">

          </div>
          <div class="product-right-down">

          </div>
        </div>
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
    var newBanner = new Swiper(".swiper-container-news", {
      direction: "vertical",
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        loop: false,
    });
  }
}
</script>

<style lang="scss" src="../assets/sass/test.scss"></style>
<style lang="scss">
  /*定义颜色,字体等变量*/
  $bg-white: #fff;

  $main-green: #1dce7e;
  $main-gray: #f2f2f2;
  $main-red: #FF1810;

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
  /***快捷按钮***/
  .h-quickbtn-container{
    margin: 48px 44px;
    font-size: $text-none;
    .common-quickbtn{
      display: inline-block;
      text-align: center;
      .common-btn-img{
        display: block;
        width: 120px;
        height: 110px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 120px 110px;        
      }
      .order-img{
        background-image: url("../assets/img/index/order-form.png")
      }
      .list-img{
        background-image: url("../assets/img/index/list.png")
      }
      .askprice-img{
        background-image: url("../assets/img/index/inquiry.png")
      }
      .usercenter-img{
        background-image: url("../assets/img/index/me.png")
      }
    }
    .common-quickbtn:not(:last-child){
      margin-right: 60px;
    }
  }
  /***新闻动态***/
  .h-news-container{
    margin: 0 32px;

    .news{
      width: 100%;
      padding: 32px 32px;
      box-sizing: border-box;
      // height: 96px;
      background-color:rgba(255,255,255,1);
      box-shadow:0px 2px 20px 0px rgba(0,0,0,0.08);
      border-radius:16px;
      background-image: url("../assets/img/index/right.png");
      background-position: 96% center;
      background-repeat: no-repeat;
      background-size: 16px 32px;

      .news-img{
        display: inline-block;
        vertical-align: middle;
        width: 90px;
        height: 32px;
        font-size: $text-none;
        margin-right: 32px;  

        .img-show{
          width: 90px;
          height: 32px;
        }
      }
      .news-info{
        display: inline-block;
        vertical-align: middle;
        width: 75%;
        
        .swiper-container-news{
          overflow: hidden;
          height: 40px;
        }
        .news-shortcut{
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }


.test{
  a{
    color: #ff1f1f;
    &:hover{
      color: #00b1ff;
    }
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
