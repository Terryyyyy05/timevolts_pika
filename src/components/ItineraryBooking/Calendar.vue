<template>
   <div class="calendar">
      <vue-cal
         class="vuecal--date-picker"
         hide-view-selector
         xsmall
         :time="false"
         :transitions="false"
         active-view="month"
         :disable-views="['week']"
         style="width: auto; height: 500px"
         :selectedDate="selectedDate"
      >
      </vue-cal>
   </div>
</template>

<script>
import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";

export default {
   components: { VueCal },
   props: ["selectedDate"],
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";

.calendar {
   color: map-get($color, "accent");
   border: 1px solid map-get($color, "primary");
   background-color: #333;
}

.vuecal__menu,
.vuecal__cell-events-count {
   background-color: #fff;
}
.vuecal__title-bar {
   background-color: #fff;
}
.vuecal__cell--today,
.vuecal__cell--current {
   background-color: #fff;
}
.vuecal:not(.vuecal--day-view) .vuecal__cell--selected {
   background-color: #fff;
}
.vuecal__cell--selected:before {
   border-color: rgba(66, 185, 131, 0.5);
}
/* Cells and buttons get highlighted when an event is dragged over it. */
.vuecal__cell--highlighted:not(.vuecal__cell--has-splits),
.vuecal__cell-split--highlighted {
   background-color: rgba(195, 255, 225, 0.5);
}
.vuecal__arrow.vuecal__arrow--highlighted,
.vuecal__view-btn.vuecal__view-btn--highlighted {
   background-color: rgba(136, 236, 191, 0.25);
}
</style>
