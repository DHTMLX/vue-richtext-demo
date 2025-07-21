<script>
import { Richtext } from "@dhx/trial-richtext";
import "@dhx/trial-richtext/codebase/richtext.css";

export default {
  props: ["value"],

  mounted() {
    this.richtext = new Richtext(this.$refs.richtext_container, {
      value: this.value
    });
  },

  unmounted() {
    this.richtext?.destructor();
  },
  watch: {
    initText(newVal) {
      this.richtext?.setValue(newVal, "markdown");
    }
  }
};
</script>

<template>
  <div class="component_container">
    <div ref="richtext_container" class="widget"></div>
  </div>
</template>
