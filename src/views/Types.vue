<template>
  <div>
    <!--搜索部分-->
    <div class="type-function-box">
      <em class="service-icon icon-common"></em>
      <div class="search-container">
        <input class="search-input" type="text" placeholder="请输入关键字">
      </div>
      <em class="more-icon icon-common"></em>
    </div>
    <!--一级导航菜单部分-->
    <div class="type-navmenu-box">
      <ul class="navmenu-list">
        <li class="navmenu-item active">活鲜水产</li>
        <li class="navmenu-item">冷冻食材</li>
        <li class="navmenu-item">粮油干调</li>
        <li class="navmenu-item">蔬菜水果</li>
        <li class="navmenu-item">新鲜肉禽</li>
        <li class="navmenu-item">鲜花野味</li>
        <li class="navmenu-item">酒水茶叶</li>
        <li class="navmenu-item">珍品</li>
      </ul>
      <div class="dropdown-btn ignore"><em class="btn-icon"></em></div>
    </div>
    <!--二级菜单和产品详情-->
    <div class="type-list-box">
      <ul class="second-menu" :style="{ height: listHeight + 'px' }">
        <li class="menu-item active">鱼</li>
        <li class="menu-item">虾</li>
        <li class="menu-item">蟹</li>
        <li class="menu-item">贝</li>
        <li class="menu-item">螺</li>
        <li class="menu-item">鸡</li>
        <li class="menu-item">虾</li>
        <li class="menu-item">蟹</li>
        <li class="menu-item">贝</li>
        <li class="menu-item">螺</li>
        <li class="menu-item">鸡</li>
        <li class="menu-item">虾</li>
        <li class="menu-item">蟹</li>
        <li class="menu-item">贝</li>
        <li class="menu-item">螺</li>
        <li class="menu-item">鸡</li>
        <li class="menu-item">虾</li>
        <li class="menu-item">蟹</li>
        <li class="menu-item">贝</li>
        <li class="menu-item">螺</li>
        <li class="menu-item">鸡</li>
        <li class="menu-item">虾</li>
        <li class="menu-item">蟹</li>
        <li class="menu-item">贝</li>
        <li class="menu-item">螺</li>
        <li class="menu-item">鸡</li>
        <li class="menu-item">虾</li>
        <li class="menu-item">蟹</li>
        <li class="menu-item">贝</li>
        <li class="menu-item">螺</li>
        <li class="menu-item">鸡</li>
      </ul>
      <ul class="product-list" :style="{ height: listHeight + 'px' }">
        <li class="product-item">
          <a class="item-box" href="">
            <div class="img-box"><img class="img-show" src="static/index/9.png" alt="产品图"></div>
            <div class="product-info-box">
              <p class="product-name">美味八爪鱼美味八爪鱼美味八爪鱼美味八爪鱼美味八爪鱼美味八爪鱼美味八爪鱼</p>
              <div class="price-buy">
                <div class="price-item">
                  <span class="symbol">￥</span>
                  <span class="price">25.98</span>
                  <span class="unit">/斤</span>
                </div>
                <!--第一次购买-->
                <div class="first-count" ><i class="firstbuy-btn"></i></div>
                <!--非第一次购买-->
                <div class="not-first" style="display:none;">
                  <span class="reduce common"></span>
                  <input class="input-count" type="number" value="1">
                  <span class="add common"></span>
                </div>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>


    <foot-part></foot-part>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      listHeight: 0
    }
  },
  methods: {

  },
  mounted: function(){
    //计算中间部分的高度
    this.listHeight = window.innerHeight - document.querySelector(".type-function-box").offsetHeight - 
      document.querySelector(".type-navmenu-box").offsetHeight - document.querySelector(".footer-container").offsetHeight -
      parseFloat(window.getComputedStyle(document.querySelector(".type-navmenu-box")).marginBottom);
  }
}
</script>

<style lang="scss">
  .type-function-box{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fafafa;
    .icon-common{
      display: inline-block;
      width: 12%;
      height: 120px;
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
      display: flex;
      align-items: center;
      width: 76%;
      height: 120px;
      .search-input{
        width: 100%;
        height: 70px;
        background-color: #ededed;
        border-radius: 35px;
        box-sizing: border-box;
        padding-left: 75px;
        background-image: url("../assets/img/shop/search.png");
        background-repeat: no-repeat;
        background-position: 20px center;
        background-size: 40px 40px;
      }
    }
  }
  .type-navmenu-box{
    position: relative;
    height: 90px;
    padding-left: 15px;
    font-size: 0;
    // border-bottom: 1px solid #f4f4f4;
    box-shadow: 0px 11px 20px -1px #f4f4f4f4;
    margin-bottom: 20px;
    .navmenu-list{
      display: flex;
      align-items: center;
      width: 88%;
      height: 90px;
      font-size: 0;
      white-space: nowrap;
      overflow: scroll;
      .navmenu-item{
        display: inline-block;
        font-size: 28px;
        padding: 5px 20px;
        color: #666;
        &.active{
          background-color: #1dce7e;
          border-radius: 30px;
          color: #fff;
        }
      }
    }
    .dropdown-btn{
      position: absolute;
      background-color: #fff;
      z-index: 10;
      top: 0;
      right: 0;
      display: inline-block;
      width: 12%;
      height: 90px;
      // border-left: 1px solid #1dce7e;
      &.ignore{
        box-shadow: -10px 0 12px -7px rgba(29,206,126,.9);
      }
    }
  }
  .type-list-box{
    font-size: 0;
    box-sizing: border-box;
    .second-menu{
      display: inline-block;
      vertical-align: top;
      width: 20%;
      box-sizing: border-box;
      // border-right: 1px solid #f4f4f4;
      text-align: center;
      overflow-x: hidden;
      overflow-y: scroll;
      .menu-item{
        padding: 15px 0;
        color: #999;
        &.active{
          color: #333;
          font-weight: bold;
        }
      }
    }
    .product-list{
      display: inline-block;
      vertical-align: top;
      width: 80%;
      overflow-x: hidden;
      overflow-y: scroll;
      .product-item{
        padding: 20px 25px 20px 0;
        .item-box{
          display: -webkit-box;
          .img-box{
            width: 180px;
            height: 180px;
            .img-show{
              width: 180px;
              height: 180px;
            }
          }
          .product-info-box{
            position: relative;
            -webkit-box-flex: 1;
            margin-left: 15px;
            .product-name{
              font-size: 28px;
              font-weight: bold;
              display: -webkit-box;
              overflow: hidden;
              text-overflow: ellipsis;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }
            .price-buy{
              position: absolute;
              left: 0;
              bottom: 0;
              width: 100%;
              display: flex;
              justify-content: space-between;
              align-items: center;
              min-height: 55px;
              .price-item{
                font-weight: bold;
                color: #ff1f1f;
                .symbol{
                  font-size: 24px;
                }
                .price-num{
                  font-size: 28px;
                }
                .unit{
                  color: #999;
                  font-size: 24px;
                }
              }
              .first-count{
                margin-right: 20px;
                width: 50px;
                height: 50px;
                .firstbuy-btn{
                  display: inline-block;
                  width: 50px;
                  height: 50px;
                  background-image: url("../assets/img/shop/add-first.png");
                  background-size: 50px 50px;
                  background-repeat: no-repeat;
                  background-position: center;
                }
              }
              .not-first{
                width: 48%;
                border-radius: 50px;
                border: 1px solid #1dce7e;
                padding: 5px 8px;
                .input-count{
                  width: 42%;
                  height: 40px;
                  text-align: center;
                  font-size: 28px;
                  margin: 0 10px;
                }
                .common{
                  display: inline-block;
                  vertical-align: middle;
                  width: 40px;
                  height: 40px;
                  background-size: 40px 40px;
                  background-repeat: no-repeat;
                  background-position: center;
                }
                .reduce{
                  background-image: url("../assets/img/shop/green-reduce.png");
                }
                .add{
                  background-image: url("../assets/img/shop/green-add.png");
                }
              }
            }
          }
        }
      }
    }
  }
</style>
