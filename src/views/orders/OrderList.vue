<template>
  <div class="all-wrap">
    <div class="head-wrap">
      <head-com :titleHead="'我的订单'"></head-com>
    </div>

    <div class="order-options-wrap">
      <ul class="options-box flex-between-center">
        <li class="optins-item active">全部</li>
        <li class="optins-item">待付款</li>
        <li class="optins-item">待发货</li>
        <li class="optins-item">待收货</li>
        <li class="optins-item">已完成</li>
        <li class="optins-item">已取消</li>
      </ul>
    </div>

    <div class="order-content-wrap">
      <div class="content-box">
        <div class="content-one flex-between-center">
          <span class="left-msg common-msg">下单时间 2018-7-26 00:00:00</span>
          <span class="right-msg common-msg">待发货</span>
        </div>
        <div class="content-two flex-between-center">
          <div class="left-msg">
            <img class="product-img" src="static/index/8.png">
            <img class="product-img" src="static/index/8.png">
            <img class="product-img" src="static/index/8.png">
            <img class="product-img" src="static/index/8.png">
            <img class="product-img" src="static/index/8.png">
          </div>
          <div class="right-msg">
            <img class="right-msg-arrow" src="../../assets/img/user/shin_arrow.png">
          </div>
        </div>
        <div class="content-three flex-between-center">
          <span class="left-msg common-msg">下单时间 2018-7-26 00:00:00</span>
          <span class="right-msg common-msg">待发货</span>
        </div>
        <div class="content-four flex-between-center">
          <span class="place-holder"></span>
          <span class="cancel-button">取消订单</span>
        </div>
      </div>

      <div class="content-box">
        <div class="content-one flex-between-center">
          <span class="left-msg common-msg">下单时间 2018-7-26 00:00:00</span>
          <span class="right-msg common-msg">待付款</span>
        </div>
        <div class="content-two flex-between-center">
          <div class="left-msg">
            <img class="product-img" src="static/index/8.png">
            <img class="product-img" src="static/index/8.png">
            <img class="product-img" src="static/index/8.png">
            <img class="product-img" src="static/index/8.png">
            <img class="product-img" src="static/index/8.png">
          </div>
          <div class="right-msg">
            <img class="right-msg-arrow" src="../../assets/img/user/shin_arrow.png">
          </div>
        </div>
        <div class="content-three flex-between-center">
          <span class="left-msg common-msg">下单时间 2018-7-26 00:00:00</span>
          <span class="right-msg common-msg">待付款</span>
        </div>
        <div class="content-four flex-between-center">
          <span class="place-holder"></span>
          <span class="confirm-button">去付款</span>
        </div>
      </div>

      <div class="content-box">
        <div class="content-one flex-between-center">
          <span class="left-msg common-msg">下单时间 2018-7-26 00:00:00</span>
          <span class="right-msg common-msg">待收货</span>
        </div>
        <div class="content-two flex-between-center">
          <div class="left-msg">
            <img class="product-img" src="static/index/8.png">
            <img class="product-img" src="static/index/8.png">
            <img class="product-img" src="static/index/8.png">
            <img class="product-img" src="static/index/8.png">
            <img class="product-img" src="static/index/8.png">
          </div>
          <div class="right-msg">
            <img class="right-msg-arrow" src="../../assets/img/user/shin_arrow.png">
          </div>
        </div>
        <div class="content-three flex-between-center">
          <span class="left-msg common-msg">下单时间 2018-7-26 00:00:00</span>
          <span class="right-msg common-msg">待收货</span>
        </div>
        <div class="content-four flex-between-center">
          <span class="place-holder"></span>
          <span class="confirm-button">去确认</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
  .all-wrap{
    background-color: #F1F4F7;
  }
  .head-wrap{
    height: 100px;
  }

  .order-options-wrap{
    border-top: 1px solid #F1F4F7;
    .options-box{
      background-color: #fff;
      overflow-x: auto;
      white-space: nowrap;
      width: 100%;
      box-sizing: border-box;
      flex-wrap: unset;
    }
    .optins-item{
      padding: 24px 38px;
      font-size: 30px;
      &.active{
        color: #66d096;
        border-bottom: 1px solid #66d096;
      }
    }
  }

  .order-content-wrap{
    margin-top: 3.2vw;
    .content-box{
      padding: 16px 28px;
      box-sizing: border-box;
      background-color: #fff;
      margin-bottom: 2.3vw;
    }
    .content-one{
      margin-bottom: 26px;
      .common-msg{
        font-size: 26px;
      }
      .right-msg{
        color: #fd1313;
      }
    }
    .content-two{
      margin-bottom: 26px;
      .left-msg{
        width: 85%;
        overflow: hidden;
        white-space: nowrap;
      }
      .product-img{
        width: 138px;
        height: 138px;
        border-radius: 8px;
        margin-right: 12px;
      }
      .right-msg-arrow{
        width: 48px;
        height: 48px;
      }
    }
    .content-three{
      margin-bottom: 26px;
      .common-msg{
        font-size: 26px;
      }
      .right-msg{
        color: #fd1313;
      }
    }
    .content-four{
      border-top: 2px solid #F1F4F7;
      padding: 26px 0;
      .place-holder{
        width: 26px;
        height: 26px;
      }
      .cancel-button{
        border: 1px solid #fd1313;
        border-radius: 8px;
        font-size: 28px;
        padding: 6px 18px;
        color: #fd1313; 
      }
      .confirm-button{
        border: 1px solid #66d096;
        border-radius: 8px;
        font-size: 28px;
        padding: 6px 18px;
        color: #66d096; 
      }
    }
  }
</style>
