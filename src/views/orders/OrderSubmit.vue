<template>
  <div class="all-wrap">
    <div class="head-warp">
      <head-com :titleHead="'提交成功'"></head-com>
    </div>

    <div class="gray-divide"></div>

    <div class="content-box">
      <img class="img-show" src="../../assets/img/common/submit_ok.png">
      <p class="text-one">恭喜您，您的订单已提交</p>
      <p class="text-two">您的订单已提交完成，等待小菜为你安排发货，发货完成后 会有消息提醒您。</p>
      <div class="jump-btn-wrap flex-between-center">
        <div class="jump-to-products flex-all-center">逛逛新品</div>
        <div class="jump-to-favorite flex-all-center">常购清单</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
  .head-warp{
    height: 100px;
  }

  .gray-divide{
    height: 24px;
    background-color: #F1F4F7;
  }

  .content-box{
    text-align: center;
    padding: 66px 0;
    .img-show{
      width: 125px;
      height: 125px;
    }
    .text-one{
      font-size: 30px;
      margin-top: 42px;
    }
    .text-two{
      font-size: 26px;
      color: #828282;
      margin-top: 32px;
      padding: 0 32px;
      box-sizing: border-box;
      line-height: 40px;
    }
    .jump-btn-wrap{
      box-sizing: border-box;
      padding: 0 100px;
      margin-top: 50px;
      .jump-to-products{
        font-size: 28px;
        border: 1px solid #000;
        border-radius: 4px;
        width: 180px;
        height: 50px;
        color: #4d4c4c;
      }
      .jump-to-favorite{
        font-size: 28px;
        border: 1px solid #00b050;
        border-radius: 4px;
        width: 180px;
        height: 50px;
        color: #00b050;
      }
    }
  }
</style>
