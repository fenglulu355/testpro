<template>
  <div class="list-detail">
    <div class="temp">
      <list :list="list"></list>
    </div>
  </div>
</template>
<script>
  import List from "./list";
  export default {
    name: "Parent",
    components: {
      List
    },
    data() {
      return {
        list: [{
          name: "经济",
          children: [{
            name: "如家",
            children: [{
                name: "上江路-如家"
              },
              {
                name: "望江路望江路望江路望江路-如家"
              }
            ]
          }, {
            name: "7天",
            children: [{
                name: "长江路-7天"
              },
              {
                name: "望江路-7天"
              }
            ]
          }]
        }]
      }
    }
  }

</script>
<style>
  .list-detail {
    width: 100%;
  }


  .temp {
    margin: 100px auto;
    width: 200px;
    height: 200px;
    border: 1px solid #000000;
    overflow: hidden;
    overflow-y: scroll;
  }

</style>
