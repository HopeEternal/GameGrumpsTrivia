<template>
  <v-container>
    <v-toolbar dark src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
      <v-toolbar-title>{{quizSettings.name}}</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-icon class="px-4">mdi-chess-rook</v-icon>
      <h3>{{quizSettings.difficultyLevel}}</h3>
      <v-icon class="px-4 ml-8">mdi-timer</v-icon>
      <h3>2:00</h3>
      <v-icon class="px-4 ml-8">mdi-trophy</v-icon>
      <h3>Score: 00</h3>
    </v-toolbar>
  </v-container>
</template>

<script>
export default {
  name: "QuizBar",

  data: () => ({}),
  computed: {
    quizSettings() {
      return this.$store.state.quizSettings;
    }
  }
};
</script>
