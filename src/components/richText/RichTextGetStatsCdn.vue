<template>
  <div class="dhx-container_inner">
    <section class="dhx_sample-controls">
      <button class="dhx_sample-btn dhx_sample-btn--flat" @click="getStats()">Get Statistics</button>
    </section>
    <div class="dhx-container_setting">
      <div class="dhx_sample-container__widget setting" ref="richtext"></div>
      <div class="dhx_sample-container__sidebar setting">
        <ul>
          <li>Characters: <span id="chars-amount"></span><br /></li>
          <li>Characters without spaces: <span id="charsExlSpace-amount"></span><br /></li>
          <li>Words: <span id="words-amount"></span></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import fromCDN from "from-cdn";
export default {
  name: "RichTextGetStatsCdn",
  data: () => ({
    pivot: null,
  }),
  mounted() {
    fromCDN(["https://cdn.dhtmlx.com/richtext/pro/edge/richtext.js", "https://cdn.dhtmlx.com/richtext/pro/edge/richtext.css"]).then(() => {
      // eslint-disable-next-line no-undef
      this.richtext = new dhx.Richtext(this.$refs.richtext);
    });
  },
  methods: {
    getStats() {
      document.getElementById("chars-amount").innerText = this.richtext.getStats().chars;
      document.getElementById("charsExlSpace-amount").innerText = this.richtext.getStats().charsExlSpace;
      document.getElementById("words-amount").innerText = this.richtext.getStats().words;
    },
  },
  beforeDestroy() {
    if (this.richtext) {
      this.richtext.destructor();
    }
  },
};
</script>
