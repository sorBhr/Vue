
<template>
  <div class="hello">
    <h1>{{ msg.split('').reverse().join() }}</h1>
    <h2>Essential Links</h2>
    <input id="input-trim" v-model.trim = "message" name="" value="" placeholder="忽略空格">
    <child message = "hehe"></child>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
