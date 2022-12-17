<template>
   <section>
      <div class="box-container">
         <div class="flex-column">
            <div class="upper"></div>
            <div class="text-container">
               <p class="p_xl">S I G N&nbsp;&nbsp;U P</p>
            </div>
            <div class="inputs">
               <input
                  for="email"
                  type="email"
                  placeholder="信箱"
                  v-model.trim="email.val"
               />
               <input
                  type="text"
                  placeholder="密碼"
                  v-model.trim="password.val"
               />
               <input
                  type="text"
                  placeholder="確認密碼"
                  v-model.trim="comfirmPsw.val"
               />
            </div>
            <p v-if="!signupIsValid" class="alert">請輸入完整資訊</p>
            <p v-if="!emailIsVerified" class="alert">請輸入正確信箱格式</p>
            <button class="btn-secondary" @click="signup">
               <span>確認註冊</span>
            </button>
         </div>
      </div>
   </section>
</template>

<script>
export default {
   emits: ["confirm-signup"],
   data() {
      return {
         email: {
            val: "",
            isValid: true,
         },
         password: {
            val: "",
            isValid: true,
         },
         comfirmPsw: {
            val: "",
            isValid: true,
         },
         signupIsValid: true,
         emailIsVerified: true,
      };
   },
   methods: {
      validateSignup() {
         this.signupIsValid = true;
         this.emailIsVerified = true;
         if (this.email.val === "") {
            this.email.isValid = false;
            this.signupIsValid = false;
         }
         if (this.password.val === "") {
            this.password.isValid = false;
            this.signupIsValid = false;
         }
         if (this.comfirmPsw.val === "") {
            this.comfirmPsw.isValid = false;
            this.signupIsValid = false;
         }
         if (!/^[^@]+@\w+(\.\w+)+\w$/.test(this.email.val)) {
            this.emailIsVerified = false;
         }
      },
      signup() {
         this.validateSignup();
         if (!this.signupIsValid || !this.emailIsVerified) {
            return;
         }

         this.$emit("confirm-signup");
      },
   },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";

* {
   padding: 0;
   box-sizing: border-box;
}

section {
   padding: 200px 0 96px;
}

.box-container {
   margin: auto;
   width: 500px;
   height: fit-content;
   border: 3px solid #e6dfc7;
   border-radius: 5px;
   background-color: #333;
   padding-bottom: 48px;
}

.upper {
   width: 500px;
   height: 48px;
   background-color: #ffe1b5;
   border-top-left-radius: 5px;
   border-top-right-radius: 5px;
   position: relative;
   top: -2px;
}

.text-container {
   width: 60%;
   height: fit-content;
   padding: 12px 0;
   border: 2px solid #e6dfc7;
   border-radius: 5px;
   p {
      text-align: center;
      color: map-get($color, "primary");
      font-weight: 700;
   }
}

.inputs {
   text-align: center;
   input {
      border: 2px solid #e6dfc7;
      padding: 12px 16px;
      background-color: transparent;
      width: 80%;
      color: #fff;
      font-size: 16px;
      outline: none;
      &::placeholder {
         opacity: 80%;
      }
      &:nth-child(1) {
         border-top-left-radius: 5px;
         border-top-right-radius: 5px;
      }
      &:nth-child(2) {
         border-top: 0;
      }
      &:nth-child(3) {
         border-top: 0;
         border-bottom-left-radius: 5px;
         border-bottom-right-radius: 5px;
      }
   }
}

.flex-column {
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: 24px;
}

.alert {
   color: red;
}

button {
   border-radius: 10px;
   width: 40%;
   height: 48px;
}
</style>
