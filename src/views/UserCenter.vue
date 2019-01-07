<template>
  <div style="background-color: #F8F9FA">
    <!--用户信息-->
    <div class="u-userinfo">
      <div class="user-con clear-flow">
        <div class="user-type">
          <div class="avatar"><img src="../assets/img/user/default_avatar.png" alt="头像"></div>
          <div class="name-con">
            <h1 class="name">联合国际</h1>
            <div class="type">合约客户</div>
          </div>
          <div class="account-set">
            <a class="set-link" href="">管理</a>
          </div>
        </div>
        <div class="user-bill">
          <div class="bill-one clear-float">
            <a href="">
              <h2 class="one-mine left-float">我的账户</h2>
              <div class="one-balance right-float">
                <span class="desc">余额:</span>
                <span class="number">￥2785.00</span>
              </div>
            </a>
          </div>
          <div class="bill-two">
            <div class="two-common cur-month">
              <div class="common-title">本月待付</div>
              <div class="common-number">563.00</div>
            </div>
            <div class="two-common now-debt">
                <div class="common-title">本月待付</div>
                <div class="common-number">4357.00</div>
            </div>
            <div class="two-common next-month">
                <div class="common-title">本月待付</div>
                <div class="common-number">999954.00</div>
            </div>
          </div>
          <div class="check-all">
            <a class="check-link" href="">查看账单明细</a>
          </div>
        </div>
      </div>
    </div>
    <!--订单按钮-->
    <div class="u-order">
      <div class="order-nothing"></div>
      <div class="order-btn">
        <span data-btn="1" @click="switchOptionFunc()" v-bind:class="{'btn-common common-color ordinary-btn': true, active: switchOption === false}">普通订单</span>
        <span data-btn="2" @click="switchOptionFunc()" v-bind:class="{'btn-common common-color bill-btn': true, active: switchOption === true}">账期订单</span>
        <a href="">
          <span class="btn-common all-list right-float">全部订单</span>
        </a>
      </div>
      <!--普通订单-->
      <div v-if="switchOption === false" data-menu="1" class="order-btn-detail">
        <div class="btn-detail-common">
          <a href="">
            <div class="img-con">
              <img src="../assets/img/user/three.png" alt="">
              <div class="cur-num">9+</div>
            </div>
            <div class="title">待付款</div>
          </a>
        </div>
        <div class="btn-detail-common">
          <a href="">
            <div class="img-con">
              <img src="../assets/img/user/two.png" alt="">
            </div>
            <div class="title">待发货</div>
          </a>
        </div>
        <div class="btn-detail-common">
          <a href="">
            <div class="img-con">
              <img src="../assets/img/user/six.png" alt="">
            </div>
            <div class="title">实发数</div>
          </a>  
        </div>
        <div class="btn-detail-common">
          <a href="">
            <div class="img-con">
              <img src="../assets/img/user/four.png" alt="">
            </div>
            <div class="title">待付尾款</div>
          </a>   
        </div>
        <div class="btn-detail-common">
          <a href="">
            <div class="img-con">
              <img src="../assets/img/user/five.png" alt="">
            </div>
            <div class="title">待收货</div> 
          </a>
        </div>
      </div>
      <!--账期订单-->
      <div v-else data-menu="2" class="order-btn-detail">
        <div class="btn-detail-common">
          <a href="">
            <div class="img-con">
              <img src="../assets/img/user/two.png" alt="">
              <div class="cur-num">9+</div>
            </div>
            <div class="title">待发货</div>
          </a>
        </div>
        <div class="btn-detail-common">
          <a href="">
            <div class="img-con">
              <img src="../assets/img/user/six.png" alt="">
            </div>
            <div class="title">实发数</div>
          </a>
        </div>
        <div class="btn-detail-common">
          <a href="">
            <div class="img-con">
              <img src="../assets/img/user/five.png" alt="">
            </div>
            <div class="title">待收货</div>
          </a>  
        </div>
        <div class="btn-detail-common">
          <a href="">
            <div class="img-con">
              <img src="../assets/img/user/one.png" alt="">
            </div>
            <div class="title">待对账</div>
          </a>   
        </div>
        <div class="btn-detail-common">
          <a href="">
            <div class="img-con">
              <img src="../assets/img/user/three.png" alt="">
            </div>
            <div class="title">待付款</div> 
          </a>
        </div>
      </div>
    </div>
    <!--链接-->
    <div class="u-menu-link">
      <div class="menu-link-con">
        <a class="link-con" href="">
          <div class="img-title">
            <img class="img-icon" src="../assets/img/user/location.png" alt="">
            <span class="title">地址管理</span>
          </div>
        </a>
      </div>
      <div class="menu-link-con">
        <a class="link-con" href="">
          <div class="img-title">
            <img class="img-icon" src="../assets/img/user/list.png" alt="">
            <span class="title">常用清单</span>
          </div>
        </a>
      </div>
      <div class="menu-link-con">
        <a class="link-con" href="">
          <div class="img-title">
            <img class="img-icon" src="../assets/img/user/ask-price.png" alt="">
            <span class="title">询价单</span>
          </div>
        </a>
      </div>
      <div class="menu-link-con">
        <a class="link-con" href="">
          <div class="img-title">
            <img class="img-icon" src="../assets/img/user/offer.png" alt="">
            <span class="title">报价单</span>
          </div>
        </a>
      </div>
      <div class="menu-link-con">
        <a class="link-con" href="">
          <div class="img-title">
            <img class="img-icon" src="../assets/img/user/supplier.png" alt="">
            <span class="title">供应商</span>
          </div>
        </a>
      </div>
    </div>
    <!--服务相关-->
    <div class="u-service">
      <div class="service-common faq">
        <a href=""><div class="common-con faq-con">常见问题</div></a>
      </div>
      <div class="service-common ser-center">
        <a href=""><div class="common-con ser-center-con">服务中心</div></a>
      </div>
      <div class="service-common on-service">
        <a href=""><div class="common-con on-service-con">在线客服</div></a>
      </div>
    </div>
    <!--底部占位-->
    <div class="nothing"></div>
    <!--底部导航按钮-->
    <foot-part></foot-part>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      switchOption: false
    }
  },
  methods: {
    switchOptionFunc: function(){
      this.switchOption = !this.switchOption;
    }
  }
  
}
</script>

<style lang="scss">
  /***1px解决方案***/
  @svg 1px-border{
    width: 4px;
    height: 4px;
    @rect{
      fill: transparent;
      width: 100%;
      height: 100%;
      stroke-width: 25%;
      stroke: var(--color, black);
    }
  }
  .u-userinfo{
    .user-con{
      position: relative;
      width: 100%;
      height: 360px;
      background-image: url("../assets/img/user/my_bg.png");
      background-repeat: no-repeat;
      background-size: 100% 360px;
      .user-type{
        position: relative;
        margin: 40px 32px 0 32px;
        .avatar{
          display: inline-block;
          vertical-align: middle;
          width: 120px;
          height: 120px;
          img{
            width: 120px;
            height: 120px;
            border-radius: 50%;
          }
        }
        .name-con{
          display: inline-block;
          vertical-align: middle;
          margin-left: 24px;
          .name{
            color: #fff;
            font-size: 36px;
            min-height: 26px;
            margin-bottom: 10px;
          }
          .type{
            display: inline-block;
            // min-height: 30px;
            // line-height: 30px;
            color: #1DCE7E;
            font-size: 18px;
            background-color: #FFFC35;
            background-image: url("../assets/img/user/star.png");
            background-repeat: no-repeat;
            background-position: 9px center;
            background-size: 18px 18px;
            padding-left: 30px;
            padding-right: 11px;
            border-radius: 18px; 
          }
        }
        .account-set{
          position: absolute;
          right: 0;
          top: 0;
          .set-link{
            display: inline-block;
            // min-height: 30px;
            background-image: url("../assets/img/user/set.png");
            background-repeat: no-repeat;
            background-position: left center;
            background-size: 26px 26px;
            font-size: 26px;
            color: #fff;
            padding-left: 34px;
            // line-height: 26px;
          }
        }
      }
      .user-bill{
        position: absolute;
        top: 55%;
        left: 32px;
        right: 32px;
        /* height: 4.36rem; */
        background-color: #fff;
        margin: 0 auto;
        border-radius: 16px;
        box-shadow: 0 6px 30px 1px #eee;
        color: #333;
        .bill-one{
          min-height: 24px;
          margin: 0 32px;
          padding: 32px 0;
          border-bottom: 1px solid transparent;
          border-image: svg(1px-border param(--color #eee)) 1 stretch;
          box-sizing: border-box;
          background-image: url("../assets/img/user/blod_arrow.png");
          background-repeat: no-repeat;
          background-position: right center;
          background-size: 16px 32px;
          padding-right: 36px;  
          .one-mine{
            font-size: 32px;
          }
          .one-balance {
            .number{
              font-size: 32px;
              font-weight: bold;
            }
            .desc{
              font-size: 24px;
            }
          }
        }
        .bill-two{
          font-size: 0;
          margin: 0 32px;
          padding: 32px 0;
          .two-common{
            display: inline-block;
            vertical-align: middle;
            width: 33.3%;
            box-sizing: border-box;
            &:not(:first-child){
              padding-left: 25px;
              border-left: 1px solid transparent;
              border-image: svg(1px-border param(--color #eee)) 1 stretch;
            }
            .common-title{
              font-size: 24px;
              color: #999;
              margin-bottom: 5px;
            }
            .common-number{
              font-size: 36px;
              min-height: 30px;
            }
          }
        }
        .check-all{
          margin: 0 32px;
          padding: 32px 0;
          text-align: center;
          .check-link{
            display: inline-block;
            font-size: 30px;
            // line-height: 30px;
            background-image: url("../assets/img/user/shin_arrow.png");
            background-repeat: no-repeat;
            background-position: right center;
            background-size: 24px 24px;
            padding-right: 30px;
          }
        }
      }
    }
  }
  .u-order{
    background-color: #fff;
    .order-nothing{
      height: 262.5px;
    }
    .order-btn{
      font-size: 32px;
      margin: 0 32px;
      padding-top: 24px;
      border-bottom: 1px solid transparent;
      border-image: svg(1px-border param(--color #eee)) 1 stretch;
      .btn-common{
        display: inline-block;
        padding-bottom: 20px;
      }
      .all-list{
        background-image: url("../assets/img/user/shin_arrow.png");
        background-repeat: no-repeat;
        background-position: right center;
        background-size: 24px 24px;
        padding-right: 30px;
        padding-bottom: 0;
      }
      .ordinary-btn{
        margin-right: 64px;
      }
      .common-color{
        color: #2D8EFF;
        font-weight: bold;
        &.active{
          color:#1DCE7E;border-bottom: 4px solid #1DCE7E;
        }
      }
    }
    .order-btn-detail{
      font-size: 0;
      padding: 40px 0;
      .btn-detail-common{
        font-size: 28px;
        display: inline-block;
        vertical-align: middle;
        width: 20%;
        text-align: center;
        .img-con{
          position: relative;
          display: inline-block;
          width: 54px;
          height: 54px;
          img{
            width: 54px;
            height: 54px;
          }
          .cur-num{
            position: absolute;
            right: -16px;
            top: -16px;
            width: 40px;
            // height: 32px;
            font-size: 18px;
            line-height: 26px;
            padding: 4px 0;
            color: #fff;
            background-color: #DE3600;
            border-radius: 16px;
            text-align: center;
          }
        }
      }
    }
  }
  .u-menu-link{
    background-color: #fff;
    margin-top: 24px;
    padding-bottom: 8px;
    .menu-link-con{
      padding-top: 32px;
      margin-left: 32px;
      border-bottom: 1px solid transparent;
      border-image: svg(1px-border param(--color #E4E8ED)) 1 stretch;
      &:last-child{
        border-bottom: 0;
      }
      .link-con{
        display: block;
        margin-bottom: 32px;
        background-image: url("../assets/img/user/shin_arrow.png");
        background-repeat: no-repeat;
        background-position: right center;
        background-size: 24px 24px;
        margin-right: 32px;
        .img-title{
          .img-icon{
            width: 32px;
            height: 32px;
            vertical-align: middle;
          }
          .title{
            font-size: 28px;
            display: inline-block;
            vertical-align: middle;
            margin-left: 16px;
          }
        }
      }
    }
  }
  .u-service{
    margin: 0 32px;
    font-size: 0;
    .service-common{
      display: inline-block;
      width: 33.3%;
      padding: 40px 0;
      font-size: 26px;
      .common-con{
        display: inline-block;
        color: #7A8DA3;
      }
    }
    .faq{
      .faq-con{
        background-image: url("../assets/img/user/help.png");
        background-repeat: no-repeat;
        background-position: left center;
        background-size: 32px 32px;
        padding-left: 40px;
      }
    }
    .ser-center{
      text-align: center;
        .ser-center-con{
          background-image: url("../assets/img/user/service.png");
          background-repeat: no-repeat;
          background-position: left center;
          background-size: 32px 32px;
          padding-left: 40px;
        }
    }
    .on-service{
      text-align: right;
      .on-service-con{
        background-image: url("../assets/img/user/cus_ser.png");
        background-repeat: no-repeat;
        background-position: left center;
        background-size: 32px 32px;
        padding-left: 40px;
      }
    }
  }
  .nothing{
    height: 90px;
  }
</style>


