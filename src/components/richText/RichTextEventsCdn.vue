<template>
  <div class="dhx-container_inner">
    <section class="dhx_sample-controls">
      <button class="dhx_sample-btn dhx_sample-btn--flat" @click="clearAll()">Clear events</button>
    </section>
    <div class="dhx_container">
      <div class="dhx_sample-container__widget" ref="richtext"></div>
      <div class="dhx_sample-container__sidebar">
        <div class="events-list--element" v-if="isEmpty">No events yet</div>
        <div class="events-list--element dhx_sample-event" v-else v-for="event in events" :key="event.keyId">
          <p>{{ event.name }}</p>
          <p>{{ event.value }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import fromCDN from "from-cdn";
export default {
  name: "RichTextEventsCdn",
  data: () => ({
    richtext: null,
    isEmpty: true,
    eventsArray: ["change", "action", "selectionChange", "selectionRefresh"],
    events: [],
  }),
  mounted() {
    fromCDN(["https://cdn.dhtmlx.com/richtext/pro/edge/richtext.js", "https://cdn.dhtmlx.com/richtext/pro/edge/richtext.css"]).then(() => {
      // eslint-disable-next-line no-undef
      this.richtext = new dhx.Richtext(this.$refs.richtext);

      this.eventsArray.forEach(event => {
        this.richtext.events.on(event, (...args) => {
          this.isEmpty = false;
          const keyId = Math.random();
          args = args.map(item => JSON.stringify(item));
          this.events = [{ keyId, name: event, value: `${args}` }].concat(this.events);
        });
      });
    });
  },
  methods: {
    clearAll() {
      this.isEmpty = true;
      this.events.length = 0;
    },
  },
  beforeDestroy() {
    if (this.pivot) {
      this.pivot.destructor();
    }
  },
};
</script>
