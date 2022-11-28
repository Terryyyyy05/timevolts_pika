<template >
    <div class="tabs">
        <ul class="tabs_header">
            <li v-for="title in tabTitles" :key="title" :class="{ selected: title == selectedTitle}" @click="selectedTitle = title">
                {{ title }}
            </li>
        </ul>
        <slot />
    </div>
</template>

<script>
import {ref, provide} from 'vue'
export default {
    setup(props, {slots}){
        const tabTitles = ref(slots.default().map((tab) =>tab.props.title))
        const selectedTitle = ref(tabTitles.value[0])

        provide("selectedTitle", selectedTitle)
        return{
            selectedTitle,
            tabTitles,
        }
    }
}
</script>

<style scoped lang="scss">
.tabs{
  max-width: 400px;
  margin: 0 auto;
}

.tabs_header{
  margin: 0 0 -5px;
  list-style: none;
  padding: 0;
  display: flex;
}

.tabs_header li{
  width: 80px;
  text-align:center;
  padding: 10px 20px;
  /* margin-right: 10px; */
  border: 1px solid white;
  border-radius: 5px 5px 0 0;
  cursor: pointer;
  transition: 0.4s all ease-out;
  background: white;
  color: white;
}

.tabs_header li.selected{
    border:1px solid white;
    border-bottom: 1px solid white;
    color: white;
}
  
</style>