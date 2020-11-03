<template>

  <section class="showChose" v-show="showChose">

    <section class="title">
      <div class="area" @click="provinceSelected()">{{Province?Province:info[province-1].name}}</div>
      <div class="area" @click="citySelected()" :class="City?'':'active'">{{City?City:'请选择'}}</div>
      <!--<div class="area" @click="districtSelected()" :class="District?'':'active'" v-show="City">{{District?District:'请选择'}}</div>-->
    </section>
    <section class="title">
      <div class="area">全部</div>
    </section>
    <ul>
      <li class="addList" v-for="(v,k) in info" @click="getProvinceId(v.id, v.name, k)" v-show="showProvince"
        :class="v.selected ? 'active' : ''">{{v.name}}</li>
      <li class="addList" v-for="(v,k) in showCityList" @click="getCityId(v.id, v.name, k)" v-show="showCity"
        :class="v.selected ? 'active' : ''">{{v.name}}</li>
      <!--<li class="addList" v-for="(v,k) in showDistrictList" @click="getDistrictId(v.id, v.name, k)" v-show="showDistrict" :class="v.selected ? 'active' : ''">{{v.name}}</li>-->
    </ul>
  </section>
</template>

<script>
  export default {
    name: 'myAddress',
    data() {
      return {
        showChose: true,
        showProvince: true,
        showCity: false,
        showDistrict: false,
        showCityList: false,
        showDistrictList: false,
        province: 5,
        city: 3,
        district: 57,
        GetProvinceId: 2,
        District: false,
        Province: false,
        City: false,
        // v-for循环判断是否为当前
        selected: false,
        info: [{
            id: 1,
            name: '北京',
            city: [{
              id: 1,
              name: '北京市',
              district: [{
                  id: 1,
                  name: '东城区'
                },
                {
                  id: 2,
                  name: '西城区'
                },
                {
                  id: 3,
                  name: '崇文区'
                },
                {
                  id: 4,
                  name: '宣武区'
                },
                {
                  id: 5,
                  name: '朝阳区'
                },
                {
                  id: 6,
                  name: '丰台区'
                },
                {
                  id: 7,
                  name: '石景山区'
                },
                {
                  id: 8,
                  name: '海淀区'
                },
                {
                  id: 9,
                  name: '门头沟区'
                },
                {
                  id: 10,
                  name: '房山区'
                },
                {
                  id: 11,
                  name: '通州区'
                },
                {
                  id: 12,
                  name: '顺义区'
                },
                {
                  id: 13,
                  name: '昌平区'
                },
                {
                  id: 14,
                  name: '大兴区'
                },
                {
                  id: 15,
                  name: '怀柔区'
                },
                {
                  id: 16,
                  name: '平谷区'
                },
                {
                  id: 17,
                  name: '密云县'
                },
                {
                  id: 18,
                  name: '延庆县'
                }
              ]
            }]
          },
          {
            id: 2,
            name: '天津',
            city: [{
              id: 2,
              name: '天津市',
              district: [{
                  id: 19,
                  name: '和平区'
                },
                {
                  id: 20,
                  name: '河东区'
                },
                {
                  id: 21,
                  name: '河西区'
                },
                {
                  id: 22,
                  name: '南开区'
                },
                {
                  id: 23,
                  name: '河北区'
                },
                {
                  id: 24,
                  name: '红桥区'
                },
                {
                  id: 25,
                  name: '塘沽区'
                },
                {
                  id: 26,
                  name: '汉沽区'
                },
                {
                  id: 27,
                  name: '大港区'
                },
                {
                  id: 28,
                  name: '东丽区'
                },
                {
                  id: 29,
                  name: '西青区'
                },
                {
                  id: 30,
                  name: '津南区'
                },
                {
                  id: 31,
                  name: '北辰区'
                },
                {
                  id: 32,
                  name: '武清区'
                },
                {
                  id: 33,
                  name: '宝坻区'
                },
                {
                  id: 34,
                  name: '宁河县'
                },
                {
                  id: 35,
                  name: '静海县'
                },
                {
                  id: 36,
                  name: '蓟县'
                }
              ]
            }]
          },
          {
            id: 3,
            name: '河北',
            city: [{
                id: 3,
                name: '石家庄市',
                district: [{
                    id: 37,
                    name: '长安区'
                  },
                  {
                    id: 38,
                    name: '桥东区'
                  },
                  {
                    id: 39,
                    name: '桥西区'
                  },
                  {
                    id: 40,
                    name: '新华区'
                  },
                  {
                    id: 41,
                    name: '井陉矿区'
                  },
                  {
                    id: 42,
                    name: '裕华区'
                  },
                  {
                    id: 43,
                    name: '井陉县'
                  },
                  {
                    id: 44,
                    name: '正定县'
                  },
                  {
                    id: 45,
                    name: '栾城县'
                  },
                  {
                    id: 46,
                    name: '行唐县'
                  },
                  {
                    id: 47,
                    name: '灵寿县'
                  },
                  {
                    id: 48,
                    name: '高邑县'
                  },
                  {
                    id: 49,
                    name: '深泽县'
                  },
                  {
                    id: 50,
                    name: '赞皇县'
                  },
                  {
                    id: 51,
                    name: '无极县'
                  },
                  {
                    id: 52,
                    name: '平山县'
                  },
                  {
                    id: 53,
                    name: '元氏县'
                  },
                  {
                    id: 54,
                    name: '赵县'
                  },
                  {
                    id: 55,
                    name: '辛集市'
                  },
                  {
                    id: 56,
                    name: '藁城市'
                  },
                  {
                    id: 57,
                    name: '晋州市'
                  },
                  {
                    id: 58,
                    name: '新乐市'
                  },
                  {
                    id: 59,
                    name: '鹿泉市'
                  }
                ]
              },
              {
                id: 4,
                name: '唐山市',
                district: [{
                    id: 60,
                    name: '路南区'
                  },
                  {
                    id: 61,
                    name: '路北区'
                  },
                  {
                    id: 62,
                    name: '古冶区'
                  },
                  {
                    id: 63,
                    name: '开平区'
                  },
                  {
                    id: 64,
                    name: '丰南区'
                  },
                  {
                    id: 65,
                    name: '丰润区'
                  },
                  {
                    id: 66,
                    name: '滦县'
                  },
                  {
                    id: 67,
                    name: '滦南县'
                  },
                  {
                    id: 68,
                    name: '乐亭县'
                  },
                  {
                    id: 69,
                    name: '迁西县'
                  },
                  {
                    id: 70,
                    name: '玉田县'
                  },
                  {
                    id: 71,
                    name: '唐海县'
                  },
                  {
                    id: 72,
                    name: '遵化市'
                  },
                  {
                    id: 73,
                    name: '迁安市'
                  }
                ]
              },
              {
                id: 5,
                name: '秦皇岛市',
                district: [{
                    id: 74,
                    name: '海港区'
                  },
                  {
                    id: 75,
                    name: '山海关区'
                  },
                  {
                    id: 76,
                    name: '北戴河区'
                  },
                  {
                    id: 77,
                    name: '青龙满族自治县'
                  },
                  {
                    id: 78,
                    name: '昌黎县'
                  },
                  {
                    id: 79,
                    name: '抚宁县'
                  },
                  {
                    id: 80,
                    name: '卢龙县'
                  }
                ]
              },
              {
                id: 6,
                name: '邯郸市',
                district: [{
                    id: 81,
                    name: '邯山区'
                  },
                  {
                    id: 82,
                    name: '丛台区'
                  },
                  {
                    id: 83,
                    name: '复兴区'
                  },
                  {
                    id: 84,
                    name: '峰峰矿区'
                  },
                  {
                    id: 85,
                    name: '邯郸县'
                  },
                  {
                    id: 86,
                    name: '临漳县'
                  },
                  {
                    id: 87,
                    name: '成安县'
                  },
                  {
                    id: 88,
                    name: '大名县'
                  },
                  {
                    id: 89,
                    name: '涉县'
                  },
                  {
                    id: 90,
                    name: '磁县'
                  },
                  {
                    id: 91,
                    name: '肥乡县'
                  },
                  {
                    id: 92,
                    name: '永年县'
                  },
                  {
                    id: 93,
                    name: '邱县'
                  },
                  {
                    id: 94,
                    name: '鸡泽县'
                  },
                  {
                    id: 95,
                    name: '广平县'
                  },
                  {
                    id: 96,
                    name: '馆陶县'
                  },
                  {
                    id: 97,
                    name: '魏县'
                  },
                  {
                    id: 98,
                    name: '曲周县'
                  },
                  {
                    id: 99,
                    name: '武安市'
                  }
                ]
              },
              {
                id: 7,
                name: '邢台市',
                district: [{
                    id: 100,
                    name: '桥东区'
                  },
                  {
                    id: 101,
                    name: '桥西区'
                  },
                  {
                    id: 102,
                    name: '邢台县'
                  },
                  {
                    id: 103,
                    name: '临城县'
                  },
                  {
                    id: 104,
                    name: '内丘县'
                  },
                  {
                    id: 105,
                    name: '柏乡县'
                  },
                  {
                    id: 106,
                    name: '隆尧县'
                  },
                  {
                    id: 107,
                    name: '任县'
                  },
                  {
                    id: 108,
                    name: '南和县'
                  },
                  {
                    id: 109,
                    name: '宁晋县'
                  },
                  {
                    id: 110,
                    name: '巨鹿县'
                  },
                  {
                    id: 111,
                    name: '新河县'
                  },
                  {
                    id: 112,
                    name: '广宗县'
                  },
                  {
                    id: 113,
                    name: '平乡县'
                  },
                  {
                    id: 114,
                    name: '威县'
                  },
                  {
                    id: 115,
                    name: '清河县'
                  },
                  {
                    id: 116,
                    name: '临西县'
                  },
                  {
                    id: 117,
                    name: '南宫市'
                  },
                  {
                    id: 118,
                    name: '沙河市'
                  }
                ]
              },
              {
                id: 8,
                name: '保定市',
                district: [{
                    id: 119,
                    name: '新市区'
                  },
                  {
                    id: 120,
                    name: '北市区'
                  },
                  {
                    id: 121,
                    name: '南市区'
                  },
                  {
                    id: 122,
                    name: '满城县'
                  },
                  {
                    id: 123,
                    name: '清苑县'
                  },
                  {
                    id: 124,
                    name: '涞水县'
                  },
                  {
                    id: 125,
                    name: '阜平县'
                  },
                  {
                    id: 126,
                    name: '徐水县'
                  },
                  {
                    id: 127,
                    name: '定兴县'
                  },
                  {
                    id: 128,
                    name: '唐县'
                  },
                  {
                    id: 129,
                    name: '高阳县'
                  },
                  {
                    id: 130,
                    name: '容城县'
                  },
                  {
                    id: 131,
                    name: '涞源县'
                  },
                  {
                    id: 132,
                    name: '望都县'
                  },
                  {
                    id: 133,
                    name: '安新县'
                  },
                  {
                    id: 134,
                    name: '易县'
                  },
                  {
                    id: 135,
                    name: '曲阳县'
                  },
                  {
                    id: 136,
                    name: '蠡县'
                  },
                  {
                    id: 137,
                    name: '顺平县'
                  },
                  {
                    id: 138,
                    name: '博野县'
                  },
                  {
                    id: 139,
                    name: '雄县'
                  },
                  {
                    id: 140,
                    name: '涿州市'
                  },
                  {
                    id: 141,
                    name: '定州市'
                  },
                  {
                    id: 142,
                    name: '安国市'
                  },
                  {
                    id: 143,
                    name: '高碑店市'
                  }
                ]
              },
              {
                id: 9,
                name: '张家口市',
                district: [{
                    id: 144,
                    name: '桥东区'
                  },
                  {
                    id: 145,
                    name: '桥西区'
                  },
                  {
                    id: 146,
                    name: '宣化区'
                  },
                  {
                    id: 147,
                    name: '下花园区'
                  },
                  {
                    id: 148,
                    name: '宣化县'
                  },
                  {
                    id: 149,
                    name: '张北县'
                  },
                  {
                    id: 150,
                    name: '康保县'
                  },
                  {
                    id: 151,
                    name: '沽源县'
                  },
                  {
                    id: 152,
                    name: '尚义县'
                  },
                  {
                    id: 153,
                    name: '蔚县'
                  },
                  {
                    id: 154,
                    name: '阳原县'
                  },
                  {
                    id: 155,
                    name: '怀安县'
                  },
                  {
                    id: 156,
                    name: '万全县'
                  },
                  {
                    id: 157,
                    name: '怀来县'
                  },
                  {
                    id: 158,
                    name: '涿鹿县'
                  },
                  {
                    id: 159,
                    name: '赤城县'
                  },
                  {
                    id: 160,
                    name: '崇礼县'
                  }
                ]
              },
              {
                id: 10,
                name: '承德市',
                district: [{
                    id: 161,
                    name: '双桥区'
                  },
                  {
                    id: 162,
                    name: '双滦区'
                  },
                  {
                    id: 163,
                    name: '鹰手营子矿区'
                  },
                  {
                    id: 164,
                    name: '承德县'
                  },
                  {
                    id: 165,
                    name: '兴隆县'
                  },
                  {
                    id: 166,
                    name: '平泉县'
                  },
                  {
                    id: 167,
                    name: '滦平县'
                  },
                  {
                    id: 168,
                    name: '隆化县'
                  },
                  {
                    id: 169,
                    name: '丰宁满族自治县'
                  },
                  {
                    id: 170,
                    name: '宽城满族自治县'
                  },
                  {
                    id: 171,
                    name: '围场满族蒙古族自治县'
                  }
                ]
              },
              {
                id: 11,
                name: '沧州市',
                district: [{
                    id: 172,
                    name: '新华区'
                  },
                  {
                    id: 173,
                    name: '运河区'
                  },
                  {
                    id: 174,
                    name: '沧县'
                  },
                  {
                    id: 175,
                    name: '青县'
                  },
                  {
                    id: 176,
                    name: '东光县'
                  },
                  {
                    id: 177,
                    name: '海兴县'
                  },
                  {
                    id: 178,
                    name: '盐山县'
                  },
                  {
                    id: 179,
                    name: '肃宁县'
                  },
                  {
                    id: 180,
                    name: '南皮县'
                  },
                  {
                    id: 181,
                    name: '吴桥县'
                  },
                  {
                    id: 182,
                    name: '献县'
                  },
                  {
                    id: 183,
                    name: '孟村回族自治县'
                  },
                  {
                    id: 184,
                    name: '泊头市'
                  },
                  {
                    id: 185,
                    name: '任丘市'
                  },
                  {
                    id: 186,
                    name: '黄骅市'
                  },
                  {
                    id: 187,
                    name: '河间市'
                  }
                ]
              },
              {
                id: 12,
                name: '廊坊市',
                district: [{
                    id: 188,
                    name: '安次区'
                  },
                  {
                    id: 189,
                    name: '广阳区'
                  },
                  {
                    id: 190,
                    name: '固安县'
                  },
                  {
                    id: 191,
                    name: '永清县'
                  },
                  {
                    id: 192,
                    name: '香河县'
                  },
                  {
                    id: 193,
                    name: '大城县'
                  },
                  {
                    id: 194,
                    name: '文安县'
                  },
                  {
                    id: 195,
                    name: '大厂回族自治县'
                  },
                  {
                    id: 196,
                    name: '霸州市'
                  },
                  {
                    id: 197,
                    name: '三河市'
                  }
                ]
              },
              {
                id: 13,
                name: '衡水市',
                district: [{
                    id: 198,
                    name: '桃城区'
                  },
                  {
                    id: 199,
                    name: '枣强县'
                  },
                  {
                    id: 200,
                    name: '武邑县'
                  },
                  {
                    id: 201,
                    name: '武强县'
                  },
                  {
                    id: 202,
                    name: '饶阳县'
                  },
                  {
                    id: 203,
                    name: '安平县'
                  },
                  {
                    id: 204,
                    name: '故城县'
                  },
                  {
                    id: 205,
                    name: '景县'
                  },
                  {
                    id: 206,
                    name: '阜城县'
                  },
                  {
                    id: 207,
                    name: '冀州市'
                  },
                  {
                    id: 208,
                    name: '深州市'
                  }
                ]
              }
            ]
          },




        ]
      }
    },
    methods: {
      choseAdd: function () {
        this.showChose = true;
      },
      closeAdd: function () {
        this.showChose = false;
      },
      _filter(add, name, code) {
        let result = [];
        for (let i = 0; i < add.length; i++) {
          if (code == add[i].id) {
            result = add[i][name];
          }
        }
        return result;
      },
      getProvinceId: function (code, input, index) {
        this.province = code;
        this.Province = input;
        this.showProvince = false;
        this.showCity = true;
        this.showDistrict = false;
        this.showCityList = this._filter(this.info, 'city', this.province);
        // 点击选择当前
        this.info.map(a => a.selected = false);
        this.info[index].selected = true;
      },
      provinceSelected: function () {
        // 清除市级和区级列表
        this.showCityList = false;
        this.showDistrictList = false;
        // 清除市级和区级选项
        this.City = false;
        this.District = false;
        // 选项页面的切换
        this.showProvince = true;
        this.showCity = false;
        this.showDistrict = false;
      },
      getCityId: function (code, input, index) {
        this.city = code;
        this.City = input;
        this.showProvince = false;
        this.showCity = false;
        this.showDistrict = true;
        this.showDistrictList = this._filter(this.showCityList, 'district', this.city);
        // 选择当前添加active
        this.showCityList.map(a => a.selected = false);
        this.showCityList[index].selected = true;
        //获取选择的城市
        var val = this.Province + " " + this.City;
        var userInfo = localStorage.getItem("userInfo").split(",");
        if (userInfo == undefined) {
          Mint.Toast("非法进入！");
          localStorage.clear(); //清除所有本地数据
          this.$router.push({
            name: 'login'
          }); //路由跳转
        }
        Mint.Indicator.open({
          text: '请稍后...',
          spinnerType: 'fading-circle'
        });
        //结束选择保存地址，开始返回
        var json = {
          user_id: userInfo[0],
          ident: userInfo[1],
          key: "region",
          val: val
        };
        this.$http.post('http://' + localhost + '/index.php/Home/Main/index2', json, {
          emulateJSON: true
        }).then(function (res) {
            var m = res.body;
            if (m.code == 1) {
              localStorage.setItem("region", val);
              Mint.Indicator.close();
              this.$router.go(-1);
            } else {

            }

          },
          function (res) {
            console.log(res.status);
          });

      },
      citySelected: function () {
        this.showProvince = false;
        this.showCity = true;
        this.showDistrict = false;

      },
      getDistrictId: function (code, input, index) {
        this.district = code;
        this.District = input;
        // 选择当前添加active
        this.showDistrictList.map(a => a.selected = false);
        this.showDistrictList[index].selected = true;
        // 选取市区选项之后关闭弹层
        this.showChose = false;
      },
      districtSelected: function () {

        this.showProvince = false;
        this.showCity = false;
        this.showDistrict = true;
      }
    }
  }

</script>

<style scoped>
  .Mint.Indicator {
    z-index: 999;
  }

  .showChose {
    padding-top: 0.5rem;
  }

  .myAddress {
    width: 100%;
    background-color: white;
    border-top: 4px solid rgba(245, 245, 245, 1);
    color: #333;
  }

  .myAddress .cont {
    border-bottom: 1px solid rgba(245, 245, 245, 0.8);
  }

  .myAddress .cont span {
    display: inline-block;
    font-size: 0.014rem;
    color: #333;
    line-height: 0.044rem;
    margin-left: 0.016rem;
  }

  .myAddress .cont section {
    float: left;
  }

  .myAddress .cont p {
    display: inline-block;
    font-size: 0.014rem;
    color: #333333;
    line-height: 0.044rem;
    margin-left: 1rem;
  }

  .myAddress .cont .pic2 {
    float: right;
    width: 0.04rem;
    height: 0.012rem;
    margin: 0.016rem 0.016rem 0.016rem 0;
  }

  .myAddress .cont p.text {
    margin-left: 0.036rem;
  }

  .showChose {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 120;
    background: #FFFFFF;
  }

  .address {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 121;
    background: #fff;
    width: 100%;
  }

  .title {
    height: 0.43rem;
    width: 100%;
    line-height: 0.43rem;
    text-indent: 0.1rem;
    border-bottom: 1px solid #E5E5E5;
  }

  .title h4 {
    display: inline-block;
    margin-left: 0.16rem;
    font-size: 0.016rem;
    line-height: 0.144rem;
    font-weight: normal;
    color: #999;
  }

  .title span {
    margin: 0.021rem 0 0 0.11rem;
    font-size: 0.0225rem;
    line-height: 0.017rem;
    color: #D8D8D8;
  }

  .area {
    display: inline-block;
    font-size: 0.13rem;
    margin-left: 0.021rem;
    color: #333;
  }

  /* 修改的格式 */

  .showChose ul {
    width: 95%;
    height: 100%;
    overflow: auto;
    margin: 0 auto;
  }

  .showChose ul li {
    height: 0.43rem;
    line-height: 0.43rem;
    width: 100%;
    border-bottom: 1px solid #E5E5E5;
    text-indent: 0.1rem;
    font-size: 0.13rem;
  }

  .title .active {
    color: #0071B8;
  }

  .showChose ul .active {
    color: #0071B8;
  }

</style>
