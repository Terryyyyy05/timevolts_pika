<template>
  <div class="container">
    <div class="upper-color"></div>
    <h2>登入</h2>
    <form class="login">
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="密碼" required />
      <div class="forgot-password">
        <a href="#"><span>忘記密碼</span></a>
      </div>
      <div class="btn">
        <router-link to="/profile"
          ><button class="btn-login">登入</button></router-link
        >
        <router-link to="/signup"
          ><button class="btn-signup">註冊會員</button></router-link
        >
      </div>
    </form>
  </div>
</template>

<script>
// export default {};
</script>

<style lang="scss" scoped>
.container,
.container h2,
input {
  border: 3px solid #e6dfc7;
}
.container {
  width: 400px;
  margin: 150px auto;
  text-align: center;
  background-color: #313131;
  border-radius: 3px;
  position: relative;
}
.container .upper-color {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #e6dfc7;
  height: 20px;
  width: 100%;
}
.container h2 {
  display: inline-block;
  color: #e6dfc7;
  padding: 10px 40px;
  margin: 40px 20px;
  border-radius: 5px;
}

.login {
  margin-bottom: 40px;
}

input {
  color: #fff;
  background-color: inherit;
  display: block;
  margin: 0 auto;
  width: 80%;
  padding: 10px;
  font-size: 1rem;
  box-sizing: border-box;
}
input[type="email"] {
  border-radius: 5px 5px 0 0;
}
input[type="password"] {
  border-radius: 0 0 5px 5px;
}
.forgot-password {
  width: 80%;
  text-align: right;
  margin: 0 auto;
}
.forgot-password span {
  color: #838383;
  font-size: 0.9rem;
  display: inline-block;
  margin: 10px 0;
}
button {
  display: block;
  margin: 0 auto;
  padding: 10px;
  width: 120px;
  border-radius: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  border-left: none;
  border-top: none;
}
.btn-login {
  background-color: #fab042;
  color: #1e1e1e;
}
a {
  text-decoration: none;
}
.btn-signup {
  background-color: initial;
  color: #fab042;
  border: 3px solid #fab042;
}
</style>
