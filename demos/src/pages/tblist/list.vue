<!--
 * @Author: fenglulu
 * @Date: 2021-01-11 15:25:56
 * @LastEditors: fenglulu
 * @LastEditTime: 2021-01-11 15:45:01
 * @FilePath: \demos\src\pages\tblist\list.vue
-->
<template>
  <div class="tblist">
    <tableList :headerList='headerList' :mainList='mainList'></tableList>
  </div>
</template>

<script>
  import tableList from './tableList'
  export default {
    data() {
      return {
          tableData:[
              {}
          ],
        headerList: ['姓名', '性别', '年龄'],
        mainList: []
      }
    },
    components: {
      tableList,
    },
  }

</script>
<style></style>
