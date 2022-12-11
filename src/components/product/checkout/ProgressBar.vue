<template>
  <div class="progress-number">
    <div class="progress-line" :style="line"></div>
    <div class="circle progress-active"><span>Step 1</span></div>
    <div :class="secondMode"><span>Step 2</span></div>
    <div :class="thirdMode"><span>Step 3</span></div>
    <!-- <div :class="fourthMode"><span>Step 4</span></div> -->
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: ["firstMode", "secondMode", "thirdMode", "fourthMode", "line"],
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";
@import "@/assets/css/utils/mixin";

.progress-number {
  display: flex;
  justify-content: space-between;
  position: relative;
  margin: 0 auto 3rem;
  width: 50%;
  min-width: 300px;
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
  font-size: 20px;
}

.circle.progress-active {
  background-color: map-get($color, "accent");
}

@include m() {
  .progress-number {
    margin: 0 auto 8%;
  }

  .circle {
    height: 80px;
    width: 80px;
  }
}
</style>
