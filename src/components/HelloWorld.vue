<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-btn @click="buttonClickedTest(10, 10, 10)"
          >Create Block Update Test {{ testData }}</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
let WSM = window.WSM;
let FormIt = window.FormIt;

export default {
  name: "HelloWorld",
  methods: {
    buttonClickedTest(w, l, h) {
      console.log("button was clicked");
      this.createBlock(w, l, h);
    },
    createBlock: async (w, l, h) => {
      let pt1 = await WSM.Geom.Point3d(0, 0, 0);
      let pt2 = await WSM.Geom.Point3d(w, l, h);
      let histID = await FormIt.GroupEdit.GetEditingHistoryID();
      console.log(histID, pt1, pt2);

      let test = await WSM.APICreateBlock(histID, pt1, pt2);
      console.log(test);
    },
  },
  computed: {
    ...mapState(["testData"]),
  },
  data: () => ({
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader",
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify",
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify",
      },
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com",
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com",
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify",
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs",
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify",
      },
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer",
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/getting-started/pre-made-layouts",
      },
      {
        text: "Frequently Asked Questions",
        href: "https://vuetifyjs.com/getting-started/frequently-asked-questions",
      },
    ],
  }),
};
</script>
