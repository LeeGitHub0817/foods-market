<template>
  <div>
    <div class="cart-main-container">
      <header class="cart-head">购物车</header>
      <section class="cart-content">
        <div class="store-name">
          <i class="check-all-icon name-common selected"></i>
          <i class="store-icon name-common"></i>
          <span class="name-text name-common">小菜在线-自营</span>
        </div>
      </section>
    </div>

    
    <foot-part></foot-part>
  </div>
</template>

<script>
export default {
  
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
  .cart-main-container{
    padding-top: 100px;
    .cart-head{
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100px;
      line-height: 100px;
      text-align: center;
      background-color: #fff;
      font-size: 36px;
      border-bottom: 1px solid transparent;
      border-image: svg(1px-border param(--color #eee)) 1 stretch;
    }
    .cart-content{
      margin: 20px 32px 0 32px;
      .check-all-icon{
        width: 36px;
        height: 36px;
        background-image: url("../assets/img/shop/check-no.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: 36px 36px;
        margin-right: 25px;
      }
      .check-all-icon.selected{
        background-image: url("../assets/img/shop/check-ok.png");
      }
      .store-icon{
        width: 32px;
        height: 32px;
        background-image: url("../assets/img/shop/store-icon.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: 32px 32px;
        margin-right: 10px;
      }
      .name-common{
        display: inline-block;
        vertical-align: middle;
        font-size: 30px;
      }
    }
  }
</style>

