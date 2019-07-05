<template>
  <div>
    <form class="l-form" action="">
      <div class="l-common l-phone">
        <div class="common phone-con">
          <input @blur="checkTelNum" v-model="formData.telNumber" type="number" placeholder="手机号码">
        </div>
      </div>
      <div class="l-common l-code">
        <div class="common code-con">
          <input disabled type="text" placeholder="验证码暂时不启用">
          <div v-if="false" @click="getCheckCode($event)" class="getcode-btn getcode">获取验证码</div>
        </div>
      </div>
      <div class="l-common l-invitecode">
        <div class="common invitecode-con">
          <input disabled type="text" placeholder="邀请码暂时不启用">
        </div>
      </div>
      <div class="l-common l-upwd">
        <div class="common upwd-con">
          <input v-model="formData.upwd" type="password" placeholder="密码">
        </div>
      </div>
      <div class="l-common l-protocol">
        <div class="common protocol-con">
          <input style="position:absolute; left: 0; top: 0; visibility: hidden;" type="checkbox" value="注册" :checked="isAgreePoliy">
          <em @click="handleSelectPolicy" :class="{'check-btn': true, selected: isAgreePoliy}"></em>
          <span class="part-one">我已阅读并同意</span>
          <span class="part-two"><a href="">《注册协议》</a></span>
        </div>
      </div>
      <div class="l-common l-loginbtn">
        <div :class="{'common loginbtn-con regbtn-con': true, active: isAgreePoliy}">
          <input @click="submit" style="-webkit-appearance: none;" type="button" value="注册">
        </div>
      </div>
      <div class="l-common l-link">
        <div class="link-con">
          <span class="l-reg"><router-link to="/login">账号登录</router-link></span>
          <span class="l-line"></span>
          <span class="l-ret"><router-link to="/retrieve">找回密码</router-link></span>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import api from '../../api/api';
import { Toast } from 'vant';

export default {
  data: function(){
    return {
      isShowTimeCount: false, //是否显示验证码倒计时
      isAgreePoliy: false, //是否同意协议
      isTelNumUsed: false, //电话号码是否注册过
      
      //要提交的表单数据
      formData: {
        telNumber: '', //电话号码
        upwd: '' //密码
      }
    }
  },
  methods: {
    //获取验证码
    getCheckCode: function(e){
      var curTarget = e.target;
      var time = 60;
      // curTarget.classList.add("countdown");
      // curTarget.classList.remove("getcode");
      this.isShowTimeCount = true;
      curTarget.textContent = time + " s";
      var timer = setInterval(()=>{
        time -= 1;
        curTarget.textContent = time + " s";
        if(time <= 0){
          clearInterval(timer);
          curTarget.textContent = "获取验证码";
          this.isShowTimeCount = false;
        }
      }, 1000);
    },
    //是否同意协议
    handleSelectPolicy: function(){
      this.isAgreePoliy = this.isAgreePoliy === false ? true : false;
    },
    //验证手机号码是否注册过
    checkTelNum(){
      if(/^1[356789]\d{9}$/.test(this.formData.telNumber) == false){
        Toast('请输入正确的手机号码！');
        return;
      }
      api.checkPhoneNum({telNumber: this.formData.telNumber}).then((res) => {
        console.log(res);
        //手机号码可用
        if(res.data.data.status == true){
          this.isTelNumUsed = false;
          Toast(res.data.data.msg);
        }else{ //手机号码不可用
          this.isTelNumUsed = true;
          Toast(res.data.data.msg);
        }
      })
    },
    //提交注册
    submit(){
      //提交数据前的初次验证
      if(/^1[356789]\d{9}$/.test(this.formData.telNumber) == false){
        Toast('请输入正确的手机号码！');
        return;
      }
      if(this.formData.upwd.length < 6){
        Toast('输入的密码需要大于6位！');
        return;
      }
      if(this.isTelNumUsed == true){
        Toast('该手机号码已经注册过，请跟换手机号后重试！');
        return;
      }
      //调用接口
      api.userRegister(this.formData).then((res) => {
        console.log(res)
        if(res.data.data.status == true){
          Toast(res.data.data.msg);
        }else{
          Toast(res.data.data.msg);
        }
      }).catch((err) => {
        Toast('注册失败，请检查网络后再试！');
      })
    }
  }
}
</script>

<style lang="scss" src="@/assets/sass/user.scss"></style>