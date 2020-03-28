<template>
  <v-app>
    <v-app-bar app color="orange darken-4" dark>
      <v-icon x-large class="pa-3">mdi-gamepad-variant</v-icon>
      <v-toolbar-title>
        <h2 class="font-weight-thin">Game Grumps Trivia!</h2>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon class="px-4">mdi-account</v-icon>
      <h3>{{quizSettings.name}}</h3>
      <v-icon class="px-4 ml-8">mdi-chess-rook</v-icon>
      <h3>{{quizSettings.difficultyLevel}}</h3>
      <v-icon class="px-4 ml-8">mdi-timer</v-icon>
      <h3>2:00</h3>
      <v-icon class="px-4 ml-8">mdi-trophy</v-icon>
      <h3>Score: 00</h3>
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
export default {
  name: "App",

  data: () => ({
    //
  }),
  computed: {
    quizSettings() {
      return this.$store.state.quizSettings;
    }
  }
};
</script>

<style></style>
