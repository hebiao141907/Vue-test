<template>
  <div id="app">
    <button @click="increament" >增加</button>
    <h2>当前数字为,{{this.$store.state.count}}</h2>
  </div>
</template>

<script>
import { mapActions,mapGetters } from 'vuex'

export default {
  name: 'app',
  methods: mapActions ([
    'increament'
  ]),
  computed: mapGetters ({
    counts:'count'
  })
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

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
