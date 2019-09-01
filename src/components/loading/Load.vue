<template>
  <div v-if="show" class="load-wrap flex-all-center">
    <img class="load-img" src="../../assets/img/common/loadding.png">
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  },
  methods: {
    
  },
}
</script>

<style lang="scss">
  .load-wrap {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.64);
    z-index: 1000;
    .load-img {
      width: 84px;
      height: 84px;
      animation: rotateAnima 1.8s linear 0s infinite;
    }
  }
  @keyframes rotateAnima {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(90deg);
    }
    50% {
      transform: rotate(180deg);
    }
    75% {
      transform: rotate(270deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>