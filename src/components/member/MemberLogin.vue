<template>
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
                  type="text"
                  placeholder="密碼"
                  v-model.trim="password.val"
                  @blur="clearValidity('password')"
               />
            </div>
            <p v-if="!loginIsValid" class="alert">請輸入完整資訊</p>
            <p class="forgot-psw">忘記密碼</p>
            <button class="btn-secondary" @click="logIn">
               <span>登入</span>
            </button>
            <button class="btn-primary" @click="$emit('signUp')">
               <span>註冊會員</span>
            </button>
         </div>
      </div>
   </section>
</template>

<script>
export default {
   emits: ["signUp"],
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
      logIn() {
         this.validateLogin();
         if (!this.loginIsValid) {
            return;
         }
         this.$router.go(-1);
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
   width: 40%;
   height: 48px;
   margin-top: 24px;
   margin-bottom: -24px;
}
</style>
