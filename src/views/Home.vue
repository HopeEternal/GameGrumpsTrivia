
<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-12">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>Pick your poison!</v-toolbar-title>
              <v-spacer />
            </v-toolbar>
            <v-card-text>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  v-model="name"
                  label="Enter Your Name"
                  name="name"
                  :rules="nameRules"
                  :counter="15"
                  prepend-icon="mdi-account-circle"
                  type="text"
                />
                <v-select
                  v-model="difficultyLevel"
                  :items="difficulties"
                  label="Select a difficulty!"
                  required
                  prepend-icon="mdi-chess-rook"
                  :rules="difficultyRules"
                ></v-select>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn color="primary" @click="validate">Start Quiz!</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: "Home",

  data: () => ({
    difficulties: ["Easy", "Average", "Epic"],
    difficultyLevel: "",
    name: "",
    //Validation
    valid: false,
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    difficultyRules: [v => !!v || "Please select a diffuculty!"]
  }),
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
        this.$router.push("/StartQuiz");
      }
    }
  }
};
</script>