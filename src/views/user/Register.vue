<template>
  <div>
    <form class="l-form" action="">
      <div class="l-common l-phone">
        <div class="common phone-con">
          <input type="text" placeholder="手机号码">
        </div>
      </div>
      <div class="l-common l-code">
        <div class="common code-con">
          <input type="text" placeholder="验证码">
          <div @click="getCheckCode($event)" class="getcode-btn getcode">获取验证码</div>
        </div>
      </div>
      <div class="l-common l-invitecode">
        <div class="common invitecode-con">
          <input type="text" placeholder="邀请码">
        </div>
      </div>
      <div class="l-common l-upwd">
        <div class="common upwd-con">
          <input type="password" placeholder="密码">
        </div>
      </div>
      <div class="l-common l-protocol">
        <div class="common protocol-con">
          <input style="position:absolute; left: 0; top: 0; visibility: hidden;" type="checkbox" value="注册" :checked="isAgreePoliy">
          <em @click="handleSelectPolicy()" :class="{'check-btn': true, selected: isAgreePoliy}"></em>
          <span class="part-one">我已阅读并同意</span>
          <span class="part-two"><a href="">《注册协议》</a></span>
        </div>
      </div>
      <div class="l-common l-loginbtn">
        <div :class="{'common loginbtn-con regbtn-con': true, active: isAgreePoliy}">
          <input style="-webkit-appearance: none;" type="button" value="注册">
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
export default {
  data: function(){
    return {
      isShowTimeCount: false,
      isAgreePoliy: false
    }
  },
  methods: {
    getCheckCode: function(e){ //获取验证码
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
    handleSelectPolicy: function(){ //是否同意协议
      this.isAgreePoliy = this.isAgreePoliy === false ? true : false;
    }
  }
}
</script>

<style lang="scss" src="@/assets/sass/user.scss"></style>