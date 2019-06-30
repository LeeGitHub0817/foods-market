<template>
  <div class="all-wrap">
    <div class="head-wrap">
      <head-com :titleHead="'编辑地址'"></head-com>
    </div>
    <div class="address-main">
      <van-cell-group>
            <van-field
              v-model="userName"
              size="large"
              clearable
              label="姓名"
              placeholder="请输入真实姓名"
            />
            <van-field
              v-model="telNumber"
              size="large"
              clearable
              label="电话号码"
              placeholder="请输入电话号码"
            />
        
      </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      userName: '', //用户姓名
      telNumber: '', //电话号码
    }
  }
}
</script>

<style lang="scss">
  .all-wrap{
    background-color: #F1F4F7;
  }
  .head-wrap{
    height: 100px;
  }
  .address-main{
    margin-top: 24px;
    background-color: #fff;
    .common-address{
      border-bottom: 1px solid #f1f1f1;
    }
    .address-name{
      width: 100%;
      box-sizing: border-box;
      padding: 0 32px;
    }
  }
</style>
