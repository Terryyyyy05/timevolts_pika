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
    <div class="product-card-container">
      <MemberProductWishlistCard v-for="card in cards" :key="card.id">
        <div class="product-card">
          <div class="img">
            <img
              src="../../../assets/image/member/translator.png"
              alt="crusade"
            />
          </div>
          <div class="content">
            <p>翻譯蒟蒻</p>
            <p>&#36;9&#44;000</p>
          </div>
          <div class="trash-can">
            <font-awesome-icon
              icon="fa-solid fa-trash-can"
              color="#FFE1B5"
              cursor="pointer"
            ></font-awesome-icon>
          </div>
        </div>
      </MemberProductWishlistCard>
    </div>
    <div class="pagination-container">
      <ul class="pagination">
        <li class="page-item">1</li>
        <li class="page-item">2</li>
        <li class="page-item">3</li>
        <li class="page-item">4</li>
        <li class="page-item">5</li>
      </ul>
    </div>
  </div>
</template>

<script>
import MemberProductWishlistCard from "../MemberProductWishlistCard.vue";
export default {
  name: "MemberProductWishlist",
  components: "MemberProductWishlistCard",
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
.product-card-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 35px auto;
}

.product-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid #ffe1b5;
  width: 80%;
  margin: 20px;
  border-top-left-radius: 25%;
  position: relative;
}
.product-card::after {
  content: "";
  position: absolute;
  top: -2px;
  right: -11%;
  width: 10%;
  height: 70%;
  background-color: #ffe1b5;
}
.product-card::before {
  content: "";
  position: absolute;
  bottom: 1px;
  right: -12%;
  width: 11%;
  height: 40%;
  background-color: #131313;
  z-index: 10;
  transform: skewy(-30deg);
}
.product-card img {
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(255, 233, 199, 0.7) 0%,
    rgba(255, 217, 161, 0.670363) 11.25%,
    rgba(255, 194, 102, 0.624896) 23.23%,
    rgba(255, 208, 138, 0.587421) 37.81%,
    rgba(255, 222, 172, 0.52184) 54.48%,
    rgba(254, 233, 201, 0.539098) 66.98%,
    rgba(254, 245, 231, 0.556356) 80.52%,
    rgba(254, 239, 215, 0.288591) 91.98%,
    rgba(255, 233, 199, 0) 100%
  );
  margin-top: 20px;
}
.content {
  color: #ffe1b5;
}
.content p {
  margin: 10px;
  letter-spacing: 5px;
}
.content p:first-child {
  font-size: 1.2rem;
}
.trash-can svg {
  margin: 5px 0 10px 0;
}
// itinerary card list
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffe1b5;
}
.page-item {
  border: 1px solid #ffe1b5;
  padding: 10px;
  cursor: pointer;
}
.page-item:first-child {
  color: #313131;
  background-color: #ffe1b5;
}
// pagination
</style>
