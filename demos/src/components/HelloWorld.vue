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
          <router-link to="/other/test">测试</router-link>
        </div>
      </li>
      <li>
        <p class="title">
          动画
        </p>
        <div class="list">
          <router-link to="/ani/lablescolor">列表无限滚动</router-link>
          <router-link to="/ani/numscolor">数字滚动</router-link>
          <router-link to="/ani/textscolor">文字滚动</router-link>

        </div>
      </li>
      <li>
        <p class="title">
          递归组件
        </p>
        <div class="list">
          <router-link to="/dg/zj">递归组件</router-link>
        </div>
      </li>
      <li>
        <p class="title">
          联动选择
        </p>
        <div class="list">
          <router-link to="/ld/ssq">省市区三级联动</router-link>
        </div>
      </li>
      <li>
        <p class="title">
          表格
        </p>
        <div class="list">
          <router-link to="/tblist/list">表格列表</router-link>
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
  /* h1,
  h2 {
    font-weight: normal;
  }

 

 */
  .hello {
    box-sizing: border-box;
    padding: 20px 20px;
  }

  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: flex-start;
  }

  li {
    margin: 0 10px;
    text-align: center;
  }

  a {
    color: #42b983;
    display: block;
    line-height: 30px;
  }

  .title {
    color: cadetblue;
    font-size: 20px;
    line-height: 50px;
  }

</style>
