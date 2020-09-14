<template>
  <div class="dhx-container_inner">
    <section class="dhx_sample-controls">
      <form class="dhx_sample-toolbar-blocks" @change="eventHandler">
        <label class="dhx_form-group dhx_checkbox dhx_checkbox--inline">
          <input type="checkbox" id="undo" checked class="dhx_checkbox__input" />
          <span class="dhx_checkbox__visual-input"></span>
          <span class="dhx_label">undo</span>
        </label>
        <label class="dhx_form-group dhx_checkbox dhx_checkbox--inline">
          <input type="checkbox" id="style" checked class="dhx_checkbox__input" />
          <span class="dhx_checkbox__visual-input"></span>
          <span class="dhx_label">style</span>
        </label>
        <label class="dhx_form-group dhx_checkbox dhx_checkbox--inline">
          <input type="checkbox" id="decoration" checked class="dhx_checkbox__input" />
          <span class="dhx_checkbox__visual-input"></span>
          <span class="dhx_label">decoration</span>
        </label>
        <label class="dhx_form-group dhx_checkbox dhx_checkbox--inline">
          <input type="checkbox" id="colors" checked class="dhx_checkbox__input" />
          <span class="dhx_checkbox__visual-input"></span>
          <span class="dhx_label">colors</span>
        </label>
        <label class="dhx_form-group dhx_checkbox dhx_checkbox--inline">
          <input type="checkbox" id="align" checked class="dhx_checkbox__input" />
          <span class="dhx_checkbox__visual-input"></span>
          <span class="dhx_label">align</span>
        </label>
        <label class="dhx_form-group dhx_checkbox dhx_checkbox--inline">
          <input type="checkbox" id="link" checked class="dhx_checkbox__input" />
          <span class="dhx_checkbox__visual-input"></span>
          <span class="dhx_label">link</span>
        </label>
        <label class="dhx_form-group dhx_checkbox dhx_checkbox--inline">
          <input type="checkbox" id="clear" class="dhx_checkbox__input" />
          <span class="dhx_checkbox__visual-input"></span>
          <span class="dhx_label">clear</span>
        </label>
        <label class="dhx_form-group dhx_checkbox dhx_checkbox--inline">
          <input type="checkbox" id="fullscreen" class="dhx_checkbox__input" />
          <span class="dhx_checkbox__visual-input"></span>
          <span class="dhx_label">fullscreen</span>
        </label>
        <label class="dhx_form-group dhx_checkbox dhx_checkbox--inline">
          <input type="checkbox" id="stats" class="dhx_checkbox__input" />
          <span class="dhx_checkbox__visual-input"></span>
          <span class="dhx_label">stats</span>
        </label>
      </form>
    </section>
    <div class="dhx_sample-container__widget" ref="richtext"></div>
  </div>
</template>

<script>
import fromCDN from "from-cdn";
export default {
  name: "RichTextToolbarBlocksCdn",
  data: () => ({
    richtext: null,
    initialValue: `
      <p style="font-size: 18px; text-align: center;">
        Note that newly set blocks are added to the end of the toolbar.
      </p>
      <p style="font-size: 18px; text-align: center;">
        Use the checkboxes to hide/show related toolbar blocks.
      </p>
    `,
    toolbarBlocks: ["undo", "style", "decoration", "colors", "align", "link"],
  }),
  mounted() {
    fromCDN(["https://cdn.dhtmlx.com/richtext/pro/edge/richtext.js", "https://cdn.dhtmlx.com/richtext/pro/edge/richtext.css"]).then(() => {
      // eslint-disable-next-line no-undef
      this.richtext = new dhx.Richtext(this.$refs.richtext);
      this.richtext.setValue(this.initialValue, "html");
    });
  },
  methods: {
    eventHandler(event) {
      if (event.target.checked) {
        this.toolbarBlocks.push(event.target.id);
      } else {
        let filtered = [];
        for (let i = 0; i < this.toolbarBlocks.length; i++) {
          if (this.toolbarBlocks[i] !== event.target.id) {
            filtered.push(this.toolbarBlocks[i]);
          }
        }
        this.toolbarBlocks = filtered;
      }
      let value = this.richtext.getValue();
      this.richtext.destructor();
      // eslint-disable-next-line no-undef
      this.richtext = new dhx.Richtext(this.$refs.richtext, {
        toolbarBlocks: this.toolbarBlocks,
      });
      this.richtext.setValue(value, "html");
    },
  },
  beforeDestroy() {
    if (this.richtext) {
      this.richtext.destructor();
    }
  },
};
</script>
