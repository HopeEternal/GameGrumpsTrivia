<template>
  <div class="home">
    <QuizBar />
    <Questions />
  </div>
</template>

<script>
// @ is an alias to /src
import QuizBar from "@/components/QuizBar.vue";
import Questions from "@/components/Questions.vue";

export default {
  name: "StartQuiz",
  components: {
    Questions,
    QuizBar
  }
};
</script>
