<template>
  <div>
    <div class="commonlist-main-container">
      <header class="commonlist-head">
        <p class="head-title">常购清单</p>
        <div class="fav-count">
          <span class="total-text">共</span>
          <span class="total-num">50</span>
          <span class="total-text">件商品</span>
          <span class="edit-btn right-float">编辑</span>
        </div>
      </header>
      <section class="commonlist-content">
        <div class="product-list">
          <div class="product-item clear-float">
              <a class="img-box left-float" href="">
                <img class="img-show" src="/static/index/9.png" alt="产品图片">
              </a>
              <div class="relativeinfo-box right-float">
                <p class="product-name">美味八爪鱼</p>
                <p class="product-desc">美味八爪鱼,味道相当的棒，美味八爪鱼,味道相当的棒，美味八爪鱼,味道相当的棒美味八爪鱼,味道相当的棒，美味八爪鱼,味道相当的棒</p>
                <div class="price-buy-box">
                  <div class="price-item">
                    <span class="symbol">￥</span>
                    <span class="price-num">28.98</span>
                    <span class="unit">/斤</span>
                  </div>
                  <!--第一次购买-->
                  <div class="first-count" style="display:none;"><i class="firstbuy-btn"></i></div>
                  <!--非第一次购买-->
                  <div class="not-first">
                    <span class="reduce common"></span>
                    <input class="input-count" type="number" value="1">
                    <span class="add common"></span>
                  </div>
                </div>
              </div>
          </div>
          <div class="product-item clear-float">
              <a class="img-box left-float" href="">
                <img class="img-show" src="/static/index/9.png" alt="产品图片">
              </a>
              <div class="relativeinfo-box right-float">
                <p class="product-name">美味八爪鱼</p>
                <p class="product-desc">美味八爪鱼,味道相当的棒，美味八爪鱼,味道相当的棒，美味八爪鱼,味道相当的棒美味八爪鱼,味道相当的棒，美味八爪鱼,味道相当的棒</p>
                <div class="price-buy-box">
                  <div class="price-item">
                    <span class="symbol">￥</span>
                    <span class="price-num">28.98</span>
                    <span class="unit">/斤</span>
                  </div>
                  <!--第一次购买-->
                  <div class="first-count" style="display:none;"><i class="firstbuy-btn"></i></div>
                  <!--非第一次购买-->
                  <div class="not-first">
                    <span class="reduce common"></span>
                    <input class="input-count" type="number" value="1">
                    <span class="add common"></span>
                  </div>
                </div>
              </div>
          </div>
          <div class="product-item clear-float">
              <a class="img-box left-float" href="">
                <img class="img-show" src="/static/index/9.png" alt="产品图片">
              </a>
              <div class="relativeinfo-box right-float">
                <p class="product-name">美味八爪鱼</p>
                <p class="product-desc">美味八爪鱼,味道相当的棒，美味八爪鱼,味道相当的棒，美味八爪鱼,味道相当的棒美味八爪鱼,味道相当的棒，美味八爪鱼,味道相当的棒</p>
                <div class="price-buy-box">
                  <div class="price-item">
                    <span class="symbol">￥</span>
                    <span class="price-num">28.98</span>
                    <span class="unit">/斤</span>
                  </div>
                  <!--第一次购买-->
                  <div class="first-count" style="display:none;"><i class="firstbuy-btn"></i></div>
                  <!--非第一次购买-->
                  <div class="not-first">
                    <span class="reduce common"></span>
                    <input class="input-count" type="number" value="1">
                    <span class="add common"></span>
                  </div>
                </div>
              </div>
          </div>
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
  .commonlist-main-container{
    padding-top: 172px;
    .commonlist-head{
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 172px;
      background-color: #fff;
      // border-bottom: 1px solid transparent;
      // border-image: svg(1px-border param(--color #eee)) 1 stretch;
      .head-title{
        text-align: center;
        height: 100px;
        line-height: 100px;
        font-size: 36px;
      }
      .fav-count{
        background-color: #f7f7f7;
        padding: 0 32px;
        line-height: 72px;
        .total-num{
          color: #ff1f1f;
          margin: 0 10px;
        }
      }
    }
    .commonlist-content{
      background-color: #f7f7f7;
      .product-list{
        background-color: #f7f7f7;
        .product-item{
          background-color: #fff;
          margin-bottom: 20px;
          padding: 25px 15px;
          .img-box{
            display: block;
            margin-right: 10px;
            width: 250px;
            height: 250px;
            .img-show{
              width: 250px;
              height: 250px;
            }
          }
          .relativeinfo-box{
            width: 63%;
            padding-left: 15px;
            box-sizing: border-box;
            min-height: 250px;
            border-left: 1px solid #f7f7f7;
            .product-name{
              font-size: 32px;
              min-height: 50px;
            }
            .product-desc{
              margin: 10px 0 15px 0;
              // min-height: 120px;
              color: #999;
              overflow: hidden;
              display: -webkit-box;
              text-overflow: ellipsis;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
            }
            .price-buy-box{
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
                width: 40%;
                border-radius: 50px;
                padding: 5px 8px;
                background-color: #f8f8f8;
                .input-count{
                  width: 42%;
                  height: 40px;
                  text-align: center;
                  font-size: 28px;
                  margin: 0 10px;
                  background-color: #f8f8f8;
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
</style>

