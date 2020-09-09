import RichTextInitCdn from "../components/richText/RichTextInitCdn";
import RichTextEventsCdn from "../components/richText/RichTextEventsCdn";
import RichTextSettingHTMLContentCdn from "../components/richText/RichTextSettingHTMLContentCdn";
import RichTextGettingContentCdn from "../components/richText/RichTextGettingContentCdn";
import RichTextEditormodesCdn from "../components/richText/RichTextEditormodesCdn";
import RichTextToolbarBlocksCdn from "../components/richText/RichTextToolbarBlocksCdn";
import RichTextLocalizationCdn from "../components/richText/RichTextLocalizationCdn";
import RichTextGetStatsCdn from "../components/richText/RichTextGetStatsCdn";

export default {
  title: "RichText",
};

export const initialization = () => ({
  components: { RichTextInitCdn },
  template: `
    <section class="dhx-container">
      <div class="dhx-container_header">
        <h3>Basic initialization. </h3>
        <a
          class="source-link"
          href="https://github.com/DHTMLX/vue-richText-demo/blob/master/src/components/richText/RichTextInitCdn.vue"
          target="_blank"
        >
          Source code
        </a>
        <div>
          Check documentation:
          <a
            href="https://docs.dhtmlx.com/richtext/initialization.html"
            target="_blank"
          >
            Initialization.
          </a>
        </div>
      </div>
      <RichTextInitCdn></RichTextInitCdn>
    </section>
  `,
});

export const events = () => ({
  components: { RichTextEventsCdn },
  template: `
    <section class="dhx-container">
      <div class="dhx-container_header">
        <h3>RichText Events. </h3>
        <a
          class="source-link"
          href="https://github.com/DHTMLX/vue-richText-demo/blob/master/src/components/richText/RichTextEventsCdn.vue"
          target="_blank"
        >
          Source code
        </a>
        <div>
          Check documentation:
          <a
            href="https://docs.dhtmlx.com/richtext/event_handling.html"
            target="_blank"
          >
            Event Handling.
          </a>
        </div>
      </div>
      <RichTextEventsCdn></RichTextEventsCdn>
    </section>
  `,
});

export const settingHTMLContent = () => ({
  components: { RichTextSettingHTMLContentCdn },
  template: `
    <section class="dhx-container">
      <div class="dhx-container_header">
        <h3>Setting HTML content. </h3>
        <a
          class="source-link"
          href="https://github.com/DHTMLX/vue-richText-demo/blob/master/src/components/richText/RichTextSettingHTMLContentCdn.vue"
          target="_blank"
        >
          Source code
        </a>
        <div>
          Check documentation:
          <a
            href="https://docs.dhtmlx.com/richtext/loading_data.html#formatofcontent"
            target="_blank"
          >
            Format of content.
          </a>
          <a
            href="https://docs.dhtmlx.com/richtext/loading_data.html#addingcontentintoeditor"
            target="_blank"
          >
            Adding content into editor.
          </a>
        </div>
      </div>
      <RichTextSettingHTMLContentCdn></RichTextSettingHTMLContentCdn>
    </section>
  `,
});

export const gettingContent = () => ({
  components: { RichTextGettingContentCdn },
  template: `
    <section class="dhx-container">
      <div class="dhx-container_header">
        <h3>Getting content. </h3>
        <a
          class="source-link"
          href="https://github.com/DHTMLX/vue-richText-demo/blob/master/src/components/richText/RichTextGettingContentCdn.vue"
          target="_blank"
        >
          Source code
        </a>
        <div>
          Check documentation:
          <a
            href="https://docs.dhtmlx.com/richtext/working_with_richtext.html#gettingcontentfromeditors"
            target="_blank"
          >
            Getting content from editor.
          </a>
          <a
            href="https://docs.dhtmlx.com/richtext/loading_data.html#formatofcontent"
            target="_blank"
          >
            Format of content.
          </a>
        </div>
      </div>
      <RichTextGettingContentCdn></RichTextGettingContentCdn>
    </section>
  `,
});

export const textEditorModes = () => ({
  components: { RichTextEditormodesCdn },
  template: `
    <section class="dhx-container">
      <div class="dhx-container_header">
        <h3>RichText Editor modes. </h3>
        <a
          class="source-link"
          href="https://github.com/DHTMLX/vue-richText-demo/blob/master/src/components/richText/RichTextEditormodesCdn.vue"
          target="_blank"
        >
          Source code
        </a>
        <div>
          Check documentation:
          <a
            href="https://docs.dhtmlx.com/richtext/configuration.html#workingmodes"
            target="_blank"
          >
          Working modes.
          </a>
        </div>
      </div>
      <RichTextEditormodesCdn></RichTextEditormodesCdn>
    </section>
  `,
});

export const toolbarBlocks = () => ({
  components: { RichTextToolbarBlocksCdn },
  template: `
    <section class="dhx-container">
      <div class="dhx-container_header">
        <h3>Configuration of toolbar blocks. </h3>
        <a
          class="source-link"
          href="https://github.com/DHTMLX/vue-richText-demo/blob/master/src/components/richText/RichTextToolbarBlocksCdn.vue"
          target="_blank"
        >
          Source code
        </a>
        <div>
          Check documentation:
          <a
            href="https://docs.dhtmlx.com/richtext/configuration.html#toolbar"
            target="_blank"
          >
            Toolbar.
          </a>
        </div>
      </div>
      <RichTextToolbarBlocksCdn></RichTextToolbarBlocksCdn>
    </section>
  `,
});

export const locale = () => ({
  components: { RichTextLocalizationCdn },
  template: `
    <section class="dhx-container">
      <div class="dhx-container_header">
        <h3>Localization. </h3>
        <a
          class="source-link"
          href="https://github.com/DHTMLX/vue-richText-demo/blob/master/src/components/richText/RichTextLocalizationCdn.vue"
          target="_blank"
        >
          Source code
        </a>
        <div>
          Check documentation:
          <a
            href="https://docs.dhtmlx.com/richtext/localization.html"
            target="_blank"
          >
            Localization.
          </a>
        </div>
      </div>
      <RichTextLocalizationCdn></RichTextLocalizationCdn>
    </section>
  `,
});

export const getStats = () => ({
  components: { RichTextGetStatsCdn },
  template: `
    <section class="dhx-container">
      <div class="dhx-container_header">
        <h3>Getting statistics. </h3>
        <a
          class="source-link"
          href="https://github.com/DHTMLX/vue-richText-demo/blob/master/src/components/richText/RichTextGetStatsCdn.vue"
          target="_blank"
        >
          Source code
        </a>
        <div>
          Check documentation:
          <a
            href="https://docs.dhtmlx.com/richtext/working_with_richtext.html#statistics"
            target="_blank"
          >
            Getting statistics.
          </a>
        </div>
      </div>
      <RichTextGetStatsCdn></RichTextGetStatsCdn>
    </section>
  `,
});
