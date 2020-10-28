<template>
  <div>
    <ani :sendVal='newItems'></ani>
  </div>
</template>
<script>
  import ani from './ani.vue'
  export default {
    components: {
      ani
    },
    data() {
      return {
        newItems: [{
          name: '张三',
          detail: '152****7846抽中5元电影票'
        }, {
          name: '张三',
          detail: '134****7866抽中5元饭票'
        }, {
          name: '张三',
          detail: '180****3300抽中华为新品 HUAWEI nova 4手机'
        }]
      }
    }
  }

</script>
