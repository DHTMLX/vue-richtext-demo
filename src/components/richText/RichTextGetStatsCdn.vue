<template>
  <div class="dhx-container_inner">
    <section class="dhx_sample-controls">
      <button class="dhx_sample-btn dhx_sample-btn--flat" @click="getStats()">Get Statistics</button>
    </section>
    <div class="dhx_container">
      <div class="dhx_sample-container__widget" ref="richtext"></div>
      <div class="dhx_sample-container__sidebar">
        <ul>
          <li>
            Characters: <span>{{ charsAmount }}</span
            ><br />
          </li>
          <li>
            Characters without spaces: <span>{{ charsExlSpaceAmount }}</span
            ><br />
          </li>
          <li>
            Words: <span>{{ wordsAmount }}</span>
          </li>
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
    charsAmount: "",
    charsExlSpaceAmount: "",
    wordsAmount: "",
  }),
  mounted() {
    fromCDN(["https://cdn.dhtmlx.com/richtext/pro/edge/richtext.js", "https://cdn.dhtmlx.com/richtext/pro/edge/richtext.css"]).then(() => {
      // eslint-disable-next-line no-undef
      this.richtext = new dhx.Richtext(this.$refs.richtext);
    });
  },
  methods: {
    getStats() {
      this.charsAmount = this.richtext.getStats().chars;
      this.charsExlSpaceAmount = this.richtext.getStats().charsExlSpace;
      this.wordsAmount = this.richtext.getStats().words;
    },
  },
  beforeDestroy() {
    if (this.richtext) {
      this.richtext.destructor();
    }
  },
};
</script>
