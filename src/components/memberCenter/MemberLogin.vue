<template>
   <div>
      <base-dialog :show="!!loginError" title="登入失敗" @close="askForLogin">
         <p>{{ loginError }}</p>
      </base-dialog>
      <base-dialog :show="!!error" title="發生錯誤" @close="handleError">
         <p>{{ error }}</p>
      </base-dialog>
      <base-dialog
         :show="this.memberStatus == 0"
         title="警告"
         @close="handleError"
      >
         <p>此帳號已被停權</p>
      </base-dialog>
      <base-dialog :show="isLoading" :title="載入中" fixed>
         <base-spinner></base-spinner>
      </base-dialog>
      <section>
         <div class="box-container">
            <div class="flex-column">
               <div class="upper"></div>
               <div class="text-container">
                  <p class="p_xl">L O G&nbsp;&nbsp;I N</p>
               </div>
               <div class="inputs">
                  <input
                     type="email"
                     placeholder="信箱"
                     v-model.trim="email.val"
                     @blur="clearValidity('email')"
                  />
                  <input
                     type="password"
                     placeholder="密碼"
                     v-model.trim="password.val"
                     @blur="clearValidity('password')"
                  />
               </div>
               <p v-if="!loginIsValid" class="alert">請輸入完整資訊</p>
               <p class="forgot-psw">忘記密碼</p>
               <button class="btn-secondary" @click="login">
                  <span>登入</span>
               </button>
               <button class="btn-primary" @click="$emit('signup')">
                  <span>註冊會員</span>
               </button>
            </div>
         </div>
      </section>
   </div>
</template>

<script>
export default {
   emits: ["signup"],
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
         loginIsValid: true,
         isLoading: false,
         error: null,
         loginError: null,
         memberStatus: null,
      };
   },
   methods: {
      clearValidity(input) {
         this[input].isValid = true;
      },
      validateLogin() {
         this.loginIsValid = true;
         if (this.email.val === "") {
            this.email.isValid = false;
            this.loginIsValid = false;
         }
         if (this.password.val === "") {
            this.password.isValid = false;
            this.loginIsValid = false;
         }
      },
      async login() {
         this.validateLogin();
         if (!this.loginIsValid) {
            return;
         }
         this.isLoading = true;

         try {
            await this.$store.dispatch("login", {
               email: this.email.val,
               password: this.password.val,
            });
            this.memberStatus = this.$store.getters["memberStatus"];
            this.loginError = this.$store.getters["loginError"];
            if (!this.loginError && this.memberStatus == 1) {
               this.$router.go(-1);
            }
            // console.log(this.loginError);
         } catch (err) {
            this.error = err.message || "發生錯誤";
         }

         this.isLoading = false;
      },
      handleError() {
         this.error = null;
         this.memberStatus = null;
      },
      askForLogin() {
         this.loginError = null;
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
         border-bottom-left-radius: 5px;
         border-bottom-right-radius: 5px;
      }
   }
}

.alert {
   color: red;
}

.forgot-psw {
   width: fit-content;
   cursor: pointer;
   color: #eee;
   align-self: flex-end;
   margin-right: 15%;
}

.flex-column {
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: 24px;
}

button {
   border-radius: 10px;
   width: 200px;
   height: 48px;
   margin-top: 24px;
   margin-bottom: -24px;
}
</style>
