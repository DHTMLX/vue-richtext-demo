<template>
  <div class="dhx-container_inner">
    <section class="dhx_sample-controls">
      <label class="dhx_form-group dhx_radiobutton dhx_form-group--inline dhx_form-group--no-message-holder dhx_sample-input__wrapper--pl-16">
        <input type="radio" name="mode" class="dhx_radiobutton__input" @change="handleChange('classic')" checked />
        <span class="dhx_radiobutton__visual-input"></span>
        <span class="dhx_label">Classic mode</span>
      </label>
      <label class="dhx_form-group dhx_radiobutton dhx_form-group--inline dhx_form-group--no-message-holder dhx_sample-input__wrapper--pl-16">
        <input type="radio" name="mode" class="dhx_radiobutton__input" @change="handleChange('document')" />
        <span class="dhx_radiobutton__visual-input"></span>
        <span class="dhx_label">Document mode</span>
      </label>
    </section>
    <div class="dhx_sample-container__widget" ref="richtext"></div>
  </div>
</template>

<script>
import fromCDN from "from-cdn";
export default {
  name: "RichTextEditorModesCdn",
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
