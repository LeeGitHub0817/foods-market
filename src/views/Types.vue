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
          <a class="item-box" href="javascript:(void)">
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
                <div class="first-count" style="display:none;"><i class="firstbuy-btn"></i></div>
                <!--非第一次购买-->
                <div class="not-first" >
                  <span class="reduce common"></span>
                  <input class="input-count" type="number" value="1">
                  <span class="add common"></span>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li class="product-item">
          <a class="item-box" href="javascript:(void)">
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
                <div class="first-count" style="display:none;"><i class="firstbuy-btn"></i></div>
                <!--非第一次购买-->
                <div class="not-first" >
                  <span class="reduce common"></span>
                  <input class="input-count" type="number" value="1">
                  <span class="add common"></span>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li class="product-item">
          <a class="item-box" href="javascript:(void)">
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
                <div class="first-count" style="display:none;"><i class="firstbuy-btn"></i></div>
                <!--非第一次购买-->
                <div class="not-first" >
                  <span class="reduce common"></span>
                  <input class="input-count" type="number" value="1">
                  <span class="add common"></span>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li class="product-item">
          <a class="item-box" href="javascript:(void)">
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
                <div class="first-count" style="display:none;"><i class="firstbuy-btn"></i></div>
                <!--非第一次购买-->
                <div class="not-first" >
                  <span class="reduce common"></span>
                  <input class="input-count" type="number" value="1">
                  <span class="add common"></span>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li class="product-item">
          <a class="item-box" href="javascript:(void)">
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
                <div class="first-count" style="display:none;"><i class="firstbuy-btn"></i></div>
                <!--非第一次购买-->
                <div class="not-first" >
                  <span class="reduce common"></span>
                  <input class="input-count" type="number" value="1">
                  <span class="add common"></span>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li class="product-item">
          <a class="item-box" href="javascript:(void)">
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
                <div class="first-count" style="display:none;"><i class="firstbuy-btn"></i></div>
                <!--非第一次购买-->
                <div class="not-first" >
                  <span class="reduce common"></span>
                  <input class="input-count" type="number" value="1">
                  <span class="add common"></span>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li class="product-item">
          <a class="item-box" href="javascript:(void)">
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
                <div class="first-count" style="display:none;"><i class="firstbuy-btn"></i></div>
                <!--非第一次购买-->
                <div class="not-first" >
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

    <!--模态窗口-->
    <div :class="{'modalbox-menu': true, active: true}">
      <div class="modaldialog-menu">
        <div class="title-box">
          <p class="title">请选择具体分类</p>
          <em class="arrow-btn"></em>
        </div>
        <ul class="category-name-box">
          <li class="name-item"><span class="item active">活鲜水产</span></li>
          <li class="name-item"><span class="item">冷冻食材</span></li>
          <li class="name-item"><span class="item">粮油干调</span></li>
          <li class="name-item"><span class="item">蔬菜水果</span></li>
          <li class="name-item"><span class="item">新鲜肉禽</span></li>
          <li class="name-item"><span class="item">活鲜水产</span></li>
          <li class="name-item"><span class="item">酒水茶叶</span></li>
          <li class="name-item"><span class="item">珍品</span></li>
        </ul>
      </div>
    </div>
    <foot-part></foot-part>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      listHeight: 0 //中间内容高度
      isShowCategory: false
    }
  },
  methods: {
    //显示分类模态窗口
    showCategory: function(){

    }
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
      &.ignore{
        box-shadow: -10px 0 12px -7px rgba(29,206,126,.9);
      }
      .btn-icon{
        display: block;
        width: 100%;
        height: 90px;
        background-image: url("../assets/img/shop/arrow-down.png");
        background-position: center;
        background-size: 40px;
        background-repeat: no-repeat;
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
                width: 47%;
                border-radius: 50px;
                padding: 5px 8px;
                background-color: #f8f8f8;
                .input-count{
                  width: 32%;
                  height: 40px;
                  text-align: center;
                  font-size: 28px;
                  background-color: #f8f8f8;
                  margin: 0 10px;
                }
                .common{
                  display: inline-block;
                  vertical-align: middle;
                  width: 50px;
                  height: 50px;
                  background-size: 50px 50px;
                  background-repeat: no-repeat;
                  background-position: center;
                }
                .reduce{
                  background-image: url("../assets/img/shop/m-reduce.png");
                }
                .add{
                  background-image: url("../assets/img/shop/m-add.png");
                }
              }
            }
          }
        }
      }
    }
  }

  .modalbox-menu{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: none;
    z-index: 19;
    &.active{
      display: block;
    }
    .modaldialog-menu{
      position: absolute;
      top: 120px;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba($color: #000000, $alpha: 0.5);
      z-index: 20;
      .title-box{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;
        height: 90px;
        .title{
          font-size: 28px;
          color: #666;
          padding-left: 32px;
        }
        .arrow-btn{
          display: block;
          width: 12%;
          height: 90px;
          background-image: url("../assets/img/shop/arrow-up.png");
          background-position: center;
          background-size: 40px;
          background-repeat: no-repeat;
        }
      }
      .category-name-box{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        background-color: #fff;
        padding: 15px 40px 40px 40px;
        .name-item{
          width: 33%;
          text-align: center;
          margin-bottom: 25px;
          .item{
            display: inline-block;
            background-color: #ebebeb;
            color: #333;
            width: 80%;
            padding: 13px 0;
            border-radius: 40px;
            &.active{
              color: #fff;
              background-color: #1dce7e;
            }
          }
        }
      }
    }
  }
</style>
