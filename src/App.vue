<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  /***公共通用样式***/
  body{
    font-family: 'Helvetica Neue', 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased; /*去除锯齿*/
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0); /*移动端手指触摸是反馈的背景颜色，此处设置无*/
  }
  body,div,span,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,address,code,del,em,dl,dt,dd,ol,ul,li,input,fieldset,form,legend,
  caption,tbody,tfoot,thead,article,aside,figure,footer,header,nav,
  section {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
  }
  img{
    border: 0;
  }
  ul{
    list-style-type: none;
  }
  a{
    text-decoration: none;
    color: #333;
  }
  input{
    border: 0;
    outline: 0;
    -webkit-appearance: none;
  }
  .clear-float::after{
    display: block;
    content: "";
    clear: both;
  }
  .left-float{
    float: left;
  }
  .right-float{
    float: right;
  }
  .clear-flow::before{
    display: table;
    content: "";
  }
  .medium-font-500{
    font-family:PingFangSC-Medium;
    font-weight:500;
  }
  .regular-font-400{
    font-family:PingFangSC-Regular;
    font-weight:400;
  }
  .semibold-font-600{
    font-family:PingFangSC-Semibold;
    font-weight:600;
  }
  /*单行省略号--这个记得给容器一个固定宽度*/
  .oneline-ellipsis{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  /*多行省略号--这个记得给容器加一个属性-webkit-line-clamp: 2，表示要显示多少行，适用于webkkit内核浏览器*/
  .multiline-ellipsis{
    display: -webkit-box;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-box-orient: vertical;
  }
  /*使用的弹性布局*/
  .flex-all-center{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .flex-between-center{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .flex-start-center{
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .flex-around-center{
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  /*公告背景色*/
  .common-bac{
    background-color: #F1F4F7;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -10;
  }
</style>
