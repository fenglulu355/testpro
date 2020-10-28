<template>
  <div>
    <p @click="change">dian</p>
    <p @click="change1">111</p>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        arr: ['2020', '4', '21'],
        sarr: ['2020', '04', '9'],
        earr: ['2020', '10', '22']
      }
    },
    methods: {
      change1() {
        var mydate1 = new Date("2020-4-08");
        var mydate2 = new Date("2020-10-02");
        console.log(mydate1, mydate2)
        let a = this.compare(mydate1, mydate2, 6)
        console.log(a)
      },
      compare(mydate1, mydate2, month) {
        console.log(mydate1, mydate2, month)
        mydate1.setMonth(mydate1.getMonth() + month);
        var y = mydate1.getFullYear();
        var m = parseInt(mydate1.getMonth()) + 1;
        var d = mydate1.getDate();
        if (m >= (mydate2.getMonth() + 1)) {
          return true;
        }
        return false;
      },
      change() {
        let arr = this.arr,
          sarr = this.sarr,
          earr = this.earr,
          a = sarr[1].split(''),
          b = earr[1].split('')
        console.log(arr, sarr, earr, a, b)
        a[0] == 0 ? a = Number(a[1]) : a = Number(sarr[1])
        b[0] == 0 ? b = Number(b[1]) : b = Number(earr[1])
        console.log(a, b)
        // 同一年
        if (sarr[0] == earr[0]) {
          console.log('同一年')
          let m = b - a
          if (m == 6) {

          }

        }
      },
    }
  }

</script>
<style></style>
