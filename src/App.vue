<script>
import RichText from "./components/Richtext.vue";
import { getData } from "./data";

export default {
  components: { RichText },
  data() {
    const { value } = getData();
    return { value };
  }
};
</script>

<template>
  <Richtext :value="value" />
</template>
