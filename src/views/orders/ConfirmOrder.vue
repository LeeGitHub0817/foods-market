<template>
  <div class="all-wrap">
    <div class="head-wrap">
      <head-com :titleHead="'填写订单'"></head-com>
    </div>
    <!--地址选择部分-->
    <div class="confirm-address flex-start-center">
        <div class="container">
          <div class="name">联合国际大酒店总店</div>
          <div class="customer">收货人 <span>188****8989</span></div>
          <div class="address-detail"><span>默认</span>重庆渝中区全境解放碑联合国际38层06</div>
        </div>
        <div class="jump"><img src="../../assets/img/confirmorder/bigarrow.png"></div>
    </div>
    <!--支付方式-->
    <div class="confirm-payway flex-start-center">
      <div class="online flex-start-center">
        <img src="../../assets/img/common/selected_ok.png">
        <span class="regular-font-400">在线支付</span>
      </div>
    </div>
    <!--商品详细信息-->
    <div class="confirm-product">
      <div class="storename-wrap flex-start-center">
        <van-icon name="shop-o"/>
        <span class="storename-text medium-font-500">小菜在线</span>
      </div>
      <div class="product-wrap">
        <div class="product-item flex-start-center">
          <div class="img-wrap"><img class="img-show" src="static/index/7.png"></div>
          <div class="param-wrap">
            <div class="name-num-box flex-between-center">
              <p class="name">超棒的鹅肝</p>
              <span class="total-num">X18</span>
            </div>
            <div class="select-param">1kg</div>
            <div class="price-add-box flex-between-center">
              <p class="price">￥32.00</p>
              <van-stepper v-model="val"/>
            </div>
          </div>
        </div>
        <div class="product-item flex-start-center">
          <div class="img-wrap"><img class="img-show" src="static/index/7.png"></div>
          <div class="param-wrap">
            <div class="name-num-box flex-between-center">
              <p class="name">超棒的鹅肝</p>
              <span class="total-num">X18</span>
            </div>
            <div class="select-param">1kg</div>
            <div class="price-add-box flex-between-center">
              <p class="price">￥32.00</p>
              <van-stepper v-model="val"/>
            </div>
          </div>
        </div>
        <!--配送等相关选项-->
        <div class="confirm-distribution confirm-common flex-between-center">
          <div class="distri-detail detail-common flex-between-center">
            <span class="name">配送</span>
            <div class="options">商家配送</div>
          </div>
          <van-icon name="weapp-nav" size="26px"/>
        </div>
        <div class="confirm-time confirm-common flex-between-center">
          <div class="time-detail detail-common flex-between-center">
            <span class="name">最佳送达时间</span>
            <div class="options">14:00</div>
          </div>
          <van-icon name="weapp-nav" size="26px"/>
        </div>
        <div class="confirm-remark confirm-common flex-between-center">
          <div class="remark-detail detail-common flex-between-center">
            <span class="name">留言</span>
            <input class="remark-input" type="text" placeholder="请输入您需要留言的内容">
          </div>
        </div>
        <div class="confirm-time confirm-common flex-between-center">
          <div class="time-detail detail-common flex-between-center">
            <span class="name">发票</span>
            <div class="options">不开发票</div>
          </div>
          <van-icon name="weapp-nav" size="26px"/>
        </div>
      </div>
    </div>
    <!--结算价格相关-->
    <div class="confirm-price">
      <div class="price-total-end price-total-common flex-between-center">
        <p class="product-count-text common-text">商品金额</p>
        <div class="product-count common-count">￥998.00</div>
      </div>
      <div class="price-total-end price-total-common flex-between-center">
        <p class="product-count-text common-text">运费</p>
        <div class="product-count common-count">+￥10.00</div>
      </div>
    </div>
    <!--底部固定结算按钮-->
    <div class="confirm-submit flex-start-center">
      <div class="submit-count flex-start-center">￥1008</div>
      <div class="submit-btn flex-all-center">提交订单</div>
    </div>
  </div>
</template>
<script>
export default {
  data: function(){
    return {
      //
      val: 1
    }
  },
  methods: {
    dd(){

    }
  },
}
</script>
<style lang="scss">
  .all-wrap{
    background-color: #F1F4F7;
    padding-bottom: 100px;
  }
  .head-wrap{
    width: 100%;
    height: 100px;
  }
  /*地址选择部分*/
  .confirm-address{
    margin: 24px 5px 0;
    border-radius: 8px;
    padding: 32px;
    background: #fff url('../../assets/img/confirmorder/colorline.png') center bottom no-repeat;
    background-size: 710px 6px;
    .container{
      width: 92%;
    }
    .name{
      min-height: 40px;
      font-size: 32px;
      margin-bottom: 15px;
    }
    .customer{
      min-height: 40px;
      font-size: 28px;
      margin-bottom: 15px;
    }
    .address-detail{
      min-height: 34px;
      font-size: 24px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      span{
        padding: 2px 15px;
        margin-right: 30px;
        border-radius: 6px;
        background-color: #00B050;
        color: #fff;
        font-size: 24px;
      }
    }
    .jump{
      width: 8%;
      text-align: center;
      img{
        width: 20px;
        height: 47px;
      }
    }
  }
  /*支付方式*/
  /*购买方式部分样式*/
  .confirm-payway{
    min-height: 30px;
    margin: 20px 5px;
    padding: 30px 28px;
    border-radius: 8px;
    background-color: #fff;
    .online{
      img{
        width: 36px;
        height: 36px;
        margin-right: 12px;
      }
      span{
        font-size: 30px;
      }
    }
  }
  /*商品详情部分*/
  .confirm-product{
    margin: 20px 5px;
    padding: 30px 28px;
    border-radius: 8px;
    background-color: #fff;
    .product-item{
      padding: 26px 0;
      border-bottom: 1px solid #c5c5c5;
    }
    .total-num{
      color: #F0250F;
    }
    .select-param{
      margin-top: 12px;
      display: inline-block;
      background-color: #F0F2F5;
      color: #9c9c9c;
    }
    .van-icon{
      font-size: 5vw;
    }
    .storename-text{
      font-size: 28px;
      margin-left: 12px;
    }
    .img-show{
      width: 130px;
      height: 130px;
    }
    .price-add-box{
      margin-top: 4px;
      .price{
        color: #FF1F1F;
      }
    }
    .param-wrap{
      box-sizing: border-box;
      padding-left: 20px;
      width: 80%;
      height: 130px;
    }
  }
  .confirm-common{
    margin-top: 40px;
    .detail-common{
      width: 88%;
    }
  }
  .confirm-distribution{
    margin-top: 35px;
  }
  .confirm-remark{
    .remark-input{
      text-align: right;
      width: 80%;
    }
    .remark-input::placeholder{
      text-align: right;
    }
  }
  /**结算价格相关**/
  .confirm-price{
    margin: 20px 5px;
    padding: 30px 28px;
    border-radius: 8px;
    background-color: #fff;
    .price-total-common{
      padding: 12px 0;
    }
    .common-count{
      color: #F0250F;
    }
  }
  /*底部结算按钮*/
  .confirm-submit{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100px;
    background-color: #fff;
    box-shadow: 1px 10px 8px 8px #000;
    .submit-count{
      width: 70%;
      box-sizing: border-box;
      padding-left: 20px;
      font-size: 30px;
      color: #F0250F;
    }
    .submit-btn{
      width: 30%;
      background-color: #1dce7e;
      color: #fff;
      font-size: 30px;
      height: 100%;
    }
  }
</style>
