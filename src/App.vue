<template>
  <div id="app">
    <video id="myVideo" ref="myVideo" width="280" height="500" controls autoplay preload="auto" class="video-js vjs-default-skin vjs-big-play-centered">
        <source type="application/vnd.apple.mpegurl" :src="liveUrlHls" id="target">
    </video>
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
// declare var videojs: any
import videojs from 'video.js'
import 'videojs-contrib-hls'
import 'video.js/dist/video-js.css'

@Component
export default class App extends Vue {
  constructor(props) {
    super(props)
    // console.log(321,this)
  }
  private myPlayer
  private get liveUrlHls(): String {
    return "https://ip4214349946.mobgslb.tbcache.com/livecb.alicdn.com/mediaplatform/7482d876-165a-4ddc-bdca-2f922952bde6_liveng-720p.m3u8?auth_key=1606877694-0-0-5edf9a7ba6c60b02789db953ab6a68aa&ali_redirect_ex_hot=100&ali_redirect_ex_sm3u8=1"
    // return this.roomInfo.liveUrlHls
  }
  mounted() {
    this.$nextTick(() => {
      this.myPlayer = videojs(this.$refs.myVideo, { "poster": "", "controls": "true"}, function() {
        this.on('play', function() {
          console.log('正在播放');
        });
        //暂停--播放完毕后也会暂停
        this.on('pause', function() {
          console.log("暂停中")
        });
        // 结束
        this.on('ended', function() {
          console.log('结束');
        })
      });
    })
    // ajax
    //   .post("/apis/post", {
    //   })
    //   .then(res => {
    //     // console.log(res);
    //   });
  }
}

// export default {
//   name: "App",
//   mounted() {
//     // this.$ajax
//     //   .get("/apis/user", {
//     //     page: 2,
//     //     size: 1
//     //   })
//     //   .then(res => {
//     //     console.log(res);
//     //   });
//     // this.$ajax
//     //   .get("/apis/user/34", {
//     //   })
//     //   .then(res => {
//     //     console.log(res);
//     //   });
//     // this.$ajax
//     //   .post("/apis/user", {
//     //     openid: 'ovp_i5CmjrrthTzpGlLnlHdB323p',
//     //     nickname: '111',
//     //     avatarurl: '111',
//     //     gender: 1,
//     //     country: '111',
//     //     province: '111',
//     //     city: '111',
//     //     language: '111',
//     //     unionid: '1111'
//     //   })
//     //   .then(res => {
//     //     console.log(res);
//     //   });
    
//     // this.$ajax
//     //   .put("/apis/user", {
//     //     id: 40,
//     //     openid: 'ovp_i5CmjrrthTzpGlLnlHdBZ3ls',
//     //     nickname: 'zxd',
//     //     avatarurl: '111',
//     //     gender: 1,
//     //     country: '111',
//     //     province: '111',
//     //     city: '111',
//     //     language: '111',
//     //     unionid: '1111'
//     //   })
//     //   .then(res => {
//     //     console.log(res);
//     //   });

//     this.$ajax
//       .delete("/apis/user/40", {
//       })
//       .then(res => {
//         console.log(res);
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
