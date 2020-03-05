<template>
  <v-container>
    <v-card
      v-for="(question, index) in questions"
      :key="index"
      class="pa-5 ma-8"
    >
      <v-card-title class="orange--text text--darken-4"
        >Question {{ index + 1 }}</v-card-title
      >
      <v-card-text>{{ question.question }}</v-card-text>
      <v-card-actions>
        <v-radio-group class="ms-5">
          <v-radio
            v-for="(answer, index) in question.answers"
            :key="index"
            :label="`${answer}`"
            :value="index"
          ></v-radio>
        </v-radio-group>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'Questions',

  data: () => ({
    questions: [
      {
        category: 'Quotes and Memes',
        question:
          'After stating "I don\'t like Nintendo anymore, it\'s for babies", what version of Call of Duty does Arin proclaim that he wants to play?',
        answers: [
          'COD: Pew Pew',
          'COD: Shoot a Man',
          'COD: Missed',
          'COD: Plus Ultra'
        ],
        correct: '2',
        source: 'https://www.youtube.com/watch?v=f_fDKl0dHmA'
      },
      {
        category: 'Quotes and Memes',
        question:
          'According to Arin, what is the name of a disease you get from chewing too much?',
        answers: ['Twilt', 'Spoodles', 'Sprankton', 'Tamould'],
        correct: '3',
        source: 'https://www.youtube.com/watch?v=xrbdfeva2bM'
      },
      {
        category: 'Quotes and Memes',
        question:
          "According to a Grumps bit, Ashman's life cleaned up after meeting which invented mega-man character?",
        answers: ['Splashman', 'Trashman', 'Stashman', 'Splashman'],
        correct: '2',
        source: 'https://www.youtube.com/watch?v=uUILjiniT88'
      }
    ]
  })
};
</script>
