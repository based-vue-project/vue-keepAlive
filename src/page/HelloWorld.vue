<template>
  <div class="hello">
    <h1>首页</h1>
    <h1>{{ msg }}</h1>
    <a class="button" @click="jumpToBPage()">
      进入列表页-BPage
    </a>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    jumpToBPage () {
      this.$router.push('/bpage')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
  font-size: 20px;
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
  display: block;
}
</style>
