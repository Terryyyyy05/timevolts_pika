<template>
  <innerpageHeader></innerpageHeader>
  <div class="container">
    <the-heading heading="會員中心" subheading="Member"></the-heading>
  </div>
  <MemberBox :memberDataDetails="memberDataProps" />
  <MemberSidebar :change-sidebar="changeSidebar" />
</template>

<script>
import innerpageHeader from "@/components/innerpageHeader.vue";
import MemberSidebar from "@/components/member/MemberSidebar.vue";
import MemberBox from "@/components/member/MemberBox.vue";
export default {
  name: "MemberProfile",
  components: {
    innerpageHeader,
    MemberSidebar,
    MemberBox,
  },
  data() {
    return {
      memberDataList: [
        {
          id: 0,
          memberData: "會員資料",
        },
        {
          id: 1,
          memberData: "行程訂單",
        },
        {
          id: 2,
          memberData: "商品訂單",
        },
        {
          id: 3,
          memberData: "我的折扣券",
        },
        {
          id: 4,
          memberData: "行程蒐藏",
        },
        {
          id: 5,
          memberData: "商品蒐藏",
        },
      ],
    };
  },
  methods: {
    changeSidebar(e) {
      let memberDataProps = this.memberDataList[e].memberData;
      console.log(memberDataProps);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/app.scss";
</style>
