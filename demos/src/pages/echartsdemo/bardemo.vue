<template>
  <div>
    <div id="main" style="width: 600px;height:400px;"></div>

  </div>
</template>
<script>
  export default {
    name: 'pie',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        datas: [{
            "warnDate": "2020-10-11",
            "warnCounts": null
          },
          {
            "warnDate": "2020-10-12",
            "warnCounts": null
          }, {
            "warnDate": "2020-10-12",
            "warnCounts": null
          },
          {
            "warnDate": "2020-10-13",
            "warnCounts": [{
                "warnType": 1,
                "warnName": "SOS",
                "warnCount": 2,
                "warnDate": "2020-10-13"
              },
              {
                "warnType": 2,
                "warnName": "倒地",
                "warnCount": 547,
                "warnDate": "2020-10-13"
              },
              {
                "warnType": 3,
                "warnName": "脱帽",
                "warnCount": 531,
                "warnDate": "2020-10-13"
              },
              {
                "warnType": 4,
                "warnName": "低电量",
                "warnCount": 573,
                "warnDate": "2020-10-13"
              },
              {
                "warnType": 5,
                "warnName": "不受控",
                "warnCount": 24,
                "warnDate": "2020-10-13"
              }
            ]
          },
          {
            "warnDate": "2020-10-14",
            "warnCounts": [{
                "warnType": 10000,
                "warnName": "SOS",
                "warnCount": 2,
                "warnDate": "2020-10-14"
              },
              {
                "warnType": 2,
                "warnName": "倒地",
                "warnCount": 7822,
                "warnDate": "2020-10-14"
              },
              {
                "warnType": 3,
                "warnName": "脱帽",
                "warnCount": 7824,
                "warnDate": "2020-10-14"
              },
              {
                "warnType": 4,
                "warnName": "低电量",
                "warnCount": 8404,
                "warnDate": "2020-10-14"
              },
              {
                "warnType": 5,
                "warnName": "不受控",
                "warnCount": 24,
                "warnDate": "2020-10-14"
              }
            ]
          },
          {
            "warnDate": "2020-10-15",
            "warnCounts": [{
                "warnType": 25,
                "warnName": "倒地",
                "warnCount": 3139,
                "warnDate": "2020-10-15"
              },
              {
                "warnType": 3,
                "warnName": "脱帽",
                "warnCount": 3164,
                "warnDate": "2020-10-15"
              },
              {
                "warnType": 4,
                "warnName": "低电量",
                "warnCount": 3432,
                "warnDate": "2020-10-15"
              },
              {
                "warnType": 5,
                "warnName": "不受控",
                "warnCount": 30,
                "warnDate": "2020-10-15"
              },
              {
                "warnType": 6,
                "warnName": "超员",
                "warnCount": 30019,
                "warnDate": "2020-10-15"
              },
              {
                "warnType": 7,
                "warnName": "超时",
                "warnCount": 6768,
                "warnDate": "2020-10-15"
              },
              {
                "warnType": 8,
                "warnName": "未授权",
                "warnCount": 10688,
                "warnDate": "2020-10-15"
              }
            ]
          },
          {
            "warnDate": "2020-10-16",
            "warnCounts": [{
                "warnType": 2,
                "warnName": "倒地",
                "warnCount": 3561,
                "warnDate": "2020-10-16"
              },
              {
                "warnType": 3,
                "warnName": "脱帽",
                "warnCount": 3581,
                "warnDate": "2020-10-16"
              },
              {
                "warnType": 4,
                "warnName": "低电量",
                "warnCount": 3893,
                "warnDate": "2020-10-16"
              },
              {
                "warnType": 5,
                "warnName": "不受控",
                "warnCount": 24,
                "warnDate": "2020-10-16"
              },
              {
                "warnType": 6,
                "warnName": "超员",
                "warnCount": 33590,
                "warnDate": "2020-10-16"
              },
              {
                "warnType": 7,
                "warnName": "超时",
                "warnCount": 5592,
                "warnDate": "2020-10-16"
              },
              {
                "warnType": 8,
                "warnName": "未授权",
                "warnCount": 11801,
                "warnDate": "2020-10-16"
              }
            ]
          },
          {
            "warnDate": "2020-10-17",
            "warnCounts": null
          },

        ],
        dataZoomEndPercent: 100,
      }
    },
    mounted() {
      this.drawLine();
    },
    methods: {
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('main'))
        console.log(this.datas)
        let bardata = [
          ['product', 'sos', '脱帽', '倒地', '低电量', '超员', '超时', '未授权'],
        ]
        for (let i = 0, len = this.datas.length; i < len; i++) {

          if (this.datas[i].warnCounts == null) {
            let arr = [this.datas[i].warnDate, 0, 0, 0, 0, 0, 0, 0]
            bardata.push(arr)
          } else {
            let a1 = 0,
              a2 = 0,
              a3 = 0,
              a4 = 0,
              a5 = 0,
              a6 = 0,
              a7 = 0
            for (let j = 0, len = this.datas[i].warnCounts.length; j < len; j++) {
              let name = this.datas[i].warnCounts[j].warnName,
                warnCount = this.datas[i].warnCounts[j].warnCount
              if (name == 'SOS') {
                a1 = warnCount
              }
              if (name == '倒地') {
                a2 = warnCount
              }
              if (name == '脱帽') {
                a3 = warnCount
              }
              if (name == '低电量') {
                a4 = warnCount
              }
              if (name == '超员') {
                a5 = warnCount
              }
              if (name == '超时') {
                a6 = warnCount
              }
              if (name == '未授权') {
                a7 = warnCount
              }
            }
            let arr = [this.datas[i].warnDate, a1, a2, a3, a4, a5, a6, a7]
            bardata.push(arr)
          }

        }

        if (this.datas.length > 7) {
          this.dataZoomEndPercent = Math.ceil(
            (8 / (this.datas.length + 1)) * 100
          );
        } else {
          this.dataZoomEndPercent = 100;
        }
        console.log(bardata)
        // 绘制图表
        myChart.setOption({
          legend: {},
          tooltip: {},
          dataset: {
            source: bardata
          },
          xAxis: {
            type: 'category',
            axisLabel: {
              interval: 0,
              rotate: 40
            },
          },
          dataZoom: [{
              show: true,
              realtime: true,
              start: 0,
              end: this.dataZoomEndPercent,

              textStyle: {
                color: "#3897c5"
              },
              handleStyle: {
                color: "#008acd"
              },
              borderColor: "#3897c5",
              // fillerColor:"#3897c5",

              bottom: 10,
              height: 15
            },
            {
              type: "inside",
              realtime: true,
              start: 0,
              end: this.dataZoomEndPercent
            }
          ],
          yAxis: {},
          // Declare several bar series, each will be mapped
          // to a column of dataset.source by default.
          series: [{
              type: 'bar',
              barWidth: 5,
            //   barGap: '50%',
              barCategoryGap: '10%',

            },
            {
              type: 'bar',
              barWidth: 5,
            //   barGap: '50%',
              barCategoryGap: '10%',
            }, {
              type: 'bar',
              barWidth: 5,
            //   barGap: '50%',
              barCategoryGap: '10%',
            }, {
              type: 'bar',
              barWidth: 5,
            //   barGap: '50%',
              barCategoryGap: '10%',
            }, {
              type: 'bar',
              barWidth: 5,
            //   barGap: '50%',
              barCategoryGap: '10%',
            }, {
              type: 'bar',
              barWidth: 5,
            //   barGap: '50%',
              barCategoryGap: '10%',
            },
            {
              type: 'bar',
              barWidth: 5,
            //   barGap: '50%',
              barCategoryGap: '10%',
            }
          ]
        });
      }
    }
  }

</script>
<style></style>
