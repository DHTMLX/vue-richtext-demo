<script>
import { Richtext } from "@dhx/trial-richtext";
import "@dhx/trial-richtext/codebase/richtext.min.css";

export default {
  props: ["initText"],

  data() {
    return {
      richtext: null,
    };
  },


  mounted() {
    this.richtext = new Richtext(this.$refs.cont, {});
    this.richtext.setValue(this.initText, "markdown");
  },
  unmounted() {
    this.richtext?.destructor();
    this.$refs.cont.innerHTML = "";
  },
  watch: {
    initText(newVal) {
      this.richtext?.setValue(newVal, "markdown");
    },
  },
};
</script>

<template>
  <div ref="cont" style="width: 100%; height: 100%"></div>
</template>
