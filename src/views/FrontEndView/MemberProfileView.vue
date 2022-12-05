<template>
  <innerpageHeader></innerpageHeader>
  <div class="container">
    <the-heading heading="會員中心" subheading="Member"></the-heading>
  </div>
  <MemberBoxProfile />
  <MemberSidebar />
</template>

<script>
<<<<<<< HEAD
import MemberSidebar from "@/components/member/MemberSidebar.vue";
import MemberBox from "@/components/member/MemberBox.vue";
import MemberModule from "@/components/member/MemberModule.vue";
export default {
  components: {
    MemberSidebar,
    MemberBox,
  },
  data() {
    return {
      memberDataList: [
        {
          id: 1,
          memberData: "會員資料",
        },
        {
          id: 2,
          memberData: "行程訂單",
        },
        {
          id: 3,
          memberData: "商品訂單",
        },
        {
          id: 4,
          memberData: "我的折扣券",
        },
        {
          id: 5,
          memberData: "行程蒐藏",
        },
        {
          id: 6,
          memberData: "商品蒐藏",
        },
      ],
    };
  },
  methods: {
    changeSidebar(e) {
      console.log(e);
    },
    MemberModule
=======
import innerpageHeader from "@/components/innerpageHeader.vue";
import MemberSidebar from "@/components/member/MemberSidebar.vue";
import MemberBoxProfile from "@/components/member/memberBox/MemberBoxProfile.vue";
export default {
  components: {
    innerpageHeader,
    MemberSidebar,
    MemberBoxProfile,
>>>>>>> dev_vito
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/app.scss";
</style>
