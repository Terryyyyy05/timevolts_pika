<template>
   <all-header />
   <innerpageHeader></innerpageHeader>
   <div class="container">
      <component
         :is="selectedComponent"
         @signup="signup"
         @confirm-signup="confirmSignup"
         @back-to-login="backToLogin"
      ></component>
   </div>
   <all-footer />
</template>

<script>
import MemberLogin from "../../components/memberCenter/MemberLogin.vue";
import MemberSignup from "../../components/memberCenter/MemberSignup.vue";

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
      signup() {
         this.selectedComponent = "member-signup";
      },
      backToLogin() {
         this.selectedComponent = "member-login";
      },
   },
};
</script>
