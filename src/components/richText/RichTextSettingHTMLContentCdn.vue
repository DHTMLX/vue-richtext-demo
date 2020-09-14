<template>
  <div class="dhx-container_inner">
    <section class="dhx_sample-controls">
      <button class="dhx_sample-btn dhx_sample-btn--flat" @click="handleSetValue()">Set HTML Value</button>
    </section>
    <div class="dhx_container">
      <div class="dhx_sample-container__widget setting" ref="richtext"></div>
      <textarea class="dhx_sample-container__textarea" v-model="content"></textarea>
    </div>
  </div>
</template>

<script>
import fromCDN from "from-cdn";
export default {
  name: "RichTextSettingHTMLContentCdn",
  data: () => ({
    richtext: null,
    content: `
      <h1>Meet DHTMLX Rich Text Editor!</h1>
      <p>This JavaScript rich text editor is highly customizable. It makes text editing quick and comfortable due to the inbuilt set of handy formatting tools.</p>
      <p>
        Besides, it will convert your text into HTML or Markdown in the blink of an eye.
        Another bonus of DHTMLX Rich Text is its flexible configuration settings which allow you to fine-tune the look and feel of the editor without effort.
      </p>
      <p>
        To learn more, read our
        <a href="https://docs.dhtmlx.com/richtext/index.html" title="documentation">documentation</a>
        and check the
        <a href="https://docs.dhtmlx.com/richtext/samples/" title="samples">samples</a>.
      </p>
    `,
  }),
  mounted() {
    fromCDN(["https://cdn.dhtmlx.com/richtext/pro/edge/richtext.js", "https://cdn.dhtmlx.com/richtext/pro/edge/richtext.css"]).then(() => {
      // eslint-disable-next-line no-undef
      this.richtext = new dhx.Richtext(this.$refs.richtext);
    });
  },
  methods: {
    handleSetValue() {
      let contentToParse = this.content;
      contentToParse && this.richtext.setValue(contentToParse, "html");
    },
  },
  beforeDestroy() {
    if (this.richtext) {
      this.richtext.destructor();
    }
  },
};
</script>
