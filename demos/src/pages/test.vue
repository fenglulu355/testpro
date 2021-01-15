<template>
  <!-- 测试-->
  <div id="palyback">
    <div :class="{'else': onswitch}">
      <div id="player-container-id"></div>
    </div>
    <div :class="{'else': !onswitch}">
      <div id="player-container"></div>
    </div>
    <div class="box-title" @click="onchange">切换</div>
  </div>
</template>
 
<script>
  export default {
    data() {
      return {
        player: null,
        onswitch: false
      }
    },
 
    mounted() {
      this.playVideo()
    },
 
    methods: {
      playVideo() {
        document.getElementById('player-container-id').innerHTML = ""
        this.player = new TcPlayer('player-container-id', {
          "m3u8": ' http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8', //请替换成实际可用的播放地址
          "autoplay": true, //iOS下safari浏览器，以及大部分移动端浏览器是不开放视频自动播放这个能力的
          // "coverpic": img,
          "width": '100%', //视频的显示宽度，请尽量使用视频分辨率宽度
          "height": '100%', //视频的显示高度，请尽量使用视频分辨率高度
          "remember": 1
        });
 
        this.player = new TcPlayer('player-container', {
          "m3u8": 'http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8', //请替换成实际可用的播放地址
          "autoplay": true, //iOS下safari浏览器，以及大部分移动端浏览器是不开放视频自动播放这个能力的
          // "coverpic": img,
          "width": '100%', //视频的显示宽度，请尽量使用视频分辨率宽度
          "height": '100%', //视频的显示高度，请尽量使用视频分辨率高度
          "remember": 1
        });
      },
 
      // 切换
      onchange() {
        this.onswitch = !this.onswitch
      }
    }
  }
</script>
 
<style scoped>
  #palyback {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding-top: 2rem;
    background-color: #1c302e;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 59.375rem;
    position: relative;
  }
  .else {
    width: 400px;
    position: absolute;
    top: 3%;
    right: 2%;
    z-index: 100;
  }
 
  .box-title {
    width: 50px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: pink;
    position: absolute;
    bottom: 3%;
    right: 2%;
  }
</style>