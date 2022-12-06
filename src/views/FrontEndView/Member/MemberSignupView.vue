<template>
  <all-header />
  <innerpageHeader />
  <div class="container">
    <the-heading heading="會員中心" subheading="Member"></the-heading>
  </div>
  <div class="container-signup">
    <div class="upper-color"></div>
    <h2>註冊</h2>
    <form class="login">
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="密碼" required />
      <input
        type="password"
        class="password-confirm"
        placeholder="確認密碼"
        required
      />
      <div class="btn">
        <router-link to="/profile/info"
          ><button class="btn-signup">確認註冊</button></router-link
        >
      </div>
    </form>
  </div>
  <all-footer />
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container-signup,
.container-signup h2,
input {
  border: 3px solid #e6dfc7;
}
.container-signup {
  width: 400px;
  margin: 150px auto;
  text-align: center;
  background-color: #313131;
  border-radius: 3px;
  position: relative;
}
.container-signup .upper-color {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #e6dfc7;
  height: 20px;
  width: 100%;
}
.container-signup h2 {
  display: inline-block;
  color: #e6dfc7;
  padding: 10px 40px;
  margin: 40px 20px;
  border-radius: 5px;
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
.password-confirm {
  margin-bottom: 40px;
}
button {
  display: block;
  margin: 0 auto;
  padding: 10px;
  width: 120px;
  border-radius: 10px;
  margin-bottom: 40px;
  cursor: pointer;
  background-color: #fab042;
  color: #1e1e1e;
  border-left: none;
  border-top: none;
}
a {
  text-decoration: none;
}
</style>
