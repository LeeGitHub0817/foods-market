<template>
  <div>
    <div class="commonlist-main-container">
      <header class="commonlist-head">常购清单</header>
      <section class="commonlist-content"></section>
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
  .commonlist-main-container{
    padding-top: 100px;
    .commonlist-head{
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
  }
</style>

