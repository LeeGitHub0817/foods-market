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
          <div class="swiper-slide"><img class="img-show" src="http://referenceerror.top/imgs/index_1.jpg" alt="轮播图"></div>
          <div class="swiper-slide"><img class="img-show" src="http://referenceerror.top/imgs/index_2.jpg" alt="轮播图"></div>
          <div class="swiper-slide"><img class="img-show" src="http://referenceerror.top/imgs/index_3.jpg" alt="轮播图"></div>
        </div>
        <!--分页器-->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <!--快捷按钮-->
    <div class="h-quickbtn-container">          
      <div @click="skipToList" class="common-quickbtn order">    
        <i class="common-btn-img order-img"></i>
        <div class="common-title">我的订单</div>
      </div>  
      <div @click="skipToCommon" class="common-quickbtn list">
        <i class="common-btn-img list-img"></i>
        <div class="common-title">常用清单</div>
      </div>
      <div @click="skipToCart" class="common-quickbtn askprice">
        <i class="common-btn-img askprice-img"></i>
        <div class="common-title">购物车</div>
      </div>
      <div @click="skipToUser" class="common-quickbtn usercenter">
        <i class="common-btn-img usercenter-img"></i>
        <div class="common-title">个人中心</div>
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
        <div class="swiper-pagination-good-con right-float">
          <div class="swiper-pagination-good"></div>
        </div>
      </div>
      <div class="swiper-container-good">
        <div class="swiper-wrapper">
          <div v-for="(item, index) in recomData" :key="index" class="swiper-slide">
            <div class="product-box">
              <!--左边部分-->
              <div @click="jumpToDetail(item[0].pid)" class="product-box-left">
                <div class="product-left-img">
                  <img class="product-img-show" :src="item[0].img_link" alt="精品产品">
                </div>
                <div class="product-left-title">{{ item[0].name }}</div>
                <div class="product-left-price">
                  <span class="currency-symbol">￥</span>
                  <span class="price-number">{{ item[0].price.toFixed(2) }}</span>
                  <span class="unit-symbol">/{{ item[0].unit }}</span>
                </div>
              </div>
              <!--右边部分-->
              <div class="product-box-right">
                <div @click="jumpToDetail(item[1].pid)" class="product-right-part">
                  <div class="product-right-img">
                    <img class="product-img-show" :src="item[1].img_link" alt="精品产品">
                  </div>
                  <div class="product-right-info">
                    <div class="product-right-title">{{ item[1].name }}</div>
                    <div class="product-right-price">
                      <span class="currency-symbol">￥</span>
                      <span class="price-number">{{ item[1].price.toFixed(2) }}</span>
                      <span class="unit-symbol">/{{ item[1].unit }}</span>
                    </div>
                  </div>
                </div>
                <div @click="jumpToDetail(item[2].pid)" class="product-right-part">
                  <div class="product-right-img">
                    <img class="product-img-show" :src="item[2].img_link" alt="精品产品">
                  </div>
                  <div class="product-right-info">
                    <div class="product-right-title">{{ item[2].name }}</div>
                    <div class="product-right-price">
                      <span class="currency-symbol">￥</span>
                      <span class="price-number">{{ item[2].price.toFixed(2) }}</span>
                      <span class="unit-symbol">/{{ item[2].unit }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--分割线-->
    <div class="h-splitline"></div>
    <!--新品上市-->
    <div class="h-newgood-container">
      <div class="newgood-head">新品上市</div>
      <div class="newgood-box">
        <div v-for="item in newData" :key="item.pid" @click="jumpToDetail(item.pid)" class="newgood-part">
          <div class="img-con">
            <img class="img-show" :src="item.img_link" alt="新品上市">
          </div>
          <div class="title-con">{{ item.name }}</div>
          <div class="price-con">
            <span class="currency-symbol">￥</span>
            <span class="price-number">{{ item.price.toFixed(2) }}</span>
            <span class="unit-symbol">/{{ item.unit }}</span>
          </div>
        </div>
      </div>
    </div>
    <!--分割线-->
    <div class="h-splitline"></div>
    <!--热销商品-->
    <div class="h-newgood-container">
      <div class="newgood-head">热销商品</div>
      <div class="newgood-box">
        <div v-for="item in hotData" :key="item.pid" @click="jumpToDetail(item.pid)" class="newgood-part">
          <div class="img-con">
            <img class="img-show" :src="item.img_link" alt="新品上市">
          </div>
          <div class="title-con">{{ item.name }}</div>
          <div class="price-con">
            <span class="currency-symbol">￥</span>
            <span class="price-number">{{ item.price.toFixed(2) }}</span>
            <span class="unit-symbol">/{{ item.unit }}</span>
          </div>
        </div>
      </div>
    </div>
    <!--占位避免遮挡-->
    <div style="height: 13.067vw"></div>
    <!--底部导航按钮-->
    <foot-part></foot-part>
  </div>
</template>

<script>
//引入swiper
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import api from '../api/api';

export default {
  data: function(){
    return {
      recomData: [], // 推荐商品数据
      newData: [], // 新品上市数据
      hotData: [], // 热销商品数据
      temp_array: [], // 存放临时数据s
    }
  },
  mounted: function(){
    this.init();
  },
  methods: {
    init() {
      // 精品推荐
      let recomPromise = new Promise((resolve, reject) => {
        api.common_request('/index/recommand').then((res) => {
          resolve(res)
        }).catch((err) => {
          console.log(err);
        });
      });

      // 新品上市
      let newPromise = new Promise((resolve, reject) => {
        api.common_request('/index/newproduct').then((res) => {
          resolve(res);
        }).catch((err) => {
          console.log(err);
        });
      });
      
      // 热销商品
      let hotPromise = new Promise((resolve, reject) => {
        api.common_request('/index/hotproduct').then((res) => {
          resolve(res);
        }).catch((err) => {
          console.log(err);
        });
      });

      //数据合集
      Promise.all([recomPromise, newPromise, hotPromise]).then((_res) => {
        console.log(_res);
        // 对精品推荐的数据做一下处理
        let temp = [];
        let count = 0;
        for(let item of _res[0].data.data) {
          temp.push(item);
          count++;
          if(count % 3 == 0) {
            this.recomData.push(JSON.parse(JSON.stringify(temp))); // 这个地方需要深拷贝一下，不然下面的temp.length = 0会把数据去除完
            temp.length = 0;
          }
        }
        console.log(this.recomData)
        this.newData = _res[1].data.data;
        this.hotData = _res[2].data.data;

        // 这里由于Js机制问题用一个定时器来执行Swiper，不然Swiper会有问题。
        setTimeout(() => {
          this.bannerLoop();
        }, 0);
      }).catch((err) => {
        console.log('err');
      })
    },
    // 封装一个轮播图函数
    bannerLoop() {
      //轮播图
      let homeBanner = new Swiper(".swiper-container", {
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
      //新闻轮播
      let newBanner = new Swiper(".swiper-container-news", {
        direction: "vertical",
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false
          },
          loop: false,
      });
      //精品推荐滑动轮播
      let goodBanner = new Swiper(".swiper-container-good", {
        direction: "horizontal",
        autoplay: {
          delay: 10000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        loop: true,
        pagination: {
          el: ".swiper-pagination-good"
        }
      });
    },
    // 跳转函数
    jumpToDetail(pid) {
      this.$router.push({path: 'productdetail', query: {pid: pid}});
    },
    // 跳转函数相关
    skipToList() {
      this.$router.push('/orderlist');
    },
    skipToCommon() {
      this.$router.push('/commonlist');
    },
    skipToCart() {
      this.$router.push('/cart');
    },
    skipToUser() {
      this.$router.push('/usercenter');
    },
  },
}
</script>

<style lang="scss">
  /***1px解决方案***/
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
  /*定义颜色,字体等变量*/
  $bg-white: #fff;

  $main-green: #1dce7e;
  $main-gray: #f2f2f2;
  $main-text-gray: #999;
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
      margin-left: 28px;
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
      .common-title{
        font-size: 28px;
      }
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
  /***精品推荐***/
  .h-good-container{
    width: 750px;
    min-height: 437px;
    .swiper-container-good{
      overflow: hidden;
    }
    .good-head{
      margin: 48px 32px 24px 32px;
      .hot-icon{
        display: inline-block;
        vertical-align: middle;
        height: 32px;
        padding: 0 6px;
        margin-right: 8px;
        border-radius: 8px;
        font-size: $text-xsmall;
        line-height: 32px;
        background-color: $main-red;
        color: #fff;
      }
      .good-title{
        display: inline-block;
        vertical-align: middle;
        font-size: $text-big;
        font-weight:600;
        color:rgba(51,51,51,1);
        background:linear-gradient(90deg, rgba(255,59,62,1) 0%, rgba(255,190,79,1) 100%);
        -webkit-background-clip:text;
        -webkit-text-fill-color:transparent;
      }
      .swiper-pagination-good-con{
        .swiper-pagination-bullet{
          width: 24px;
          height: 8px;
          margin-left: 8px;
          display: inline-block;
          border-radius: 4px;
          background: #f2f2f2;
          opacity: 1;
        }
        .swiper-pagination-bullet-active{
          background-color: $main-green;
          opacity: 1;
        }
      }
    }
    .product-box{
      width: 750px;
      min-height: 437px;
      border-top: 1px solid transparent;
      border-image: svg(1px-border param(--color $main-gray)) 1 stretch;
      font-size: $text-none;
      .product-box-left{
        // width: 40%;
        min-height: 437px;
        display: inline-block;
        border-right: 1px solid transparent;
        border-image: svg(1px-border param(--color $main-gray)) 1 stretch;
        .product-left-img{
          width: 280px;
          height: 280px;
          padding: 16px;
          font-size: $text-none;
          .product-img-show{
            width: 280px;
            height: 280px;
          }
        }
        .product-left-title{
          text-align: left;
          font-weight: bold;
          font-size: $text-middle;
          padding: 0 32px;
          margin-top: 24px;
          box-sizing: border-box;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 290px;
        }
        .product-left-price{
          text-align: left;
          padding: 0 32px;
          margin-top: 16px;
          margin-bottom: 32px;
          box-sizing: border-box;
          .currency-symbol{
            font-size: $text-xsmall;
            color: $main-red;
            font-weight: bold;
          }
          .price-number{
            color: $main-red;
            font-weight: bold;
            font-size: 26px;
          }
          .unit-symbol{
            color: $main-text-gray;
            font-size: $text-xsmall;
          }
        }
      }
      .product-box-right{
        display: inline-block;
        width: 58%;
        .product-right-part{
          font-size: $text-none;
          &:not(:last-child){
            border-bottom: 1px solid transparent;
            border-image: svg(1px-border param(--color $main-gray)) 1 stretch;
          }
          .product-right-img{
            display: inline-block;
            width: 182px;
            height: 182px;
            padding: 16px;
            .product-img-show{
              width: 182px;
            height: 182px;
            }
          }
          .product-right-info{
            display: inline-block;
            vertical-align: top;
            width: 50%;
            .product-right-title{
              font-weight: bold;
              font-size: $text-middle;
              margin-top: 40px;
              width: 100%;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              padding-right: 16px;
              box-sizing: border-box;
            }
            .product-right-price{
              margin-top: 16px;
              .currency-symbol{
                font-size: $text-xsmall;
                color: $main-red;
                font-weight: bold;
              }
              .price-number{
                color: $main-red;
                font-weight: bold;
                font-size: 26px;
              }
              .unit-symbol{
                color: $main-text-gray;
                font-size: $text-xsmall;
              }
            }
          }
        }
      }
    }
  }
  /***分割线***/
  .h-splitline{
    height: 10px;
    background-color: $main-gray;
  }
  /***新品上市***/
  .h-newgood-container{
    .newgood-head{
      padding: 32px;
      font-size: $text-big;
      font-weight: bold;
    }
    .newgood-box{
      padding: 0 32px;
      font-size: $text-none;
      .newgood-part{
        display: inline-block;
        width: 208px;
        &:not(:last-child){
          margin-right: 31px;
        }
        .img-con{
          width: 208px;
          height: 208px;
          .img-show{
            width: 208px;
            height: 208px;
          }
        }
        .title-con{
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-top: 10px;
          width: 100%;
          min-height: 70px;
          font-size: 26px;
        }
        .price-con{
          margin-top: 10px;
          margin-bottom: 32px;
          .currency-symbol{
            font-size: $text-xsmall;
            color: $main-red;
            font-weight: bold;
          }
          .price-number{
            color: $main-red;
            font-weight: bold;
            font-size: 26px;
          }
          .unit-symbol{
            color: $main-text-gray;
            font-size: $text-xsmall;
          }
        }
      }
    }
  }
</style>
