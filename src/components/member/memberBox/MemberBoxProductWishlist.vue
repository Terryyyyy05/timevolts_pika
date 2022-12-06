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
        <span>商品蒐藏</span>
      </div>
      <div class="left-angle">&lt;&lt;&lt;&lt;&lt;&lt;&lt;</div>
      <div class="member-box-img">
        <img
          src="../../../assets/image/member/member-box-corner.png"
          alt="member-box-corner"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MemberBoxProductWishlist",
};
</script>

<style lang="scss" scoped>
.member-box {
  position: relative;
  border: 2px solid #e6dfc7;
  width: 60%;
  margin: 50px auto 100px;
  height: 50vh;
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
</style>
