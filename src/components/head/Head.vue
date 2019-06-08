<template>
  <header class="head-box">
    <img class="back-arrow" src="@/assets/img/head/goback.png">
    <p class="head-title">{{ title }}</p>
    <div class="placeholder"></div>
  </header>
</template>

<script>
export default {
  props: ['titleHead'],
  data: function(){
    return {
      title: this.titleHead
    }
  }
}
</script>

<style lang="scss">
  .head-box{
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    padding: 0 32px;
    background-color: #fff;
    z-index: 10;
  }
  .back-arrow{
    width: 45px;
    height: 45px;
  }
  .head-title{
    font-size: 36px;
  }
  .placeholder{
    width: 45px;
    height: 45px;
  }
</style>
