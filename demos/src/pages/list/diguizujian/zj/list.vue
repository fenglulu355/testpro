<template>
  <div class="dgbox">
    <div class="list-item" v-for="(item, index) in list" :key="index">
      <div class="item-name" @click="cur($el,item)">
        <p class="name">{{item.label}}</p>
      </div>
      <div v-if="item.children" class="children-item">
        <list :list="item.children"></list>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "List",
    props: {
      list: Array,
    },
    methods: {
      cur(e, item) {
        console.log(e)
        console.log(item)
      }
    },
  };

</script>
<style>
  .dgbox {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    border: 1px solid #8f8f8f;
    overflow-y: scroll;
  }

  .list-item {
    width: 100%;
    box-sizing: border-box;
    padding: 0 5px 0 10px;
    font-size: 16px;
  }

  .item-name {
    border-bottom: 1px dashed #8f8f8f;

  }

  .children-item {
    width: 100%;
    box-sizing: border-box;
    padding: 5px 0px 5px 5px;
    cursor: pointer;
    /* border-bottom: 1px dashed #eeeeee; */
  }

  .children-item .dgbox {
    border: none;
  }

  .children-item .list-item {
    width: 100%;
    box-sizing: border-box;
    padding: 2px 0px 2px 5px;
    font-size: 15px;
  }

  .dgbox {
    -ms-overflow-style: none;
    /*火狐下隐藏滚动条*/
    overflow: -moz-scrollbars-none;
  }

  .dgbox::-webkit-scrollbar {
    display: none;
    /* Chrome Safari */
  }

</style>
