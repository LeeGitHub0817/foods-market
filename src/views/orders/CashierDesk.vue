<template>
  <div class="all-wrap">
    <div class="head-wrap">
      <head-com :titleHead="'收银台'"></head-com>
    </div>
    <div class="total-price-wrap">
      <span class="price-partone">需支付：</span>
      <span class="price-parttwo">399.00</span>
    </div>

    <div class="payway-wrap">
      <p class="payway-title">支付方式</p>
      <van-radio-group v-model="payWaySelect">
        <div class="payway-box">
          <div class="alipay-way common-payway flex-between-center">
            <div class="img-txt-box flex-start-center">
              <img class="img-show" src="../../assets/img/common/alipay.png">
              <div class="txt-box">
                <p class="txt-one">支付宝支付</p>
                <p class="txt-two">支付宝安全支付</p>
              </div>
            </div>
            <van-radio name="1" checked-color="#1DCE7E"/>
          </div>
          <div class="wxpay-way common-payway flex-between-center">
            <div class="img-txt-box flex-start-center">
              <img class="img-show" src="../../assets/img/common/pay-wx.png">
              <div class="txt-box">
                <p class="txt-one">微信支付</p>
                <p class="txt-two">微信安全支付</p>
              </div>
            </div>
            <van-radio name="2" checked-color="#1DCE7E"/>
          </div>
        </div>
      </van-radio-group>
    </div>

    <!--底部提交按钮-->
    <div @click="submitAlipay" v-show="payWaySelect==1" class="submit-btn flex-all-center">支付宝支付 399.00</div>
    <div @click="submitWxpay" v-show="payWaySelect==2" class="submit-btn flex-all-center">微信支付 399.00</div>
  </div>
  
</template>

<script>
export default {
  data: function(){
    return {
      payWaySelect: '1'
    }
  },
  methods: {
    submitAlipay(){

    },
    submitWxpay(){
      
    }
  },
}
</script>

<style lang="scss">
  .all-wrap{
    background-color: #F1F4F7;
  }

  .head-wrap{
    height: 100px;
  }

  .total-price-wrap{
    text-align: right;
    background-color: #fff;
    box-sizing: border-box;
    padding: 12px 32px;
    font-size: 28px;
    .price-parttwo{
      color: #ff5642;
    }
  }

  .payway-wrap{
    margin-top: 24px;
    .payway-title{
      box-sizing: border-box;
      padding: 0 32px 12px;
      font-size: 28px;
    }
    .payway-box{
      background-color: #fff;
      .common-payway{
        box-sizing: border-box;
        padding: 32px 48px;
        border-bottom: 1px solid #dcdcdc;
      }
      .img-show{
        width: 92px;
        height: 92px;
      }
      .txt-box{
        margin-left: 22px;
        font-size: 26px;
        align-self: flex-start;
      }
      .txt-one{
        font-weight: 500;
        margin-bottom: 16px;
      }
      .txt-two{
        color: #a09f9f;
      }
    }
  }

  .submit-btn{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 110px;
    background-color: #1dce7e;
    color: #fff;
    font-size: 30px;
    font-weight: 500;
  }
</style>
