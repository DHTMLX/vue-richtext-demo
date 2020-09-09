<template>
  <div class="dhx-container_inner">
    <section class="dhx_sample-controls">
      <div class="dhx_sample-input__wrapper dhx_sample-input__wrapper--pl-16">
        <input checked name="mode" value="classic" id="classic" @change="handleChange('classic')" type="radio" class="dhx_sample-radio__input" />
        <label for="classic" class="dhx_sample-radio__label">Classic mode</label>
      </div>
      <div class="dhx_sample-input__wrapper dhx_sample-input__wrapper--pl-16">
        <input name="mode" value="document" id="document" @change="handleChange('document')" type="radio" class="dhx_sample-radio__input" />
        <label for="document" class="dhx_sample-radio__label">Document mode</label>
      </div>
    </section>
    <div class="dhx_sample-container__widget" ref="richtext"></div>
  </div>
</template>

<script>
import fromCDN from "from-cdn";
export default {
  name: "RichTextEditormodesCdn",
  data: () => ({
    richtext: null,
  }),
  mounted() {
    fromCDN(["https://cdn.dhtmlx.com/richtext/pro/edge/richtext.js", "https://cdn.dhtmlx.com/richtext/pro/edge/richtext.css"]).then(() => {
      // eslint-disable-next-line no-undef
      this.richtext = new dhx.Richtext(this.$refs.richtext);
    });
  },
  methods: {
    handleChange(mode) {
      this.richtext.destructor();
      // eslint-disable-next-line no-undef
      this.richtext = new dhx.Richtext(this.$refs.richtext, { mode: mode });
    },
  },
  beforeDestroy() {
    if (this.richtext) {
      this.richtext.destructor();
    }
  },
};
</script>
