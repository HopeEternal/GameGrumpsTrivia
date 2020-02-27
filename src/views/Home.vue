
<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-12">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>Pick your poison!</v-toolbar-title>
              <v-spacer />
              <v-tooltip right>
                <template v-slot:activator="{ on }">
                  <v-btn
                    icon
                    large
                    href="https://codepen.io/johnjleider/pen/pMvGQO"
                    target="_blank"
                    v-on="on"
                  >
                    <v-icon>mdi-codepen</v-icon>
                  </v-btn>
                </template>
                <span>Codepen</span>
              </v-tooltip>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  label="Enter Your Name"
                  name="name"
                  prepend-icon="mdi-account-circle"
                  type="text"
                />
                <v-select
                  v-model="select"
                  :items="difficulties"
                  label="Select a difficulty!"
                  required
                  @change="$v.select.$touch()"
                  @blur="$v.select.$touch()"
                ></v-select>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn color="primary">Start Quiz!</v-btn>
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
    select: "none"
  })
};
</script>