<template>
   <div class="progress-number">
      <div class="progress-line" :style="line"></div>
      <div class="circle progress-active"><span>1</span></div>
      <div :class="secondMode"><span>2</span></div>
      <div :class="thirdMode"><span>3</span></div>
   </div>
   <button class="progress-btn" disabled>Prev</button>
   <button class="progress-btn">Next</button>
</template>

<script>
export default {
   props: ["firstMode", "secondMode", "thirdMode", "line"],
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";

.progress-number {
   display: flex;
   justify-content: space-between;
   position: relative;
   margin: 0 auto 3rem;
   width: 30%;
   min-width: 30rem;
}

.progress-number::before {
   content: "";
   background-color: map-get($color, "primary");
   position: absolute;
   top: 50%;
   left: 0;
   transform: translateY(-50%);
   height: 8px;
   width: 100%;
   z-index: -1;
}

.progress-line {
   background-color: map-get($color, "accent");
   position: absolute;
   top: 50%;
   left: 0;
   transform: translateY(-50%);
   height: 10px;
   width: 0%;
   z-index: -1;
   transition: 0.5s ease-in;
}

.circle {
   background-color: #fff;
   color: #555;
   height: 100px;
   width: 100px;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: map-get($color, "primary");
   border-radius: 50%;
   transition-delay: 0.4s;
}

.circle span {
   font-size: 48px;
}

.circle.progress-active {
   background-color: map-get($color, "accent");
}

.progress-btn {
   background-color: #7ad7a7;
   color: #fff;
   border: 0;
   border-radius: 9px;
   cursor: pointer;
   padding: 0.8rem 3rem;
   margin: 0.6rem;
   font-size: 1.4rem;
}

.progress-btn:nth-of-type(1) {
   background-color: #eee;
}

.progress-btn:active {
   transform: scale(0.98);
}

.progress-btn:focus {
   outline: 0;
}

.progress-btn:disabled {
   cursor: not-allowed;
}
</style>
