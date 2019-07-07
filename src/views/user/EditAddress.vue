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
        <van-field
          v-model="address"
          center
          size="large"
          clearable
          label="所在区域"
          placeholder="请选择区域"
        >
          <van-button slot="button" size="small" type="primary">选择地区</van-button>
        </van-field>
        <van-field 
          v-model="addressDetail"
          label="详细地址"
          type="textarea"
          placeholder="请输入详细的地址"
          rows="2"
          autosize
        />
        <van-cell title="是否设置为默认地址">
          <van-switch v-model="isDefault" active-color="#00B050" inactive-color="#CBCBCB" size="22px"/>
        </van-cell>
      </van-cell-group>
    </div>

    <!--提交保存-->
    <div id="fixed_part" class="ea-submit-wrap flex-all-center">
      <div class="submit-btn flex-all-center">保存</div>
    </div>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      userName: '', //用户姓名
      telNumber: '', //电话号码
      address: '', //地区区域
      addressDetail: '', //地址详情
      isDefault: false, //是否默认地址
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
    padding-bottom: 150px;
    .common-address{
      border-bottom: 1px solid #f1f1f1;
    }
    .address-name{
      width: 100%;
      box-sizing: border-box;
      padding: 0 32px;
    }
  }
  .ea-submit-wrap{
    position: fixed;
    left: 0;
    bottom: 32px;
    width: 100%;
    .submit-btn{
      width: 60%;
      height: 80px;
      background-color: #1dce7e;
      border-radius: 40px;
      color: #fff;
      font-size: 28px;
    }
  }
</style>
