<template>
   <all-header />
   <innerpageHeader></innerpageHeader>
   <div class="container">
      <keep-alive>
         <component
            :is="selectedComponent"
            @signUp="signUp"
            @confirmSignUp="confirmSignUp"
         ></component>
      </keep-alive>
   </div>
   <all-footer />
</template>

<script>
import MemberLogin from "../../components/member/MemberLogin.vue";
import MemberSignup from "../../components/member/MemberSignup.vue";

export default {
   components: {
      MemberLogin,
      MemberSignup,
   },
   data() {
      return {
         selectedComponent: "member-login",
      };
   },
   methods: {
      signUp() {
         this.selectedComponent = "member-signup";
      },
      confirmSignUp() {
         this.selectedComponent = "member-login";
      },
   },
};
</script>
