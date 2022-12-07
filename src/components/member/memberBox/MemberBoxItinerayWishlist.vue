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
        <span>行程蒐藏</span>
      </div>
      <div class="left-angle">&lt;&lt;&lt;&lt;&lt;&lt;&lt;</div>
      <div class="member-box-img">
        <img
          src="../../../assets/image/member/member-box-corner.png"
          alt="member-box-corner"
        />
      </div>
    </div>
    <MemberItinerayWishlistCard v-for="card in cards" :key="card.id">

      

    </MemberItinerayWishlistCard>
    <!-- <div class="pagination-container">
      <ul class="pagination">
        <li class="page-item">1</li>
        <li class="page-item">2</li>
        <li class="page-item">3</li>
        <li class="page-item">4</li>
        <li class="page-item">5</li>
      </ul>
    </div> -->
  </div>
</template>

<script>
import MemberItinerayWishlistCard from "../MemberItinerayWishlistCard.vue";
export default {
  name: "MemberBoxItinerayWishlist",
  components: "MemberItinerayWishlistCard",
  data() {
    return {
      cards: [{ id: 1 }, { id: 2 }, { id: 3 }],
    };
  },
};
</script>

<style lang="scss" scoped>
.member-box {
  position: relative;
  border: 2px solid #e6dfc7;
  width: 50%;
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

// member-box-upper
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffe1b5;
}
.page-item {
  border: 1px solid #ffe1b5;
  padding: 10px;
}
.page-item:first-child {
  color: #313131;
  background-color: #ffe1b5;
}
</style>
