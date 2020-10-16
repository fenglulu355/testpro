<template>
  <div class="main">
    <!-- <div style="height: 160px; width: 50%;display: inline-block;float: right; overflow: hidden;">
      <ul id="con1" ref="con1" :class="{anim:animate==true}" @mouseenter="Stop()" @mouseleave="Up()">
        <li style="border:  1px solid red;height: 34px" v-for='item in items'>{{item.name}}</li>
      </ul>
    </div> -->
    <div class="add" @click="add">add</div>
    <div class="lablebox">
      <ul class="lablelist" :class="{anim:animate==true}" @mouseenter="Stop()" @mouseleave="Up()">
        <li class="lableli" v-for='(item,index) in items'>
          <p>{{index}}{{item.name}}</p>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        animate: false,
        ani: null,
        items: [{
            name: "霸气外露的xxx体育工作1"
          },
          {
            name: "霸气外露的xxx体育工作2"
          },
          {
            name: "霸气外露的xxx体育工作3"
          },
          {
            name: "霸气外露的xxx体育工作4"
          },
          {
            name: "霸气外露的xxx体育工作5"
          },
          {
            name: "霸气外露的xxx体育工作6"
          }, {
            name: "霸气外露的xxx体育工作7"
          }, {
            name: "霸气外露的xxx体育工作8"
          }
        ]
      }
    },
    created() {
      //   setInterval(this.scroll, 1000)
      this.scroll()
    },
    methods: {
      add() {
        this.items.push({
          name: "9999999999999"
        }, )
        this.Stop()
        this.scroll()
        console.log(this.items)
      },
      scroll() {
        if (this.items.length == 0 || this.items.length < 8) {
          this.animate = false; // 因为在消息向上滚动的时候需要添加css3过渡动画，所以这里需要设置true
        } else {
          this.animate = true; // 因为在消息向上滚动的时候需要添加css3过渡动画，所以这里需要设置true
          this.ani = setInterval(() => { //  这里直接使用了es6的箭头函数，省去了处理this指向偏移问题，代码也比之前简化了很多
            this.items.push(this.items[0]); // 将数组的第一个元素添加到数组的
            this.items.shift(); //删除数组的第一个元素
            this.animate = false; // margin-top 为0 的时候取消过渡动画，实现无缝滚动
          }, 1000)
        }

      },
      Stop() {
        clearInterval(this.ani);
      },
      Up() {
        this.scroll();
      }
    }
  }

</script>
<style>
  * {
    margin: 0;
    padding: 0;
  }

  .main {
    width: 100%;
    text-align: center;
  }

  .lablelist {
    /* 高度为lableli*显示个数* 高度为lableli的高度*/
    height: 216px;
    width: 300px;
    display: inline-block;
    border: 1px solid darkcyan;
    overflow: hidden;
    margin: 20px auto;
  }

  .lableli {
    height: 30px;
    border-bottom: 1px dashed rgb(238, 91, 6);
  }

  .anim {
    transition: all 0.5s;
  }

</style>
