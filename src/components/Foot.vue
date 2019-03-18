<template>
  <div class="footer-container clear-flow">
    <div class="menu clear-float">
      <router-link :class="{'icon-link index left-float': true, active: $route.path === '/'}" to="/">
        <i class="comm-icon icon-index"></i>
        <div class="name">首页</div>
      </router-link>
      <router-link v-bind:class="{'icon-link types left-float': true, active: $route.path === '/types'}" to="/types">
        <i class="comm-icon icon-types"></i>
        <div class="name">分类</div>
      </router-link>
      <router-link :class="{'icon-link list comm left-float': true, active: $route.path === '/commonlist'}" to="/commonlist">
        <i class="comm-icon icon-list"></i>
        <div class="name">常购清单</div>
      </router-link>
      <router-link :class="{'icon-link cart comm left-float': true, active: $route.path === '/cart'}" to="/cart">
        <i class="comm-icon icon-cart"></i>
        <div class="name">购物车</div>
        <div class="countnum" id="foot_cart_num" ></div>
      </router-link>
      <router-link :class="{'icon-link user left-float': true, active: $route.path === '/usercenter'}" to="/usercenter">
        <i class="comm-icon icon-user"></i>
        <div class="name">我的</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      
    }
  },
  methods: {
    // handleClickIcon: function($event){ //绑定事件委托
    //   //console.log($event.target.tagName);
    //   var target = $event.target;
    //   if(target.tagName === "A"){
    //     target.classList.add("active");
    //   }
    // }
  }
}
</script>

<style lang="scss">
  .footer-container{
    position: fixed;
    z-index: 10;
    left: 0;
    bottom: 0;
    width: 750px;
    height: 98px;
    background-color: #fff;
    box-shadow:0px -1px 0px 0px rgba(242,242,242,1);
    .menu{
      margin-top: 10px;
      .icon-link{
        width: 20%;
        height: 98px;
        text-align: center;
        &.active{
          .name{
            color: #1DCE7E;
            font-size: 20px;
          }
          .icon-index{
            background-image: url("../assets/img/footer/homeselect.png");
          }
          .icon-types{
            background-image: url("../assets/img/footer/typeselect.png");
          }
          .icon-list{
            background-image: url("../assets/img/footer/listselect.png");
          }
          .icon-cart{
            background-image: url("../assets/img/footer/cartselect.png");
          }
          .icon-user{
            background-image: url("../assets/img/footer/userselect.png");
          }
        }
        .name{
          color: #777;
          font-size: 20px;
        }
        .comm-icon{
          display: inline-block;
          width: 48px;
          height: 48px;
          background-position: center center;
          background-repeat: no-repeat;
          background-size: 48px 48px;
        }
        .icon-index{
          background-image: url("../assets/img/footer/home.png");
        }
        .icon-types{
          background-image: url("../assets/img/footer/type.png");
        }
        .icon-list{
          background-image: url("../assets/img/footer/list.png");
        }
        .icon-cart{
          background-image: url("../assets/img/footer/cart.png");
        }
        .icon-user{
          background-image: url("../assets/img/footer/user.png");
        }
      }
    }
  }
</style>
