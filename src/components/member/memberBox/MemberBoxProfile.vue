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
          <input type="text" value="皮卡丘" disabled />
        </div>
        <div class="member-info">
          <label for="生日" name="生日">生日:</label>
          <input type="date" value="1995-11-11" disabled />
        </div>
        <div class="member-info">
          <label for="電話" name="電話">電話:</label>
          <input
            type="tel"
            value="0987-878878"
            pattern="[0-9]{4}-[0-9]{6}"
            disabled
          />
        </div>
        <div class="member-info">
          <label for="地址" name="地址">地址:</label>
          <input type="text" value="不提供" disabled />
        </div>
        <div class="member-info">
          <label for="email" name="email">Email:</label>
          <input type="email" value="pikapika@gmail.com" disabled />
        </div>
        <div class="member-info">
          <label for="密碼" name="密碼">密碼:</label>
          <input type="password" value="y*********" disabled />
        </div>
      </div>
      <div class="member-profile-right">
        <div class="profile-img">
          <img
            src="../../../assets/image/member/profile-pika.png"
            alt="profile-pika"
          />
        </div>
        <div class="profile-btn">
          <button><router-link to="/profile-edit">編輯</router-link></button>
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
  justify-content: center;
  align-items: center;
  margin-top: 80px;
}
.member-profile-left {
  color: #fff;
}
.member-profile-left input {
  color: #fff;
  background-color: initial;
  border: none;
  font-size: 1rem;
  margin-left: 20px;
  width: 180px;
}
.member-info {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 25px;
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

.profile-btn button {
  border: 2px solid #e6dfc7;
  border-radius: 5px;
  background-color: initial;
  padding: 5px 35px;
}
.profile-btn a {
  text-decoration: none;
  color: #e6dfc7;
}
</style>
