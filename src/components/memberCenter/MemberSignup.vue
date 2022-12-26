<template>
   <div>
      <base-dialog
         :show="errorDialog"
         title="發生錯誤"
         @close="closeErrorDialog"
      >
         <p>請嘗試其他的帳號或密碼</p>
      </base-dialog>
      <base-dialog :show="!!error" title="發生錯誤" @close="handleError">
         <p>{{ error }}</p>
      </base-dialog>
      <base-dialog :show="isLoading" :title="載入中" fixed>
         <base-spinner></base-spinner>
      </base-dialog>
      <section>
         <div class="box-container">
            <div class="flex-column">
               <div class="upper"></div>
               <div class="text-container">
                  <p class="p_xl">S I G N&nbsp;&nbsp;U P</p>
               </div>
               <div class="inputs">
                  <input
                     type="text"
                     placeholder="姓名"
                     v-model.trim="name.val"
                  />
                  <input
                     for="email"
                     type="email"
                     placeholder="信箱"
                     v-model.trim="email.val"
                     @blur="checkEmail"
                  />
                  <p
                     class="green-alert"
                     v-if="checkEmailMsg.msg && !checkEmailMsg.errMsg"
                  >
                     {{ checkEmailMsg.msg }}
                  </p>
                  <p
                     class="red-alert"
                     v-if="checkEmailMsg.errMsg && !checkEmailMsg.msg"
                  >
                     {{ checkEmailMsg.errMsg }}
                  </p>
                  <input
                     type="password"
                     placeholder="密碼"
                     v-model.trim="password.val"
                  />
                  <input
                     type="password"
                     placeholder="確認密碼"
                     v-model.trim="comfirmPsw.val"
                  />
               </div>
               <p v-if="!signupIsValid" class="red-alert">請輸入完整資訊</p>
               <p v-if="!emailIsVerified" class="red-alert">
                  請輸入正確信箱格式
               </p>
               <button class="btn-secondary" @click="signup">
                  <span>確認註冊</span>
               </button>
               <button class="btn-primary" @click="$emit('backToLogin')">
                  <span>返回登入</span>
               </button>
            </div>
         </div>
      </section>
   </div>
</template>

<script>
export default {
   emits: ["backToLogin"],
   data() {
      return {
         name: {
            val: "",
            isValid: true,
         },
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
         isLoading: false,
         error: null,
         checkEmailMsg: {
            msg: "",
            errMsg: "",
         },
         errorDialog: false,
      };
   },
   methods: {
      validateSignup() {
         this.signupIsValid = true;
         this.emailIsVerified = true;
         if (this.name.val === "") {
            this.name.isValid = false;
            this.signupIsValid = false;
         }
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
      async signup() {
         this.validateSignup();
         this.checkEmail();
         if (!this.signupIsValid || !this.emailIsVerified) {
            this.clearCheckEmail();
            return;
         } else if (this.checkEmailMsg.errMsg) {
            this.clearCheckEmail();
            this.showErrorDialog();
            return;
         }

         this.isLoading = true;

         try {
            await this.$store.dispatch("signup", {
               name: this.name.val,
               email: this.email.val,
               password: this.password.val,
            });

            this.$emit("back-to-login");
         } catch (err) {
            this.error = err;
         }

         this.isLoading = false;
      },
      handleError() {
         this.error = null;
      },
      showErrorDialog() {
         this.errorDialog = true;
      },
      closeErrorDialog() {
         this.errorDialog = false;
      },
      async checkEmail() {
         try {
            const response = await fetch(
               "http://localhost/timevolts_pika/public/phpfile/signup.php",
               {
                  method: "POST",
                  body: JSON.stringify({
                     action: "checkEmail",
                     email: this.email.val,
                  }),
               }
            );

            const responseData = await response.json();
            console.log(responseData);

            if (responseData.msg) {
               this.checkEmailMsg.msg = responseData.msg;
               // this.checkEmailMsg.errMsg = "";
            } else if (responseData.errMsg) {
               this.checkEmailMsg.errMsg = responseData.errMsg;
               // this.checkEmailMsg.msg = "";
            }

            if (!response.ok) {
               const error = new Error(error.message || "發生錯誤，請稍後再試");
               console.log(error);
            }
         } catch (error) {
            console.log(error);
         }
      },
      clearCheckEmail() {
         this.checkEmailMsg.msg = "";
         this.checkEmailMsg.errMsg = "";
      },
   },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";
@import "@/assets/css/utils/mixin";

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
      width: 360px;
      color: #fff;
      font-size: 16px;
      outline: none;
      border-radius: 5px;
      margin: 12px 0;
      &::placeholder {
         opacity: 80%;
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

.green-alert {
   color: green;
}

.red-alert {
   color: red;
}

button {
   border-radius: 10px;
   width: 40%;
   height: 48px;
   margin-top: 24px;
   margin-bottom: -24px;
}

@include m() {
   .box-container {
      width: 360px;
   }

   .upper {
      width: 360px;
   }

   .inputs {
      input {
         width: 240px;
      }
   }
}
</style>
