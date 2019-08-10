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
  .all-wrap{
    background-color: #F1F4F7;
  }
  .head-wrap{
    height: 100px;
  }

  .detail-content-wrap{
    .top-box{
      padding: 20px 26px;
      .common-text{
        font-size: 28px;
        color: #b1b1b1;
      }
    }
  }
</style>
