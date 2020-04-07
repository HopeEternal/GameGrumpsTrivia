<template>
  <v-container>
    <v-card v-for="(question, index) in questions" :key="index" class="pa-5 ma-8">
      <v-card-title class="orange--text text--darken-4">Question {{ index + 1 }}</v-card-title>
      <v-card-text>{{ question.question }}</v-card-text>
      <v-card-actions>
        <v-radio-group class="ms-5">
          <v-radio
            v-for="(answer, index) in question.answers"
            v-model="userAnswer"
            :key="index"
            :label="`${answer}`"
            :value="index"
            @mousedown="checkAnswer(question, index)"
          ></v-radio>
        </v-radio-group>
      </v-card-actions>
      <v-alert
        v-if="question.answeredCorrectly == 'That is correct!'"
        type="success"
        icon="mdi-thumb-up"
      >{{question.answeredCorrectly}}{{userAnswer}}</v-alert>
      <v-alert
        v-else-if="question.answeredCorrectly == 'Sorry, that\'s incorrect!'"
        type="error"
        icon="mdi-emoticon-sad"
      >{{question.answeredCorrectly}}{{userAnswer}}</v-alert>
    </v-card>
  </v-container>
</template>

<script>
import json from "../data/questionbank.json";
export default {
  name: "Questions",
  data: () => ({
    userAnswer: "",
    questions: json
  }),
  methods: {
    checkAnswer(question, index) {
      // console.log(question + index);
      if (index === question.correct - 1) {
        question.answeredCorrectly = "That is correct!";
      } else {
        question.answeredCorrectly = "Sorry, that's incorrect!";
      }
    }
  }
};
</script>
