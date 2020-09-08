<template>
  <div class="dhx_sample-container__widget" ref="richtext"></div>
</template>

<script>
import fromCDN from "from-cdn";
export default {
  name: "RichTextInitCdn",
  data: () => ({
    richtext: null,
  }),
  mounted() {
    fromCDN(["https://cdn.dhtmlx.com/richtext/pro/edge/richtext.js", "https://cdn.dhtmlx.com/richtext/pro/edge/richtext.css"]).then(() => {
      // eslint-disable-next-line no-undef
      this.richtext = new dhx.Richtext(this.$refs.richtext);
    });
  },
  beforeDestroy() {
    if (this.richtext) {
      this.richtext.destructor();
    }
  },
};
</script>
