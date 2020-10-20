<template>
  <div class="hello">
    <ul>
      <li>
        <p class="title">
          echarts
        </p>
        <div class="list">
          <router-link to="/echarts/pie">饼状图</router-link>
        </div>
        <div class="list">
          <router-link to="/echarts/bar">柱状图</router-link>
        </div>
      </li>
      <li>
        <p class="title">
          测试
        </p>
        <div class="list">
          <router-link to="/other">测试</router-link>
        </div>
      </li>
      <li>
        <p class="title">
          动画
        </p>
        <div class="list">
          <router-link to="/lablescolor">列表无限滚动</router-link>
          <router-link to="/numscolor">数字滚动</router-link>
        </div>
      </li>

    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',


  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
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

  .title {
    color: cadetblue;
    font-size: 20px;
    line-height: 50px;
  }

</style>
