<template>
  <div>
    <div class="l-welcome">
      <div class="welcome-title">Welcome</div>
    </div>
    <form class="l-form" action="">
      <div class="l-common l-account">
        <div class="common account-con">
          <input type="text" placeholder="账号">
        </div>
      </div>
      <div class="l-common l-upwd">
        <div class="common upwd-con">
          <input type="password" placeholder="密码">
        </div>
      </div>
      <div class="l-common l-loginbtn">
        <div class="common loginbtn-con">
          <input style="-webkit-appearance: none;" type="button" value="登录">
        </div>
      </div>
      <div class="l-common l-link">
        <div class="link-con">
          <span class="l-reg"><router-link to="/register">注册账户</router-link></span>
          <span class="l-line"></span>
          <span class="l-ret"><router-link to="/retrieve">找回密码</router-link></span>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" src="@/assets/sass/user.scss"></style>
