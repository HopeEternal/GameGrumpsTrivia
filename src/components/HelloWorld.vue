<template>
  <v-app>
    <v-app-bar app color="indigo" dark>
      <div class="d-flex align-center text-center">
        <v-icon large>mdi-checkbox-multiple-marked-circle-outline</v-icon>
        <h1 class="font-weight-light text-right">Just Do It!</h1>
      </div>
    </v-app-bar>
  </v-app>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
