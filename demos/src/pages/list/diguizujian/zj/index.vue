<template>
  <div class="list-detail">
    <div class="temp">
      <list :list="list1"></list>
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
        prop: {
          label: 'city'
        },
        list1: [],
        lista1: [],
        list: [{
          label: "经济",
          value: 1,
          children: [{
            label: "如家",
            value: 101,
            children: [{
                label: "上江路-如家",
                value: 10101,
              },
              {
                label: "望江路望江路望江路望江路-如家",
                value: 10102,
              }
            ]
          }, {
            label: "7天",
            value: 102,
            children: [{
                label: "长江路-7天",
                value: 10201,
              },
              {
                label: "望江路-7天",
                value: 10202,
              }
            ]
          }]
        }],
        lista: [{
          city: "经济",
          value: 1,
          children: [{
            city: "如家",
            value: 101,
            children: [{
                city: "上江路-如家",
                value: 10101,
              },
              {
                city: "望江路望江路望江路望江路-如家",
                value: 10102,
              }
            ]
          }, {
            city: "7天",
            value: 102,
            children: [{
                city: "长江路-7天",
                value: 10201,
              },
              {
                city: "望江路-7天",
                value: 10202,
              }
            ]
          }]
        }],
      }
    },
    created() {
      setTimeout(() => {
        this.list1 = this.list

      }, 1000);
    },
  }

</script>
<style>
  .list-detail {
    width: 100%;
  }


  .temp {
    box-sizing: border-box;
    margin: 0px auto;
    padding-bottom: 10px;
    width: 200px;
    height: 200px;

  }

</style>
