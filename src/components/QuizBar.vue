<template>
  <v-container>
    <v-toolbar color="orange darken-4" flat dark>
      <v-spacer></v-spacer>

      <v-icon class="px-4">mdi-account</v-icon>
      <h3>{{quizSettings.name}}</h3>
      <v-icon class="px-4 ml-8">mdi-chess-rook</v-icon>
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
