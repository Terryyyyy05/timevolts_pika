<template>
    <div class="wrapper">
        <carousel>
            <slide>
                Slide 1 Content
            </slide>
            <slide>
                Slide 2 Content
            </slide>
        </carousel>
   </div>
</template>

<script>

export default {
//    components: {
//             HomeItinerary,
//    },
   data() {
      return {
         selecters: ["依危險度區分", "依特色區分", "依地點區分"],
         filterExtension: false,
      };
   },
   methods: {
      
   },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";
.wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    padding: 10px 20px;
    border: 1px solid map-get($color, "primary");
    width: fit-content;
    margin: 0 auto;
    div {
       display: flex;
       margin: 10px 10px 0;
       color: map-get($color, "accent");
       cursor: pointer;
    }
    form {
        display: flex;
        align-items: center;
        padding: 0 50px;
        input {
            outline: none;
            border: 0;
            flex-grow: 1;
            padding: 5px 0;
        }
        button {
            border: none;
            cursor: pointer;
            background-color: transparent;
            color: map-get($color, "accent");
        }
    }
}
</style>
