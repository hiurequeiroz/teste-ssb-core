<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted () {
    setTimeout(() => {
let SSB
let err

if (window.getSSBSingleton) {
  const ssbSingleton = window.getSSBSingleton();
  [err, SSB] = ssbSingleton.getSSB();
} else {
  console.log('Bundle not loaded!')
}
console.log('SSB', SSB, err)

if (SSB) {
  console.log('Postando')
  SSB.db.publish(
    {
      type: "post",
      text: "oioi",
    },
    (err) => {
      console.log("🚀 ~ file: main.js ~ line 12 ~ err", err);
      console.log("Postado");
     }
  );
}
    }, 10000);
    
  }
}



</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
