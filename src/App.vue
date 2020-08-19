<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>-->
    <!-- <router-view /> -->
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import ajax from './utils/ajax'

// @Component
// export default class App extends Vue {
//   constructor(props) {
//     super(props)
//     console.log(321,this)
//   }
//   mounted() {
//     ajax
//       .post("/apis/post", {
//       })
//       .then(res => {
//         // console.log(res);
//       });
//   }
// }

export default {
  name: "App",
  mounted() {
    // this.$ajax
    //   .get("/apis/user", {
    //     page: 2,
    //     size: 1
    //   })
    //   .then(res => {
    //     console.log(res);
    //   });
    // this.$ajax
    //   .get("/apis/user/34", {
    //   })
    //   .then(res => {
    //     console.log(res);
    //   });
    // this.$ajax
    //   .post("/apis/user", {
    //     openid: 'ovp_i5CmjrrthTzpGlLnlHdB323p',
    //     nickname: '111',
    //     avatarurl: '111',
    //     gender: 1,
    //     country: '111',
    //     province: '111',
    //     city: '111',
    //     language: '111',
    //     unionid: '1111'
    //   })
    //   .then(res => {
    //     console.log(res);
    //   });
    
    // this.$ajax
    //   .put("/apis/user", {
    //     id: 40,
    //     openid: 'ovp_i5CmjrrthTzpGlLnlHdBZ3ls',
    //     nickname: 'zxd',
    //     avatarurl: '111',
    //     gender: 1,
    //     country: '111',
    //     province: '111',
    //     city: '111',
    //     language: '111',
    //     unionid: '1111'
    //   })
    //   .then(res => {
    //     console.log(res);
    //   });

    this.$ajax
      .delete("/apis/user/40", {
      })
      .then(res => {
        console.log(res);
      });
  },
  methods: {}
};
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
