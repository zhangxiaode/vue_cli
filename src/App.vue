<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view />-->
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import ajax from '@/utils/ajax'

@Component
export default class App extends Vue {
  mounted() {
    ajax
      .post("/apis/post", {
      })
      .then(res => {
        // console.log(res);
      });
  }
}

// import ajax from '@/utils/ajax'
// export default {
//   name: "App",
//   mounted() {
//     ajax
//       .post("/apis/post", {
//       })
//       .then(res => {
//         // console.log(res);
//       });
//   },
//   methods: {}
// };
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
