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
        <li @click="handleFirstOrder(1)" :class="{'navmenu-item': true, 'active': firstOrderTag === 1}">活鲜水产</li>
        <li @click="handleFirstOrder(2)" :class="{'navmenu-item': true, 'active': firstOrderTag === 2}">冷冻食材</li>
        <li @click="handleFirstOrder(3)" :class="{'navmenu-item': true, 'active': firstOrderTag === 3}">粮油干调</li>
        <li @click="handleFirstOrder(4)" :class="{'navmenu-item': true, 'active': firstOrderTag === 4}">蔬菜水果</li>
        <li @click="handleFirstOrder(5)" :class="{'navmenu-item': true, 'active': firstOrderTag === 5}">鲜花野味</li>
        <li @click="handleFirstOrder(6)" :class="{'navmenu-item': true, 'active': firstOrderTag === 6}">珍品</li>
      </ul>
      <div class="dropdown-btn ignore"><em class="btn-icon" v-on:click="showCategory()"></em></div>
    </div>
    <!--二级菜单和产品详情-->
    <div class="type-list-box">
      <ul v-if="firstOrderTag === 1" class="second-menu" :style="{ height: listHeight + 'px' }">
        <li @click="handleSecondOrder(1, 1)" :class="{'menu-item': true, 'active': secondOriderTag === 1}">鱼</li>
        <li @click="handleSecondOrder(1, 2)" :class="{'menu-item': true, 'active': secondOriderTag === 2}">虾</li>
        <li @click="handleSecondOrder(1, 3)" :class="{'menu-item': true, 'active': secondOriderTag === 3}">蟹</li>
        <li @click="handleSecondOrder(1, 4)" :class="{'menu-item': true, 'active': secondOriderTag === 4}">贝</li>
      </ul>
      <ul v-if="firstOrderTag === 2" class="second-menu" :style="{ height: listHeight + 'px' }">
        <li @click="handleSecondOrder(2, 1)" :class="{'menu-item': true, 'active': secondOriderTag === 1}">猪</li>
        <li @click="handleSecondOrder(2, 2)" :class="{'menu-item': true, 'active': secondOriderTag === 2}">鸭</li>
        <li @click="handleSecondOrder(2, 3)" :class="{'menu-item': true, 'active': secondOriderTag === 3}">鱼</li>
        <li @click="handleSecondOrder(2, 4)" :class="{'menu-item': true, 'active': secondOriderTag === 4}">虾</li>
        <li @click="handleSecondOrder(2, 5)" :class="{'menu-item': true, 'active': secondOriderTag === 5}">鹅</li>
      </ul>
      <ul v-if="firstOrderTag === 3" class="second-menu" :style="{ height: listHeight + 'px' }">
        <li @click="handleSecondOrder(3, 1)" :class="{'menu-item': true, 'active': secondOriderTag === 1}">香料</li>
        <li @click="handleSecondOrder(3, 2)" :class="{'menu-item': true, 'active': secondOriderTag === 2}">调味品</li>
      </ul>
      <ul v-if="firstOrderTag === 4" class="second-menu" :style="{ height: listHeight + 'px' }">
        <li @click="handleSecondOrder(4, 1)" :class="{'menu-item': true, 'active': secondOriderTag === 1}">蔬菜</li>
        <li @click="handleSecondOrder(4, 2)" :class="{'menu-item': true, 'active': secondOriderTag === 2}">水果</li>
      </ul>
      <ul v-if="firstOrderTag === 5" class="second-menu" :style="{ height: listHeight + 'px' }">
        <li @click="handleSecondOrder(5, 1)" :class="{'menu-item': true, 'active': secondOriderTag === 1}">鲜花</li>
        <li @click="handleSecondOrder(5, 2)" :class="{'menu-item': true, 'active': secondOriderTag === 2}">野味</li>
      </ul>
      <ul v-if="firstOrderTag === 6" class="second-menu" :style="{ height: listHeight + 'px' }">
        <li @click="handleSecondOrder(6, 1)" :class="{'menu-item': true, 'active': secondOriderTag === 1}">补品</li>
      </ul>

      <ul v-if="typeItemData !== null" class="product-list" :style="{ height: listHeight + 'px' }">
        <li @click="skipToDetail(item.pid)" v-for="item in typeItemData" :key="item.pid" class="product-item">
          <div class="item-box">
            <div class="img-box"><img class="img-show" :src="item.product_img" alt="产品图"></div>
            <div class="product-info-box">
              <p class="product-name">{{ item.name }}</p>
              <div class="price-buy">
                <div class="price-item">
                  <span class="symbol">￥</span>
                  <span class="price">{{ item.price.toFixed(2) }}</span>
                  <span class="unit">/{{ item.unit }}</span>
                </div>
                <!--第一次购买-->
                <div v-if="false" class="first-count"><i class="firstbuy-btn"></i></div>
                <!--非第一次购买-->
                <div v-if="true" class="not-first" >
                  <span class="reduce common"></span>
                  <input class="input-count" type="number" value="1">
                  <span class="add common"></span>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li v-if="typeItemData.length === 0" class="default-wrap">
          <img class="default-img" src="../assets/img/common/default.png">
          <p class="default-txt">亲，暂时没有内容哟~</p>
        </li>
      </ul>
    </div>

    <!--模态窗口-->
    <div :class="{'modalbox-menu': true, active: isShowCategory}" @click="hideCategory()">
      <div class="modaldialog-menu">
        <div class="title-box">
          <p class="title">请选择具体分类</p>
          <em class="arrow-btn"></em>
        </div>
        <ul class="category-name-box" @click.stop>
          <li class="name-item"><span @click="handleFirstOrder(1)" :class="{'item': true, 'active': firstOrderTag === 1}">活鲜水产</span></li>
          <li class="name-item"><span @click="handleFirstOrder(2)" :class="{'item': true, 'active': firstOrderTag === 2}">冷冻食材</span></li>
          <li class="name-item"><span @click="handleFirstOrder(3)" :class="{'item': true, 'active': firstOrderTag === 3}">粮油干调</span></li>
          <li class="name-item"><span @click="handleFirstOrder(4)" :class="{'item': true, 'active': firstOrderTag === 4}">蔬菜水果</span></li>
          <li class="name-item"><span @click="handleFirstOrder(5)" :class="{'item': true, 'active': firstOrderTag === 5}">鲜花野味</span></li>
          <li class="name-item"><span @click="handleFirstOrder(6)" :class="{'item': true, 'active': firstOrderTag === 6}">珍品</span></li>
        </ul>
      </div>
    </div>
    <foot-part></foot-part>
  </div>
</template>

<script>
import api from '../api/api.js';

export default {
  data: function() {
    return {
      listHeight: 0, // 中间内容高度
      isShowCategory: false, // 是否显示第一级蒙版菜单

      firstOrderTag: 1, // 一级菜单点击标记
      secondOriderTag: 1, // 二级菜单点击标记

      typeItemData: null, // 产品数据
    }
  },
  mounted: function() {
    this.getTypeData();
    //计算中间部分的高度
    this.listHeight = window.innerHeight - document.querySelector(".type-function-box").offsetHeight - 
      document.querySelector(".type-navmenu-box").offsetHeight - document.querySelector(".footer-container").offsetHeight -
      parseFloat(window.getComputedStyle(document.querySelector(".type-navmenu-box")).marginBottom);
  },
  watch: {
    firstOrderTag() {
      this.getTypeData();
    }
  },
  methods: {
    // 跳转到产品详情
    skipToDetail(value) {
      this.$router.push({path: '/productdetail', query: {pid: value}});
    },
    // 点击一级菜单选项
    handleFirstOrder(value) {
      this.firstOrderTag = value;
      this.secondOriderTag = 1;
    },
    // 点击二级菜单选项 
    handleSecondOrder(value, item) {
      this.firstOrderTag = value;
      this.secondOriderTag = item;
      this.getTypeData();
    },
    // 获取列表数据
    getTypeData() {
      this.$loadding.open();
      let params = {params: {
        firstID: this.firstOrderTag,
        secondID: this.secondOriderTag
      }};
      api.getType(params).then((res) => {
        console.log(res);
        this.$loadding.close();
        this.typeItemData = res.data.data;
        console.log(this.typeItemData)
      }).catch((err) => {
        this.$loadding.close();
        console.log(err);
      })
    },
    // 显示分类模态窗口
    showCategory: function() {
      this.isShowCategory = !this.isShowCategory;
    },
    // 隐藏分类模态窗口
    hideCategory: function() {
      this.isShowCategory = !this.isShowCategory;
    },
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
      width: 14%;
      box-sizing: border-box;
      border-right: 1px solid #f4f4f4;
      text-align: center;
      overflow-x: hidden;
      overflow-y: scroll;
      .menu-item{
        padding: 15px 0;
        color: #999;
        font-size: 26px;
        &.active{
          color: #333;
          font-weight: bold;
        }
      }
    }
    .product-list{
      display: inline-block;
      vertical-align: top;
      width: 86%;
      overflow-x: hidden;
      overflow-y: scroll;
      .product-item{
        padding: 20px 25px 20px 25px;
        box-sizing: border-box;
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
                .price{
                  font-size: 26px;
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
                  vertical-align: middle;
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

  .default-wrap {
    text-align: center;
    .default-img {
      margin-top: 32px;
      width: 146px;
      height: 198px;
    }
    .default-txt {
      font-size: 32px;
      font-family: PingFangSC;
      font-weight: 400;
      color: #ccc;
      line-height: 44px;
      margin-top: 20px;
    }
  }
</style>
