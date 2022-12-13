<template>
   <div class="box-container">
      <div class="flex-column">
         <div class="upper"></div>
         <div class="text-container">
            <p class="p_xl">L O G&nbsp;&nbsp;I N</p>
         </div>
         <div class="inputs">
            <input type="text" placeholder="信箱" />
            <input type="text" placeholder="密碼" />
            <p>忘記密碼</p>
         </div>
         <button class="btn-secondary"><span>登入</span></button>
         <button class="btn-primary"><span>註冊會員</span></button>
      </div>
   </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";

* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}
.box-container {
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   width: 400px;
   height: fit-content;
   border: 3px solid #e6dfc7;
   border-radius: 5px;
   background-color: #333;
   padding-bottom: 48px;
}

.upper {
   width: 400px;
   height: 48px;
   background-color: #ffe1b5;
   border-top-left-radius: 5px;
   border-top-right-radius: 5px;
   position: relative;
   top: -1px;
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
   p {
      text-align: end;
      width: 90%;
      margin-top: 16px;
      cursor: pointer;
      color: #eee;
   }
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
   height: 36px;
   &:nth-of-type(1) {
      margin-top: 24px;
      margin-bottom: -16px;
   }
}
</style>
