<template>
  <div class="safecenter">
    <div class="ScTop">
      <!-- 告警次数 -->
      <div class="STLeft padding">
        <div class="w_title">
          <span>统计时段：</span>年/月/日
          <span>至:</span> 年/月/日
        </div>
        <div class="AlarmTimes">
          <div class="title">告警总次数</div>
          <div id="ATimeList" class="ATimeList"></div>
          <!-- <ul class="ATimeList">
            <li class="ATimeLi" v-for="(item, index) in Alarmtimes" :key="index">
              <div class="round" :style="{'background':item.color}">
                <p>{{item.name}}{{item.num}}</p>
              </div>
            </li>
          </ul> -->
        </div>
      </div>
      <!-- 告警趋势 -->

      <div class="STCenter padding">
        <div class="title" @click="add">告警触发趋势</div>
        <div id="trend" class="trend"></div>
      </div>
      <!-- 告警列表 -->
      <div class="STRight padding">
        <div class="overmen list">
          <p class="text">超员排行</p>
          <div class="lablebox"></div>
        </div>
        <div class="overtime list">
          <p class="text">超时排行</p>
          <div class="lablebox"></div>
        </div>
        <div class="unauth list">
          <p class="text">未授权排行</p>
          <div class="lablebox"></div>
        </div>
      </div>
    </div>
    <div class="ScBot">
      <!-- 巡检情况 -->
      <div class="ScBLeft padding ">
        <div class="title">巡检情况</div>
        <div class="content ">
          <div class="bleft">
            <div class="w_title">
              <p>巡检任务共计：276条</p>
              <p style="display:flex;  justify-content: space-between;"><span>已完成：276条</span><span>待巡检：262条</span></p>
            </div>
            <div class="BLmain">
              <div class="w_title" style="border:none;text-align: center;">
                <p>历史巡检情况统计</p>
              </div>
              <div id="Inspection" class="Inspection"></div>
            </div>
          </div>
          <div class="lablebox">
            <div class="item lbheader">
              <p>姓名</p>
              <p>历史应巡点数</p>
              <p>历史漏巡点数</p>
              <p>漏巡比例</p>
            </div>
            <div class="nodata" v-if="list.length==0">暂无数据</div>
            <ul class="lablelist" v-else>
              <li class="lableli" v-for="(item,index) in list" :key="index">
                <div class="item">
                  <p>{{item.name}}</p>
                  <p>{{item.data1}}</p>
                  <p>{{item.data1}}</p>
                  <p>{{item.data1}}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

      </div>
      <!-- 作业票情况 -->
      <div class="ScBCenter padding">
        <div class="title">作业票情况</div>
        <div class="content">
          <div id="workpie" class="workpie"></div>
          <div id="workbar" class="workbar"></div>
        </div>
        <div class="lablebox"></div>

      </div>
      <div class="ScBRight padding">
        <!-- 隐患排查情况 -->
        <div class="title">隐患排查情况</div>
        <div class="content">
          <div id="dangerbar" class="dangerbar danger"></div>
          <div id="dangerpie" class="dangerpie danger"></div>

        </div>

      </div>
    </div>
  </div>
</template>
<script>
  import scdata from '../data.js'
  export default {
    name: 'pie',
    data() {
      return {
        list: [
          //     {
          //   'name': "李四",
          //   'data1': '10'
          // }
          // , {
          //   'name': "李四",
          //   'data1': '10',
          // }, {
          //   'name': "李四",
          //   'data1': '10',
          // }, {
          //   'name': "李四",
          //   'data1': '10'
          // }, {
          //   'name': "李四",
          //   'data1': '10',
          // }, {
          //   'name': "李四",
          //   'data1': '10',
          // }, {
          //   'name': "李四",
          //   'data1': '10',
          // }, {
          //   'name': "李四",
          //   'data1': '10',
          // }, {
          //   'name': "李四",
          //   'data1': '10',

          // }
        ],
        aaa: 1200,
        datas: [
          ['product', 'sos', '脱帽', '倒地', '低电量', '超员', '超时', '未授权'],
          ['9.30', 1, 2, 3, 4, 5, 6, 7],

        ],
        drawworkbars: [
          ['吊装', 1],
          ['动土', 5],
          ['动火', 2],
          ['动电', 1],
          ['盲板油堵', 1],
          ['受限空间', 1],
          ['高处作业', 1],
        ],
        recordEcharts: {
          name: "总趋势",
          color: ["#00e6f5", "#3e95f6"],
          legendData: ["告警", "处理"],
          xData: [],
          totalData: [],
          dataZoomEndPercent: 100
        },
        Alarmtimes: [{
          name: 'sos',
          num: 1,
          color: '#4db5f2'
        }, {
          name: '脱帽',
          num: 1,
          color: '#219be6'

        }, {
          name: '倒地',
          num: 1,
          color: '#ea6a1e'

        }, {
          name: '低电量',
          num: 1,
          color: '#ffc000'

        }, {
          name: '超员',
          num: 1,
          color: '#4472c4'

        }, {
          name: '超时',
          num: 1,
          color: '#70ad47'

        }, {
          name: '未授权',
          num: 1,
          color: '#255e91'

        }]
      }
    },
    created() {
      this.scdata
    },
    mounted() {
      this.drawallnum()
      this.drawtrend()
      this.drawinsp()
      this.drawworkpie()
      this.drawworkbar()
      this.drawdgbar()
      this.drawdgpie()
    },

    methods: {
      add() {

        console.log(this.datas)
        let a = ['10.0' + this.datas.length, 1, 2, 1, 1, 0, 3, 6]
        this.datas.push(a)
        //dataZoom 百分比
        if (this.datas.length > 6) {
          this.recordEcharts.dataZoomEndPercent = Math.ceil(
            (7 / (this.datas.length + 1)) * 100
          );
        } else {
          this.recordEcharts.dataZoomEndPercent = 100;
        }

        this.drawtrend()

      },
      //   告警总数
      drawallnum() {
        let myChart = echarts.init(document.getElementById('ATimeList'))
        let datas = [{
            value: 214,
            name: 'sos'
          },
          {
            value: 30,
            name: '脱帽'
          }, {
            value: 30,
            name: '倒地'
          }, {
            value: 100,
            name: '低电量'
          }, {
            value: 20,
            name: '超员'
          }, {
            value: 10,
            name: '超时'
          }, {
            value: 60,
            name: '未授权'
          },
        ]
        myChart.setOption({
          legend: {},
          tooltip: {},
          dataset: {
            source: datas
            // [
            //   ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
            //   ['Matcha Latte', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
            //   ['Milk Tea', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
            //   ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
            //   ['Walnut Brownie', 55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
            // ]
          },
          series: [{
            type: 'pie',
            radius: 60,
            center: ['25%', '30%'],
            encode: {
              itemName: 'sos',
              value: 'sos'
            }
            // No encode specified, by default, it is '2012'.
          }, {
            type: 'pie',
            radius: 60,
            center: ['75%', '30%'],
            encode: {
              itemName: 'product',
              value: '脱帽'
            }
          }, {
            type: 'pie',
            radius: 60,
            center: ['25%', '75%'],
            encode: {
              itemName: 'product',
              value: '2014'
            }
          }, {
            type: 'pie',
            radius: 60,
            center: ['75%', '75%'],
            encode: {
              itemName: 'product',
              value: '2015'
            }
          }]
        })
      },
      // 告警趋势
      drawtrend() {
        let myChart = echarts.init(document.getElementById('trend'))
        myChart.setOption({
          legend: {
            textStyle: {
              color: "white"
            },
          },
          textStyle: {
            color: "white"
          },
          tooltip: {},
          dataset: {
            source: this.datas
          },
          xAxis: {
            type: 'category',

          },
          yAxis: {
            splitLine: {
              show: false
            }
          },
          dataZoom: [{
              show: true,
              realtime: true,
              start: 0,
              end: this.recordEcharts.dataZoomEndPercent,

              textStyle: {
                color: "#3897c5"
              },
              handleStyle: {
                color: "#008acd"
              },
              borderColor: "#3897c5",
              // fillerColor:"#3897c5",

              bottom: 0,
              height: 15
            },
            {
              type: "inside",
              realtime: true,
              start: 0,
              end: this.recordEcharts.dataZoomEndPercent
            }
          ],
          series: [{
              type: 'bar',
              //   barWidth: 2,
              itemStyle: {
                color: '#4db5f2'
              },
            },
            {
              type: 'bar',
              itemStyle: {
                color: '#219be6'
              },
            }, {
              type: 'bar',
              itemStyle: {
                color: '#ea6a1e'
              },
            }, {
              type: 'bar',
              itemStyle: {
                color: '#ffc000'
              },
            }, {
              type: 'bar',
              itemStyle: {
                color: '#4472c4'
              },
            }, {
              type: 'bar',
              itemStyle: {
                color: '#70ad47'
              },
            },
            {
              type: 'bar',
              itemStyle: {
                color: '#255e91'
              },
            }
          ]


        })
      },
      //   历史巡检
      drawinsp() {
        let myChart = echarts.init(document.getElementById('Inspection'))
        myChart.setOption({
          tooltip: {
            trigger: 'item',
            formatter: "{b}：{c} "
          },
          color: ['#D06052', '#E29F39', '#4C9BC7'], //环形颜色
          graphic: { //图形中间文字
            type: "text",
            left: "center",
            top: "center",
            style: {
              // text: "应巡点位\n\n共计：" + `${this.infos.patrolTotal}`,
              text: "应巡点位\n\n共计：15",

              textAlign: "center",
              fill: "#fff",
              fontSize: 13
            }
          },
          series: [{
            name: '历史巡检',
            type: 'pie',
            radius: ['40%', '60%'], //饼图大小
            labelLine: { //图形外文字线
              normal: {
                length: 25,
                length2: 40
              }

            },
            label: {
              normal: {
                formatter: ' {c|{c}个}\n\n{b|{b}} ', //图形外文字上下显示
                borderWidth: 20,
                borderRadius: 4,
                padding: [0, -35], //文字和图的边距
                rich: {
                  b: { //name 文字样式
                    fontSize: 12,
                    color: '#CDCDD0',
                    align: "center"

                  },
                  c: { //value 文字样式
                    fontSize: 12,
                    color: '#63BF6A',
                    align: "center"
                  }
                }
              }
            },
            data: [{
                value: 1,
                name: '正常'
              },
              {
                value: 0,
                name: '异常'
              },
              {
                value: 0,
                name: '漏巡'
              }
            ]
          }]

        })
      },
      //  作业票饼图
      drawworkpie() {
        let myChart = echarts.init(document.getElementById('workpie'))
        myChart.setOption({
          tooltip: {
            trigger: 'item',
            formatter: "{b}：{c} "
          },
          color: ['#D06052', '#E29F39', '#4C9BC7'], //环形颜色
          graphic: { //图形中间文字
            type: "text",
            left: "center",
            top: "center",
            style: {
              text: "作业票",
              textAlign: "center",
              fill: "#fff",
              fontSize: 13
            }
          },
          series: [{
            name: '作业票',
            type: 'pie',
            radius: ['38%', '50%'], //饼图大小
            labelLine: { //图形外文字线
              normal: {
                length: 15,
                length2: 30
              }

            },
            label: {
              normal: {
                formatter: ' {c|{c}%}\n\n{b|{b}} ', //图形外文字上下显示
                borderWidth: 20,
                borderRadius: 4,
                padding: [0, -30], //文字和图的边距
                rich: {
                  b: { //name 文字样式
                    fontSize: 12,
                    color: '#CDCDD0',
                    align: "center"

                  },
                  c: { //value 文字样式
                    fontSize: 15,
                    color: '#63BF6A',
                    align: "center"
                  }
                }
              }
            },
            data: [{
                value: 10,
                name: '已拒绝'
              },
              {
                value: 20,
                name: '待确认'
              },
              {
                value: 30,
                name: '已撤销'
              },
              {
                value: 20,
                name: '待审核'
              },
              {
                value: 20,
                name: '已通过'
              }
            ]
          }]

        })
      },
      //   作业票柱状图
      drawworkbar() {
        let myChart = echarts.init(document.getElementById('workbar'))
        myChart.setOption({
          //   legend: {
          //     textStyle: {
          //       color: "white"
          //     },
          //   },
          textStyle: {
            color: "white"
          },
          tooltip: {},
          dataset: {
            source: this.drawworkbars
          },
          xAxis: {
            type: 'category',
            axisLabel: {
              interval: 0,
              rotate: 40
            }
          },
          yAxis: {},

          series: [{
              type: 'bar',
              barWidth: 10,
              itemStyle: {
                color: '#4db5f2'
              },
            },

          ]


        })
      },
      //   隐患柱图
      drawdgbar() {
        let myChart = echarts.init(document.getElementById('dangerbar'))
        let datas = [
          ['product', '待处理', '处理中', '复查中', '整改完成'],
          ['1', 2, 1, 5.8, 2]
        ]
        myChart.setOption({
          legend: {
            bottom: 0,
            textStyle: {
              color: "white"
            },
          },
          textStyle: {
            color: "white"
          },
          tooltip: {},
          dataset: {
            source: datas
          },
          xAxis: {
            type: 'category',
            show: false,

          },
          yAxis: {
            show: false,
            type: 'category',
            type: 'value'
          },
          series: [{
            type: 'bar',
            itemStyle: {
              color: '#5399d9',
              normal: {
                label: {
                  formatter: `${datas[1][1]}`,
                  show: true,
                  position: "top",
                  textStyle: {
                    fontWeight: "bolder",
                    fontSize: "12",
                    color: "#fff"
                  }
                }
              }

            },
          }, {
            type: 'bar',
            itemStyle: {
              color: '#f37925',
              normal: {
                label: {
                  formatter: `${datas[1][2]}`,
                  show: true,
                  position: "top",
                  textStyle: {
                    fontWeight: "bolder",
                    fontSize: "12",
                    color: "#fff"
                  }
                }
              }
            },
          }, {
            type: 'bar',
            itemStyle: {
              color: '#a5a5a5',
              normal: {
                label: {
                  formatter: `${datas[1][3]}`,
                  show: true,
                  position: "top",
                  textStyle: {
                    fontWeight: "bolder",
                    fontSize: "12",
                    color: "#fff"
                  }
                }
              }
            },
          }, {
            type: 'bar',
            itemStyle: {
              color: '#ffc623',
              normal: {
                label: {
                  formatter: `${datas[1][4]}`,
                  show: true,
                  position: "top",
                  textStyle: {
                    fontWeight: "bolder",
                    fontSize: "12",
                    color: "#fff"
                  }
                }
              }
            },
          }]

        })
      },
      //   隐患饼图
      drawdgpie() {
        let myChart = echarts.init(document.getElementById('dangerpie'))
        let datas = [
          ['product', '待处理', '处理中', '复查中', '整改完成'],
          ['1', 2, 1, 5.8, 2]
        ]
        myChart.setOption({
          legend: {
            show: false,
            bottom: 0,
            textStyle: {
              color: "white"
            },
          },
          textStyle: {
            color: "white"
          },
          tooltip: {},
          dataset: {
            source: datas
          },
          xAxis: {
            type: 'category',
            show: false,

          },
          yAxis: {
            show: false,
            type: 'category',
            type: 'value'
          },
          series: [{
            name: '隐患排查',
            type: 'pie',
            radius: '70%',
            center: ['50%', '50%'],
            labelLine: { //图形外文字线
              normal: {
                length: 15,
                length2: 30
              }

            },
            label: {
              normal: {
                formatter: ' {c|{c}%}\n\n{b|{b}} ', //图形外文字上下显示
                borderWidth: 20,
                borderRadius: 4,
                padding: [0, -35], //文字和图的边距
                rich: {
                  b: { //name 文字样式
                    fontSize: 12,
                    color: '#CDCDD0',
                    align: "center"

                  },
                  c: { //value 文字样式
                    fontSize: 12,
                    color: '#63BF6A',
                    align: "center"
                  }
                }
              }
            },
            data: [{
                value: 15,
                name: '已拒绝'
              },
              {
                value: 9,
                name: '待确认'
              },
              {
                value: 16,
                name: '已撤销'
              },
              {
                value: 16,
                name: '待审核'
              },
              {
                value: 25,
                name: '已通过'
              }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }]

        })
      },
    }
  }

</script>
<style lang="less" scoped>
  .lablebox {
    width: 100%;

    .nodata {
      color: white;
      text-align: center;
      line-height: 70px;
      border: 1px solid #2b3744;

    }

    .item {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      text-align: center;
      font-size: 16px;
      color: #5cd2d5;

      p {
        line-height: 40px;
        border-left: 1px solid #2b3744;
        border-bottom: 1px solid #2b3744;
      }
    }

    .lbheader {
      background: #2b3744;
      color: white;

      p {
        font-size: 16px;
        box-sizing: border-box;
        padding: 10px 0;
        border-left: 1px solid #3f464e;
        line-height: 25px;
      }
    }

    .lablelist {
      border: 1px solid #2b3744;
    }
  }

  .w_title {
    color: white;
    width: 100%;
    line-height: 50px;
    font-size: 24px;
    border-bottom: 2px solid #3dbfc4;

  }

  .title {
    margin: 0 auto;
    color: #3dbfc4;
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    text-align: center;
    font-weight: bold;
    border-bottom: 2px solid #3dbfc4;
  }

  .padding {
    box-sizing: border-box;
    padding: 0 10px;
  }

  .safecenter {
    min-width: 1200px;
    background: #031121;
    width: 100%;

    .ScTop {
      width: 100%;
      display: grid;
      grid-template-columns: 26% 37% 37%;
      border-bottom: 2px solid #0f8cc8;

      .STLeft {
        width: 100%;
        border-right: 2px solid #0f8cc8;

        .AlarmTimes {
          width: 100%;
          height: 400px;

          .ATimeList {
            width: 100%;
            // display: flex;
            // justify-content: space-around;
            // align-items: center;
            // flex-wrap: wrap;
            height: 300px;

            .ATimeLi {
              width: 25%;
              margin-top: 50px;

              .round {
                width: 90px;
                height: 90px;
                border-radius: 50%;
                text-align: center;
                color: white;
                box-sizing: border-box;
                padding-top: 5px;

                p {
                  margin: 0 auto;
                  width: 75px;
                  height: 75px;
                  border-radius: 50%;
                  line-height: 75px;
                  border: 2px solid #031121;
                }
              }
            }
          }
        }
      }

      .STCenter {
        width: 100%;
        border-right: 2px solid #0f8cc8;

        .trend {
          width: 100%;
          height: 400px;
        }
      }

      .STRight {
        width: 100%;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;

        .list {
          width: 100%;
          height: 220px;
          display: flex;
          justify-content: space-between;
          align-items: center;

          .text {
            box-sizing: border-box;
            padding: 0 10px;
            width: 20px;
            text-align: center;
            word-wrap: break-word;
          }

          .lablebox {
            width: calc(100% - 40px);
            height: 100%;
            // border: 1px solid #0f8cc8;
          }
        }

        .overmen {
          width: 100%;
        }

        .overtime {
          width: 49%;
        }

        .unauth {
          width: 50%;
        }
      }
    }

    .ScBot {
      width: 100%;
      display: grid;
      grid-template-columns: 40% 40% 20%;

      .ScBLeft {

        width: 100%;
        border-right: 2px solid #0f8cc8;

        .content {
          display: flex;
          justify-content: space-between;
          box-sizing: border-box;
          padding: 10px 0px;

          .bleft {
            width: 50%;
            border-right: 2px solid #3dbfc4;
            box-sizing: border-box;
            padding-right: 10px;

            .BLmain {
              //   background: brown;
              box-sizing: border-box;
              padding-top: 20px;
            }

            .Inspection {
              margin-top: 20px;
              width: 100%;
              height: 240px;
            }
          }

          .lablebox {
            width: 48%;
            height: 500px;
            // border: 1px solid #0f8cc8;
          }
        }




      }

      .ScBCenter {
        width: 100%;
        border-right: 2px solid #0f8cc8;

        .content {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;

          .workpie {
            width: 40%;
            height: 300px;
          }

          .workbar {
            width: 60%;
            height: 300px;
          }

        }

        .lablebox {
          width: 100%;
          height: 210px;
          //   border: 1px solid #0f8cc8;
        }
      }

      .ScBRight {
        width: 100%;

        .danger {
          width: 100%;
          height: 250px;
        }
      }
    }
  }

</style>
