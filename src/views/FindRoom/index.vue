<template>
  <div>
    <van-nav-bar
      fixed
      title="标题"
      right-text="按钮"
      left-arrow
      @click-left="$router.back()"
    >
      <template #title>
        <div class="top-middle">
          <h3 @click="$router.push({ path: '/city' })">
            {{ $store.state.nowC
            }}<van-icon color="black" name="arrow-down" size="12" />
          </h3>
          <van-search v-model="value" placeholder="请输入小区或地址" />
        </div>
      </template>
      <template #right>
        <van-icon name="newspaper-o" size="18" />
      </template>
    </van-nav-bar>
    <div class="tabbar">
      <van-row>
        <van-col v-for="(item, index) in arr" :key="index" span="6">
          <h3 :class="{ active: index === 0 }" @click="colFn(index)">
            {{ item }} <van-icon name="arrow-down" />
          </h3>
        </van-col>
      </van-row>
    </div>
    <TbaBar
      :areaList="areaList"
      :id="id"
      v-if="id === 0"
      :show.sync="isShow"
    ></TbaBar>
    <TbaBar1
      :areaList="areaList1"
      :id="id"
      v-if="id === 1"
      :show.sync="isShow"
    ></TbaBar1>
    <TbaBar2
      :areaList="areaList2"
      :id="id"
      v-if="id === 2"
      :show.sync="isShow"
    ></TbaBar2>
    <TbaBar3 :id="id" v-if="id === 3" :show.sync="isShow"></TbaBar3>
    <van-grid direction="horizontal" :column-num="1">
      <van-grid-item
        icon="photo-o"
        text="文字"
        v-for="(item, index) in roomList"
        :key="index"
      >
        <template #icon>
          <img :src="'http://liufusong.top:8080' + item.houseImg" />
        </template>
        <template #text>
          <h2>
            <h3 class="van-ellipsis">杭州大厦地铁口{{ item.houseCode }}</h3>
            <h4>{{ item.desc }}</h4>
            <h5>{{ item.tags[0] }}</h5>
            <h6>{{ item.price }}元/月</h6>
          </h2>
        </template>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
// desc: "一室/20/东/青龙公寓"
// houseCode: "d74bbae4-cc37-64d0"
// houseImg: "/uploads/upload_40b51731fb6a73de57750033870b0e76.jpeg"
// price: 120
// tags: Array(1)
// 0: "近地铁"
// length: 1
// [[Prototype]]: Array(0)
// title: "测试"
import { findroomApi } from '@/api/findroom.js'
import TbaBar from './TabBar.vue'
import TbaBar1 from './TabBar1.vue'
import TbaBar2 from './TabBar2.vue'
import TbaBar3 from './TabBar3.vue'
export default {
  async created () {
    const res = await findroomApi(this.$store.getters.cityID)
    this.roomList = res.data.body.list
    console.log(res, '城市', this.roomList)
  },
  data () {
    return {
      roomList: [],
      value: '',
      id: '',
      arr: ['区域', '方式', '租金', '筛选'],
      areaList: {
        province_list: {
          110000: '地铁'
        },
        city_list: {
          110100: '杨浦',
          110300: '徐汇',
          110200: '普陀'
        },
        county_list: {
          110301: '东方明珠',
          110102: '浦东',
          110202: '普陀山'
        }
      },
      areaList1: {
        province_list: {
          110000: ''
        },
        city_list: {
          110100: '不限',
          110300: '整租',
          110200: '合租'
        },
        county_list: {
          110301: '',
          110102: '',
          110202: ''
        }
      },
      areaList2: {
        province_list: {
          110000: ''
        },
        city_list: {
          110100: '租金',
          110200: '1000及以下',
          110300: '1000-2000',
          110400: '2000-3000',
          110500: '3000-4000',
          110600: '4000-5000',
          110800: '6000-7000',
          110900: '7000以上',
          110700: '5000-6000'
        },
        county_list: {
          110301: '',
          110102: '',
          110202: ''
        }
      },
      isShow: false
    }
  },
  methods: {
    colFn (ind) {
      this.id = ind
      this.isShow = !this.isShow
    }
  },
  computed: {
  },
  watch: {},
  filters: {},
  components: { TbaBar, TbaBar1, TbaBar2, TbaBar3 }
}
</script>

<style scoped lang='less'>
/deep/.van-nav-bar__title {
  max-width: unset;
}
.top-middle {
  display: flex;
  justify-content: start;
  align-items: center;
  width: 548px;
  height: 68px;
  background-color: #fff;
  border-radius: 6px;
  box-sizing: border-box;
  padding: 0 15px;
  h3 {
    width: 84px;
    height: 68px;
    color: black;
    font-size: 28px;
    line-height: 68px;
    padding: 0 10px;
    .van-icon-arrow-down {
      padding-left: 4px;
    }
  }
  /deep/.van-search {
    width: 440px;
    height: 58px;
    line-height: 58px;
    background-color: #fff;
  }
  /deep/.van-field__body {
    width: 440px;
    height: 58px;
    line-height: 58px;
    background-color: #fff;
  }
  /deep/.van-field__left-icon .van-icon {
    color: #c8d2e1;
    padding-top: 5px;
    margin-left: 16px;
    padding-left: 8px;
    background-color: #fff;
    border-left: 1px solid #e5e5e5;
  }
}
.tabbar {
  padding-top: 92px;
  border-bottom: 1px solid #e4e6f0;
  h3 {
    font-size: 34px;
    text-align: center;
    line-height: 72px;
    font-weight: normal;
  }
  .active {
    color: #21b97a;
  }
}
// .van-search[data-v-f8698b1e] {
//   height: 68px;
//   width: 548px;
// }
// .van-nav-bar__right {
//   width: 30px;
// }
// .van-nav-bar__title[data-v-f8698b1e] {
//   max-width: 100%;
// }
// h1[data-v-f8698b1e] {
//   font-size: 30px;
//   padding-left: 10px;
// }
// .toutiao[data-v-f8698b1e] {
//   font-size: 50px;
// }
// .van-icon-arrow-left:before {
//   font-size: 30px;
// }
.van-grid-item {
  padding: 18px 15px;
  width: 690px;
  height: 240px;
  img {
    padding-right: 10px;
    width: 212px;
    height: 160px;
  }
}
h2[data-v-f8698b1e] {
  width: 514px;
  height: 240px;
  padding-top: 28px;
  h3 {
    color: black;
    font-size: 30px;
    padding-bottom: 5px;
  }
  h4 {
    color: #afb2b3;
    font-size: 26px;
    padding-bottom: 5px;
  }
  h5 {
    color: #68cdd9;
    font-size: 26px;
    padding-bottom: 5px;
    width: 92px;
    background-color: #e1f5f8;
  }
  h6 {
    color: #fa5741;
    font-size: 34px;
  }
}
* {
  margin: 0;
  padding: 0;
}
</style>
