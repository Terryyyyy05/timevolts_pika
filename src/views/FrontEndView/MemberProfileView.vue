<template>
  <MemberModule />
</template>

<script>
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
  },
};
</script>

<style lang="scss" scoped></style>
