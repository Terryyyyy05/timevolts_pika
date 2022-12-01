<template>
   <div>
      <font-awesome-icon icon="fa-solid fa-chevron-down" />
   </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
library.add(faChevronDown);

export default {
   components: {
      FontAwesomeIcon,
   },
};
</script>
