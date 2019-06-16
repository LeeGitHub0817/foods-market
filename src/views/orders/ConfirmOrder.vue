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
    <div class="confirm-payway clear-float">
      <div class="online left-float">
        <input checked name="paywayradio" type="radio" style="visibility: hidden; position: absolute; top: 0; left: 0;">
        <img data-type="online" src="img/cart/cart_03.png">
        <span>在线支付</span>
      </div>
      <div class="offline right-float">
        <input name="paywayradio" type="radio" style="visibility: hidden; position: absolute; top: 0; left: 20px;">
        <img data-type="offline" src="img/cart/cart_15.png">
        <span>账期购买</span>
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
    width: 100%;
    height: 100px;
  }
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
</style>
