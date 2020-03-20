<template>
  <v-app>
    <v-app-bar app color="orange darken-4" dark>
      <v-icon x-large class="pa-3">mdi-gamepad-variant</v-icon>
      <v-toolbar-title>
        <h2 class="font-weight-thin">Game Grumps Trivia!</h2>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <QuizBar />
    </v-app-bar>

    <v-content>
      <v-container class="fill-height" fluid>
        <v-content>
          <router-view />
        </v-content>
      </v-container>
    </v-content>
    <v-footer color="orange darken-4" app>
      <span class="white--text">&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
import QuizBar from "@/components/QuizBar.vue";
export default {
  name: "App",

  components: {
    QuizBar
  },

  data: () => ({
    //
  })
};
</script>

<style></style>
