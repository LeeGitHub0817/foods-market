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
          <div @click="getCheckCode($event)" :class="{'getcode-btn': true, getcode: !isShowTimeCount, countdown: isShowTimeCount}">获取验证码</div>
        </div>
      </div>
      <div class="l-common l-upwd">
        <div class="common upwd-con">
          <input type="password" placeholder="密码">
        </div>
      </div>
      <div class="l-common l-loginbtn">
        <div class="common loginbtn-con">
          <input style="-webkit-appearance: none;" type="button" value="确定并登录">
        </div>
      </div>
      <div class="l-common l-link">
        <div class="link-con">
          <span class="l-reg"><router-link to="/login">账号登录</router-link></span>
          <span class="l-line"></span>
          <span class="l-ret"><router-link to="/register">注册账户</router-link></span>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      isShowTimeCount: false //用来判断是否点击了获取验证码
    }
  },
  methods: {
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
    }
  }
}
</script>

<style lang="scss" src="../assets/sass/user.scss"></style>