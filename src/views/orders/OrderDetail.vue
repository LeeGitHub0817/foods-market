<template>
  <div class="all-wrap">
    <div class="head-wrap">
      <head-com :titleHead="'我的订单'"></head-com>
    </div>

    <div class="detail-content-wrap">
      <div class="top-box flex-between-center">
        <span class="common-text">订单编号：2018073008823</span>
        <span class="common-text">待收货</span>
      </div>

      <ul class="product-info-wrap">
        <li class="product-info-item flex-start-center">
          <img class="info-img" src="static/index/9.png">
          <div class="info-wrap">
            <p class="pro-name">美味八爪鱼</p>
            <p class="pro-param">500g</p>
            <p class="pro-price">￥50/斤</p>
            <p class="pro-count">数量：5.5</p>
          </div>
        </li>
        <li class="product-info-item flex-start-center">
          <img class="info-img" src="static/index/9.png">
          <div class="info-wrap">
            <p class="pro-name">美味八爪鱼</p>
            <p class="pro-param">500g</p>
            <p class="pro-price">￥50/斤</p>
            <p class="pro-count">数量：5.5</p>
          </div>
        </li>
      </ul>

      <div class="user-info-wrap flex-start-center">
        <img class="location-icon" src="../../assets/img/common/location.png">
        <div class="info-box">
          <p class="name-tel-item">
            <span class="name">李浩</span>
            <span class="telnum">183****7534</span>
          </p>
          <p class="address">地址：重庆市渝北区城区龙华大道107号财信城市国际3栋</p>
        </div>
      </div>

      <div class="order-info-wrap">
        <div class="order-info-item">
          <span class="item-left">订单编号：</span>
          <span class="item-right">201908171431</span>
        </div>
        <div class="order-info-item">
          <span class="item-left">下单时间：</span>
          <span class="item-right">2019-08-17 14:36</span>
        </div>
        <div class="order-info-item">
          <span class="item-left">支付方式：</span>
          <span class="item-right">在线支付</span>
        </div>
        <div class="order-info-item">
          <span class="item-left">支付时间：</span>
          <span class="item-right">2019-08-17 14:38</span>
        </div>
      </div>

      <div class="price-info-wrap">
        <div class="price-info-item flex-between-center">
          <span class="item-left">商品总额</span>
          <span class="item-right">￥399.00</span>
        </div>
        <div class="price-info-item flex-between-center">
          <span class="item-left">运费</span>
          <span class="item-right">￥10.00</span>
        </div>
        <div class="price-info-item flex-between-center special-item">
          <span class="item-left"></span>
          <span class="item-right">需付款：<span class="price-num">￥400.00</span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    
  },
}
</script>

<style lang="scss">
  .all-wrap {
    background-color: #F1F4F7;
  }
  .head-wrap {
    height: 100px;
  }

  .detail-content-wrap {
    .top-box{
      padding: 20px 26px;
      .common-text{
        font-size: 28px;
        color: #b1b1b1;
      }
    }
  }

  .product-info-wrap {
    background-color: #fff;
    .product-info-item {
      box-sizing: border-box;
      padding: 24px 32px;
      border-bottom: 1px solid #f4f4f4;
    }
    .info-img {
      width: 200px;
      height: 200px;
      border-radius: 12px;
      margin-right: 22px;
    }
    .info-wrap {
      width: 70%;
    }
    .pro-param{
      display: inline-block;
      font-size: 28px;
      margin-bottom: 8px;
      background-color: #F0F2F5;
      color: #9c9c9c;
      padding: 4px;
    }
    .pro-name {
      font-size: 34px;
      font-weight: 500;
      margin-bottom: 12px;
    }
    .pro-price {
      font-size: 30px;
      margin-bottom: 12px;
      color: #fd3b21;
    }
    .pro-count {
      font-size: 28px;
      text-align: right;
    }
  }

  .user-info-wrap {
    margin-top: 22px;
    background-color: #fff;
    box-sizing: border-box;
    padding: 24px 32px;
    .location-icon {
      width: 40px;
      height: 40px;
      align-self: flex-start;
      margin-right: 22px;
    }
    .info-box {
      width: 92%;
    }
    .name-tel-item {
      font-size: 28px;
      margin-bottom: 16px;
      .name {
        margin-right: 30px;
      }
      .telnum {
        font-weight: bold;
      }
    }
    .address {
      font-size: 26px;
    }
  }

  .order-info-wrap {
    margin-top: 22px;
    background-color: #fff;
    box-sizing: border-box;
    padding: 24px 32px;
    .order-info-item:not(:last-child) {
      margin-bottom: 32px;
    }
    .order-info-item {
      .item-left {
        font-size: 28px;
        font-weight: 500;
      }
      .item-right {
        font-size: 28px;
        font-weight: 400;
        color: #989898;
      }
    }
  }

  .price-info-wrap {
    margin-top: 22px;
    background-color: #fff;
    box-sizing: border-box;
    padding: 24px 32px;
    .price-info-item {
      font-size: 28px;
    }
    .price-info-item:not(:last-child) {
      margin-bottom: 32px;
    }
    .special-item {
      padding: 20px 0;
      border-top: 1px solid #f4f4f4;
      .price-num {
        color: #fd3b21;
      }
    }
  }
</style>
