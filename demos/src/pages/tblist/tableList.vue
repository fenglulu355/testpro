<!--
 * @Author: fenglulu
 * @Date: 2021-01-11 15:32:17
 * @LastEditors: fenglulu
 * @LastEditTime: 2021-01-18 14:35:30
 * @FilePath: \demos\src\pages\tblist\tableList.vue
-->
<template>
  <div>
    <svg v-if="isShowSvg" width="500" height="300">
      <g id="circle-group"></g>

      <g id="path-group"></g>
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
          [184.6467982554595, 78.2373734952251],
          [170.1738337984852, 14.2386683188624],
          [160.5938030032867, 77.4063956934342],
          [160.584064640516, 77.4054299053909],
          [170.1738337984852, 14.2386683188624],
          [115.9661001029426, 71.8766218704218],
          [170.1738337984852, 14.2386683188624],
          [168.9973430206664, 14.0610478878089],
          [199.294910434148, 90.4034351373638],
          [199.299455411695, 90.402897680857],
          [172.255812728621, 14.8257886341407],
          [154.0075400296405, 71.8717214813627],
          [115.978230015233, 71.8751874738335],
          [175.6550199383923, 81.1371295745395],
          [191.9233324700076, 99.9019040870289],

        ],
        d: 'd M 2840.6467982554595 608.2373734952251L 2702.1738337984852 614.2386683188624L 2605.5938030032867 607.4063956934342L 2605.584064640516 607.4054299053909L 2702.1738337984852 614.2386683188624L 3153.9661001029426 571.8766218704218L 2702.1738337984852 614.2386683188624L 2683.9973430206664 614.0610478878089L 2702.1738337984852 614.2386683188624L 2997.294910434148 590.4034351373638L 2997.299455411695 590.402897680857L 2762.255812728621 614.8257886341407L 3154.0075400296405 571.8717214813627L 3153.978230015233 571.8751874738335L 3075.6550199383923 581.1371295745395L 2918.9233324700076 599.9019040870289L 2702.1738337984852 614.2386683188624L 2605.6449532238407 607.41146844258L 2702.1738337984852 614.2386683188624L 2997.2623292655303 590.4072879531129L 2840.5787543501897 608.2431433000579L 2702.1738337984852 614.2386683188624L 2605.585369879828 607.4055593506118L 2605.6564540443524 607.4126090198208L 2702.1738337984852 614.2386683188624L 2997.299931266456 590.4028414096796L 3153.9402612198887 571.8796773917488L 2997.341375290481 590.3979405360999L 3153.9976781798805 571.8728876731134',
        pathList: [{
          id: "line3",
          stroke: "orange"
        }],
        isShowSvg: false
      }
    },
    mounted() {

    },
    methods: {
      run() {
        this.isShowSvg = true
        this.getSvgInfo()

      },
      getSvgInfo() {
        var that = this
        setTimeout(() => {
          that.createCircles()
          that.createPaths()
          that.pathList.forEach(function (pathObj) {
            var id = pathObj.id;
            var animate = document.querySelector("#" + id + " > animate");
            var animateMotion = document.querySelector("#" + id + "-head > animateMotion");
            animate.beginElement();
            animateMotion.beginElement();
          });
        }, 200);
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
            d += (['L', pointList[i][0], pointList[i][1]]).join(' ');
          }
        })
        return d;
      },
      createPathHead(pathObj, d) {
        var r = 3;
        var head = document.createElementNS("http://www.w3.org/2000/svg", "image");
        head.setAttribute("id", pathObj.id + "-head");
        head.setAttribute("width", '100px');
        head.setAttribute("height", '110px');
        head.setAttribute("x", '-90');
        head.setAttribute("y", '-100');
        head.setAttribute("stroke", pathObj.stroke);
        head.href.baseVal = '/static/img/huise2-2.png'
        // head.setAttribute("xlink:href", '../../assets/huise2-2.png');
        head.setAttribute("preserveAspectRatio", 'none');
        var animateMotion = document.createElementNS("http://www.w3.org/2000/svg", "animateMotion");
        animateMotion.setAttribute("path", d);
        animateMotion.setAttribute("begin", "indefinite");
        animateMotion.setAttribute("dur", "7s");
        animateMotion.setAttribute("fill", "freeze");
        // animateMotion.setAttribute("rotate", "auto");
        // animateMotion.setAttribute("repeatCount", "indefinite");
        head.appendChild(animateMotion);

        return head;
      },
      createPathText(pathObj, d) {
        var head = document.createElementNS("http://www.w3.org/2000/svg", "text");
        head.setAttribute("id", pathObj.id + "-head");
        head.setAttribute("x", '-90');
        head.setAttribute("y", '-110');
        head.style.setProperty("font-size", "12");
        head.setAttribute("stroke", pathObj.stroke);
        head.setAttribute("preserveAspectRatio", 'none');
        var animateMotion = document.createElementNS("http://www.w3.org/2000/svg", "animateMotion");
        animateMotion.setAttribute("path", d);
        animateMotion.setAttribute("dur", "7s");
        animateMotion.setAttribute("fill", "freeze");
        head.innerHTML = pathObj.id
        head.appendChild(animateMotion);


        return head;
      },
      createPaths() {
        var pathGroup = document.querySelector("#path-group");
        var that = this
        this.pathList.forEach(function (pathObj) {
          var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
          var d = that.getD(that.pointList);
          console.log('d', d)
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
          var pathText = that.createPathText(pathObj, d)

          pathGroup.appendChild(path);
          pathGroup.appendChild(pathHead);
          pathGroup.appendChild(pathText);

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
