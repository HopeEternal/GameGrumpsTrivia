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
            @click="checkAnswer(question, index)"
          ></v-radio>
        </v-radio-group>
        <p>{{question.answers[question.correct-1]}}</p>
      </v-card-actions>
      <div v-if="question.answeredCorrectly !== ''">
        <p>{{question.answeredCorrectly}}{{userAnswer}}</p>
      </div>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Questions",

  data: () => ({
    userAnswer: "",
    questions: [
      {
        category: "Quotes and Memes",
        question:
          "After stating \"I don't like Nintendo anymore, it's for babies\", what version of Call of Duty does Arin proclaim that he wants to play?",
        answers: [
          "COD: Pew Pew",
          "COD: Shoot a Man",
          "COD: Missed",
          "COD: Plus Ultra"
        ],
        correct: 2,
        source: "https://www.youtube.com/watch?v=f_fDKl0dHmA",
        answeredCorrectly: ""
      },
      {
        category: "Quotes and Memes",
        question:
          "According to Arin, what is the name of a disease you get from chewing too much?",
        answers: ["Twilt", "Spoodles", "Sprankton", "Tamould"],
        correct: 3,
        source: "https://www.youtube.com/watch?v=xrbdfeva2bM",
        answeredCorrectly: ""
      },
      {
        category: "Quotes and Memes",
        question:
          "According to a Grumps bit, Ashman's life cleaned up after meeting which invented mega-man character?",
        answers: ["Splashman", "Trashman", "Stashman", "Mashman"],
        correct: 2,
        source: "https://www.youtube.com/watch?v=uUILjiniT88",
        answeredCorrectly: ""
      },
      {
        category: "Quotes and Memes",
        question:
          "When Arin and Dan were young children, Dan shit himself 17 times at a Dairy Queen in Kansas.",
        answers: [true, false],
        correct: 2,
        source: "https://www.youtube.com/watch?v=Gpgn3rmu0aM",
        answeredCorrectly: ""
      },
      {
        category: "General Knowledge",
        question: "What is former Game Grumps member Jontron's real name?",
        answers: [
          "Jonathan Malkovich",
          "Jon Irwin",
          "Jonathan Birdman",
          "Jonathan Jafari"
        ],
        correct: 4,
        source: "https://en.wikipedia.org/wiki/JonTron",
        answeredCorrectly: ""
      },
      {
        category: "General Knowledge",
        question: "How did Arin and Jon meet?",
        answers: ["YouTube", "Newgrounds", "High School", "Twitter"],
        correct: 1,
        source:
          "https://en.wikipedia.org/wiki/JonTron#Sargon_of_Akkad_livestream_controversy",
        answeredCorrectly: ""
      },
      {
        category: "General Knowledge",
        question:
          "Uploaded on July 18, 2018, the first video ever uploaded to their channel was of the hosts doing what?",
        answers: [
          "Playing Monster Hunter 3 Ultimate",
          "Playing Kirby Super Star",
          'Singing "SMASH!" by Starbomb',
          "Playing The Legend of Zelda"
        ],
        correct: 2,
        source: "https://en.wikipedia.org/wiki/Game_Grumps",
        answeredCorrectly: ""
      },
      {
        category: "General Knowledge",
        question:
          'Which of these common Game Grumps guests originally inspired the name "Game Grumps" when he told Jon and Arin about their tendency to be "grumpy"?',
        answers: [
          "Matt Watson",
          "Suzy Berhow",
          "Ross O'Donovan",
          "Brian Wecht"
        ],
        correct: 3,
        source: "https://en.wikipedia.org/wiki/Game_Grumps",
        answeredCorrectly: ""
      },
      {
        category: "General Knowledge",
        question: "What was the original platform for the show?",
        answers: ["Blog", "YouTube", "Podcast", "Netflix"],
        correct: 3,
        source: "https://en.wikipedia.org/wiki/Game_Grumps",
        answeredCorrectly: ""
      },
      {
        category: "Quotes and Memes",
        question:
          'What name does Dan\'s father accidentally say when trying to refer to the music service "Spotify"?',
        answers: ["The Googles", "Spoofy", "The AOL", "Spootifee"],
        correct: 2,
        source: "https://www.youtube.com/watch?v=LuPi2YN5vGg",
        answeredCorrectly: ""
      }
    ]
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
