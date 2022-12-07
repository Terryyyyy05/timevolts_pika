<template>
  <div class="member-box">
    <div class="member-box-upper">
      <div class="member-box-img">
        <img
          src="../../../assets/image/member/member-box-corner.png"
          alt="member-box-corner"
        />
      </div>
      <div class="right-angle">&gt;&gt;&gt;&gt;&gt;&gt;&gt;</div>
      <div class="member-data">
        <span>會員資料</span>
      </div>
      <div class="left-angle">&lt;&lt;&lt;&lt;&lt;&lt;&lt;</div>
      <div class="member-box-img">
        <img
          src="../../../assets/image/member/member-box-corner.png"
          alt="member-box-corner"
        />
      </div>
    </div>
    <section class="profile">
      <div class="member-profile-left">
        <div class="member-info">
          <label for="姓名" name="姓名">姓名:</label>
          <input type="text" value="王大壯" />
        </div>
        <div class="member-info">
          <label for="生日" name="生日">生日:</label>
          <input type="date" value="1995-11-11" />
        </div>
        <div class="member-info">
          <label for="電話" name="電話">電話:</label>
          <input type="tel" value="0987-878878" pattern="[0-9]{4}-[0-9]{6}" />
        </div>
        <div class="member-info">
          <label for="地址" name="地址">地址:</label>
          <input type="text" value="不提供" />
        </div>
        <div class="member-info">
          <label for="email" name="email">Email:</label>
          <input type="email" value="pikapika@gmail.com" />
        </div>
        <div class="member-info">
          <label for="舊密碼" name="舊密碼">舊密碼:</label>
          <input type="password" value="pikapika@gmail.com" />
        </div>
        <div class="member-info">
          <label for="新密碼" name="新密碼">新密碼:</label>
          <input type="password" value="********" />
        </div>
        <div class="member-info">
          <label for="新密碼" name="新密碼">新密碼:</label>
          <input type="password" value="********" />
        </div>
      </div>
      <div class="member-profile-right">
        <div class="profile-img">
          <img
            src="../../../assets/image/member/profile-change-img.png"
            alt="profile-pika"
          />
        </div>
        <div class="profile-btn">
          <router-link to="/profile"><button class="btn-cancel">取消</button></router-link>
          <router-link to="/profile"><button class="btn-save">儲存</button></router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "MemberBoxProfile",
};
</script>

<style lang="scss" scoped>
.member-box {
  position: relative;
  border: 2px solid #e6dfc7;
  width: 50%;
  margin: 50px auto 100px;
  height: 65vh;
  left: 5%;
}
.member-box-upper {
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #e6dfc7;
}
.member-box-img {
  padding: 10px;
  border-right: 2px solid #e6dfc7;
  border-bottom: 2px solid #e6dfc7;
}
.member-box-img img {
  height: 20px;
  vertical-align: top;
}
.right-angle,
.member-data,
.left-angle {
  display: flex;
  align-items: center;
}
.right-angle,
.left-angle {
  color: #fec570;
}
.member-box-img:last-child {
  border-right: initial;
  border-left: 2px solid #e6dfc7;
}
.member-data {
  color: #313131;
}
.member-data span {
  background-color: #e6dfc7;
  padding: 5px 20px;
}

// member-box-upper
.profile {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 80px;
}
.member-profile-left {
  color: #fff;
}
.member-profile-left input {
  color: #fff;
  background-color: #333333;
  border: none;
  font-size: 1rem;
  margin-left: 20px;
  width: 180px;
  padding: 5px;
}
.member-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
// member-profile-left

.member-profile-right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.profile-img {
  width: 70%;
  margin-bottom: 20px;
}
.profile-img img {
  width: 100%;
}
.profile-btn {
  display: flex;
  flex-direction: column;
}
.profile-btn button {
  padding: 5px 35px;
  border-radius: 5px;
  cursor: pointer;
}
.btn-cancel {
  background-color: initial;
  color: #e6dfc7;
  border: 2px solid #e6dfc7;
  margin-bottom: 20px;
}
.btn-save {
  color: #1e1e1e;
  background-color: #FAB042;
  border: 2px solid #FAB042;
}
</style>
