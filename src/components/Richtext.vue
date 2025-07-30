<script>
import { Richtext } from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export default {
  props: ["value"],

  mounted() {
    this.baseURL = "https://docs.dhtmlx.com/richtext-backend";
    this.richtext = new Richtext(this.$refs.richtext_container, {
      value: this.value,
      menubar: true,
      imageUploadUrl: `${this.baseURL}/images`
    });
  },

  unmounted() {
    this.richtext?.destructor();
  }
};
</script>

<template>
  <div class="component_container">
    <div ref="richtext_container" class="widget"></div>
  </div>
</template>
