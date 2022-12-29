<template>
   <all-header />
   <innerpageHeader></innerpageHeader>
   <div class="container">
      <the-heading heading="會員中心" subheading="Member"></the-heading>
   </div>
   <div class="container main-content">
      
      <div class="nav-container">
         <nav>
            <router-link to="/memberCenter/memberInfo">{{
               title[0]
            }}</router-link>
            <router-link to="/memberCenter/itineraryOrder">{{
               title[1]
            }}</router-link>
            <router-link to="/memberCenter/productOrder">{{
               title[2]
            }}</router-link>
            <router-link to="/memberCenter/memberCoupon">{{
               title[3]
            }}</router-link>
            <router-link to="/memberCenter/itineraryCollection">{{
               title[4]
            }}</router-link>
            <router-link to="/memberCenter/productCollection">{{
               title[5]
            }}</router-link>
         </nav>
         <div class="signOutbutton">
            <button class="btn-primary" @click="signOut">登出會員</button>
         </div>
      </div>
      <div class="sub-content">
         <router-view />
      </div>
   </div>
   <all-footer />
</template>
<script>
import { BASE_URL } from "@/assets/js/commom.js";
export default {
   data() {
      return {
         title: [
            "會員資料",
            "行程訂單",
            "商品訂單",
            "商品折價券",
            "行程收藏",
            "商品收藏",
         ],
      };
   },
   methods: {
      async signOut() {
         //to boaz, here for you to write sign out function!!
         await fetch(`${BASE_URL}signout.php`);
         // console.log(this.$store.getters["userId"]);
         this.$router.push({ path: "/memberLightBox" });
      },
   },
};
</script>
<style lang="scss" scoped>

@media screen and (max-width:767px) {
   .nav-container {
      position: absolute;
      width: 55%;
      left: -3.8%;
      opacity: 1;
      // transition: all .5s, left 1s 0s;
      z-index: 1;
      nav {
         background-color: #1e1e1e;
      }
      .signOutbutton {
         z-index: 1;
      }
   }
  
}
.container.main-content {
   display: flex;
   justify-content: flex-start;
   align-items: center;
   margin: 50px auto;
   //   outline: 1px solid red;
   .nav-container {
      width: 20%;
      margin: 5% 3% 0 0;
      text-align: center;
      font-size: 12px;
      nav {
         height: fit-content;
         border: 2px solid #ffe1b5;
         a {
            width: 100%;
            display: inline-block;
            padding: 10px 2px;
            border-bottom: 2px solid #ffe1b5;
            box-sizing: border-box;
            &:last-child {
               border-bottom: 0;
            }
         }
      }
      .signOutbutton button {
         font-size: 12px;
      }
   }
   .sub-content {
      border: 2px solid #ffe1b5;
      width: 80%;
      height: 70vh;
      box-sizing: border-box;
      margin: auto;
      position: relative;
   }
}
@media screen and (min-width: 768px) {
   
   .container.main-content {
      .nav-container {
         width: 25%;
         nav {
            a {
               font-size: 20px;
            }
         }
         .signOutbutton button {
            font-size: 18px;
         }
      }
   }
}
</style>
