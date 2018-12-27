<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  /***公共通用样式***/
  body{
    font-family: "Microsoft YaHei", 'Avenir', Helvetica, Arial, sans-serif;
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
    font-size: 26px;
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
  .clear-float:after{
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
  .clear-flow:before{
    display: table;
    content: "";
  }
</style>
