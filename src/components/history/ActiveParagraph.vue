<template>
   <div>
      <h4>{{ heading }}</h4>
      <div>
         <p class="p_md">{{ text }}</p>
      </div>
   </div>
</template>

<script>
export default {
   props: ["text", "heading"],
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";
@import "@/assets/css/utils/mixin";

div {
   display: flex;
   flex-direction: column;
   gap: 48px;
   h4 {
      margin: auto;
   }
   p {
      overflow-y: scroll;
      height: 500px;
   }
}
::-webkit-scrollbar {
   width: 20px;
}

/* Track */
::-webkit-scrollbar-track {
   box-shadow: inset 0 0 5px grey;
   border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
   background: map-get($color, "light");
   border-radius: 10px;
}

@include m() {
   .p_md {
      overflow-y: inherit;
      height: auto;
   }
}
</style>
