<script>
import Richtext from "./components/Richtext.vue";
import { getData } from "./data";

export default {
  components: { Richtext },
  data() {
    return {
      initText: getData()
    };
  },
};
</script>

<template>
  <Richtext :initText="initText" />
</template>
