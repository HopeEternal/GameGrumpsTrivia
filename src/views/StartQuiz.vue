<template>
  <div class="home">
    <Questions />
  </div>
</template>

<script>
// @ is an alias to /src
import Questions from "@/components/Questions.vue";

export default {
  name: "StartQuiz",
  components: {
    Questions
  }
};
</script>
