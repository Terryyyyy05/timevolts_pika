<template>
   <side-bar @clickTab="setActiveTab"></side-bar>
   <div class="container">
      <h2>{{ activeTab.name }}</h2>
      <keep-alive>
         <component :is="activeTab.cpmName"></component>
      </keep-alive>
   </div>
</template>

<script>
import SideBar from "../../components/backend/SideBar.vue";
import MemberManage from "../../components/backend/MemberManage.vue";

export default {
   components: {
      SideBar,
      MemberManage,
   },
   provide() {
      return {
         systems: this.systems,
      };
   },
   data() {
      return {
         systems: [
            {
               id: 0,
               name: "會員管理系統",
               cpmName: "member-manage",
            },
            {
               id: 1,
               name: "歷史故事管理系統",
               cpmName: "member-manage",
            },
            {
               id: 2,
               name: "行程管理系統",
               cpmName: "member-manage",
            },
            {
               id: 3,
               name: "行程訂單管理系統",
               cpmName: "member-manage",
            },
            {
               id: 4,
               name: "行程評論系統",
               cpmName: "member-manage",
            },
            {
               id: 5,
               name: "畫布管理系統",
               cpmName: "member-manage",
            },
            {
               id: 6,
               name: "商品管理系統",
               cpmName: "member-manage",
            },
            {
               id: 7,
               name: "後臺帳號管理系統",
               cpmName: "member-manage",
            },
            {
               id: 8,
               name: "商品訂單管理系統",
               cpmName: "member-manage",
            },
            {
               id: 9,
               name: "最新消息管理系統",
               cpmName: "member-manage",
            },
            {
               id: 10,
               name: "時空管理局管理系統",
               cpmName: "member-manage",
            },
            {
               id: 11,
               name: "折扣券管理系統",
               cpmName: "member-manage",
            },
         ],
         activeTab: null,
      };
   },
   methods: {
      setActiveTab(tab) {
         this.activeTab = this.systems.find((sys) => sys.id === tab);
         console.log(this.activeTab);
      },
   },
   created() {
      this.activeTab = this.systems.find((sys) => sys.id === 0);
   },
};
</script>

<style lang="scss">
@import "@/assets/css/utils/variables";

.container {
   padding: 24px 48px;
   position: relative;
   left: 300px;
   height: 100vh;
}

h2 {
   color: map-get($color, "primary");
}

p {
   color: #fff;
}
</style>
