<template>
  <div>
    <div class="type-function-box">
      <em class="service-icon icon-common"></em>
      <div class="search-container">

      </div>
      <em class="more-icon icon-common"></em>
    </div>
    
    <foot-part></foot-part>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
  .type-function-box{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon-common{
      display: inline-block;
      width: 12%;
      height: 100px;
      background-position: center;
      background-size: 50px 50px;
      background-repeat: no-repeat;
    }
    .service-icon{
      background-image: url("../assets/img/shop/service.png");
    }
    .more-icon{
      background-image: url("../assets/img/shop/more.png");
    }
    .search-container{
      width: 76%;
      height: 100px;
    }
  }
</style>
