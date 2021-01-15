<!--
 * @Author: fenglulu
 * @Date: 2021-01-11 15:32:17
 * @LastEditors: fenglulu
 * @LastEditTime: 2021-01-15 11:21:58
 * @FilePath: \demos\src\pages\tblist\tableList.vue
-->
<template>
  <div>
    <svg width="200" height="200">
      <g id="path-group"></g>
      <g id="circle-group"></g>
    </svg>
    <button @click="run">run</button>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        offset: 10,
        pointList: [
          [50, 50 + 5],
          [100 - 5, 50],
          [150, 50 + 4],
          [50 + 3, 100],
          [100, 100 - 3],
          [150 + 2, 100],
          [50, 150 - 4],
          [100 - 5, 150 - 6],
          [150 + 5, 150 - 8]
        ],
        pathList: [{
          id: "line3",
          stroke: "orange"
        }]
      }
    },
    mounted() {
      this.createCircles()
      this.createPaths()
    },
    methods: {
      run() {
        var that = this
        this.pathList.forEach(function (pathObj) {
          var id = pathObj.id;
          var animate = document.querySelector("#" + id + " > animate");
          var animateMotion = document.querySelector("#" + id + "-head > animateMotion");
          animate.beginElement();
          animateMotion.beginElement();
        });
      },
      createCircles() {
        var r = "5",
          fill = "red",
          circleGroup = document.querySelector("#circle-group");
        this.pointList.forEach(function (point) {
          var circle = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "circle"
          );
          circle.setAttribute("r", r);
          circle.setAttribute("cx", point[0]);
          circle.setAttribute("cy", point[1]);
          circle.setAttribute("fill", fill);
          circleGroup.appendChild(circle);
        });
      },
      getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      },
      getRandomPointList() {
        var randomPointList = [];
        for (var i = 0; i <
          10; i++) {
          var int = this.getRandomInt(0, 8);
          var x = this.pointList[int][0];
          var y = this.pointList[int][1];

          randomPointList.push([x, y]);
          console.log('int', int)
        }
        return randomPointList;
      },
      getCtlPoint(startX, startY, endX, endY, offset) {
        var offset = offset || 40;
        var
          angle = Math.atan2(endY - startY, endX - startX);
        var offsetX = Math.sin(angle) * offset;
        var offsetY = -Math.cos(angle) *
          offset;
        var ctlX = (startX + endX) / 2 + offsetX;
        var ctlY = (startY + endY) / 2 + offsetY;
        return [ctlX, ctlY];
      },
      getD(pointList) {
        var that = this
        var offset = offset || 8;
        var d = (['M', pointList[0][0], pointList[0][1]]).join(' ');
        pointList.forEach(function (point, i) {
          if (i > 0) {
            var startX = pointList[i - 1][0],
              startY = pointList[i - 1][1],
              endX = point[0],
              endY = point[1];

            var ctlPoint = that.getCtlPoint(startX, startY, endX, endY, offset);

            if (startX !== endX || startY !== endY) {
              d += ([' Q', ctlPoint[0], ctlPoint[1], endX, endY]).join(' ');
            } else {
              d += ([' A', 10, 10, 0, 1, 1, endX, endY + 0.1]).join(' ');
            }
          }
        })
        return d;
      },
      createPathHead(pathObj, d) {
        var r = 3;
        var head = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        head.setAttribute("id", pathObj.id + "-head");
        head.setAttribute("r", r);
        head.setAttribute("fill", pathObj.stroke);
        var animateMotion = document.createElementNS("http://www.w3.org/2000/svg", "animateMotion");
        animateMotion.setAttribute("path", d);
        animateMotion.setAttribute("begin", "indefinite");
        animateMotion.setAttribute("dur", "7s");
        animateMotion.setAttribute("fill", "freeze");
        animateMotion.setAttribute("rotate", "auto");
        // animateMotion.setAttribute("repeatCount", "indefinite");
        head.appendChild(animateMotion);

        return head;
      },
      createPaths() {
        var pathGroup = document.querySelector("#path-group");
        var that = this

        this.pathList.forEach(function (pathObj) {
          var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
          var d = that.getD(that.getRandomPointList());
          path.setAttribute("id", pathObj.id);
          path.setAttribute("stroke", pathObj.stroke);
          path.setAttribute("stroke-opacity", 0.6);
          path.setAttribute("stroke-width", 10);
          path.setAttribute("fill", "none");
          path.setAttribute("d", d);
          var length = path.getTotalLength();
          path.setAttribute("stroke-dasharray", length + " " + length);
          path.setAttribute("stroke-dashoffset", length);
          path.innerHTML =
            ' <animate attributeName="stroke-dashoffset" to="0" dur="7s" begin="indefinite" fill="freeze" />';
          var pathHead = that.createPathHead(pathObj, d)
          pathGroup.appendChild(path);
          pathGroup.appendChild(pathHead);
        });
      },

    },
    props: {
      headerList: {
        type: Array,
        default: []
      },
      mainList: {
        type: Array,
        default: []
      }
    },
  }

</script>
<style>
  .boder {
    width: 100px;
    height: 2px;
    background: brown;
    transform: rotate(10deg);
  }

</style>
