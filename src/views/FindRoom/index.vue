<template>
  <div>
    <van-nav-bar title="标题" right-text="按钮" left-arrow>
      <template #title>
        <van-search v-model="value" placeholder="请输入小区或地址">
          <template #left>
            <h1>北京 <van-icon name="arrow-down" /></h1>
          </template>
        </van-search>
      </template>
      <template #right>
        <i class="toutiao toutiao-fenxiang"></i>
      </template>
    </van-nav-bar>
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" title="区域" />
      <van-dropdown-item v-model="value2" :options="option2" title="方式" />
      <van-dropdown-item v-model="value1" :options="option1" title="租金" />
      <van-dropdown-item v-model="value2" :options="option2" title="筛选" />
    </van-dropdown-menu>
    <van-grid direction="horizontal" :column-num="1" >
      <van-grid-item icon="photo-o" text="文字">
        <template #icon>
          <img src="../../assets/001.jpeg" alt="" />
        </template>
        <template #text>
          <h2>
            <h3>杭州大厦地铁口</h3>
            <h4>独立卫生间月租1999元</h4>
            <h5>近地铁</h5>
            <h6>765元/月</h6>
          </h2>
        </template>
      </van-grid-item>
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
    </van-grid>
  </div>
</template>

<script>
// import { findroomApi } from '@/api/findroom.js'
export default {
  created () {
    // const res = await findroomApi('AREA|88cff55c-aaa4-e2e0')
    // console.log(res)
  },
  data () {
    return {
      value: '',
      active: 0,
      value1: 0,
      value2: 'a',
      option1: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ],
      option2: [
        { text: '默认排序', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' }
      ]
    }
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.van-search[data-v-f8698b1e] {
  height: 68px;
  width: 548px;
}
.van-nav-bar__right {
  width: 30px;
}
.van-nav-bar__title[data-v-f8698b1e] {
  max-width: 100%;
}
h1[data-v-f8698b1e] {
  font-size: 30px;
  padding-left: 10px;
}
.toutiao[data-v-f8698b1e] {
  font-size: 50px;
}
.van-icon-arrow-left:before {
  font-size: 30px;
}
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
