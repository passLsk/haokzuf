<template>
  <div class="main">
    <!-- <van-search v-model="value" label="地址" placeholder="请输入搜索关键词">
      <template #label>
        <h2>北京 <van-icon name="arrow-down" /></h2>
      </template>
      <template #right-icon>
        <i class="toutiao toutiao-fenxiang"></i>
      </template>
    </van-search> -->
    <div class="home-search">
      <div class="left">
        <h3 @click="$router.push({ name: 'city' })">
          {{ nowCity }}<van-icon name="arrow-down" />
        </h3>
      </div>
      <div class="middle">
        <p>
          <van-icon class="icon-search" name="search" />请输入搜索小区或地址
        </p>
      </div>
      <div class="right">
        <van-icon class="icon-comment" name="comment-circle-o" />
      </div>
    </div>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="'http://liufusong.top:8080' + image" />
      </van-swipe-item>
    </van-swipe>
    <van-row type="flex" justify="space-around" gutter="6">
      <van-col span="6"
        ><van-icon name="wap-home-o" size="50" />
        <p>整租</p></van-col
      >
      <van-col span="6"
        ><van-icon name="wap-home-o" size="50" />
        <p>合租</p></van-col
      >
      <van-col span="6"
        ><van-icon name="award-o" size="50" />
        <p>地图找房</p></van-col
      >
      <van-col span="6"
        ><van-icon name="wap-home-o" size="50" />
        <p>去出租</p></van-col
      >
    </van-row>
    <div class="bgc-g">
      <van-cell title="租房小组" value="更多" />
      <van-grid :border="false" :column-num="2">
        <van-grid-item>
          <van-image src="https://img01.yzcdn.cn/vant/apple-1.jpg" />
          <div class="van-multi-ellipsis--l2">
            这是一段最多显示两行的文字，多余的内容会被省略
          </div>
        </van-grid-item>
        <van-grid-item>
          <van-image src="https://img01.yzcdn.cn/vant/apple-2.jpg" />
          <div class="van-multi-ellipsis--l2">
            这是一段最多显示两行的文字，多余的内容会被省略
          </div>
        </van-grid-item>
        <van-grid-item>
          <van-image src="https://img01.yzcdn.cn/vant/apple-3.jpg" />
          <div class="van-multi-ellipsis--l2">
            这是一段最多显示两行的文字，多余的内容会被省略
          </div>
        </van-grid-item>
        <van-grid-item>
          <van-image src="https://img01.yzcdn.cn/vant/apple-3.jpg" />
          <div class="van-multi-ellipsis--l2">
            这是一段最多显示两行的文字，多余的内容会被省略
          </div>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
import { swipeApi } from '@/api/home.js'
export default {
  async created () {
    this.nowCity = this.$store.state.nowC
    const res = await swipeApi()
    res.data.body.forEach(item => this.images.push(item.imgSrc))
  },
  data () {
    return {
      images: [],
      value: '',
      nowCity: '北京'
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
* {
  margin: 0;
  padding: 0;
}
.van-swipe-item {
  color: #fff;
  font-size: 20px;
  text-align: center;
  background-color: #39a9ed;
  width: 750px;
  height: 424px;
  img {
    width: 100%;
  }
}
.van-col {
  width: 180px;
  height: 244px;
  text-align: center;
  padding-top: 20px;
  p {
    font-size: 28px;
    padding-top: 20px;
    padding-left: 18px;
  }
}
.van-cell {
  padding: 20px 20px 20px 60px;
  background-color: #f6f5f6;
}
.main {
  padding-bottom: 50px;
}
.van-grid {
  background-color: #f6f5f6;
  padding: 10px;
}
.van-grid-item {
  padding-right: 20px;
  padding-bottom: 20px;
  div {
    padding-top: 10px;
    font-size: 16px;
  }
}
.van-search {
  position: fixed;
  top: 20px;
  z-index: 2;
  width: 620px;
  height: 68px;
  left: 58px;
  text-align: center;
  line-height: 68px;
  border-radius: 3px;
}
.toutiao-fenxiang[data-v-1d9b105c]:before {
  color: red;
  font-size: 30px;
}
h2[data-v-1d9b105c] {
  font-size: 30px;
  padding-left: 10px;
}
.home-search {
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  left: 52px;
  top: 20px;
  z-index: 2;
  background-color: #fff;
  .left {
    font-size: 24px;
    color: black;
    h3 {
      padding: 0 8px;
    }
  }
  .middle {
    width: 540px;
    height: 68px;
    font-size: 28px;
    display: flex;
    align-items: center;
    p {
      border-left: 1px solid #cdcccc;
      padding-left: 10px;
    }
  }
  .right {
    .icon-comment {
      margin-right: -90px;
      color: white;
      font-size: 60px;
      height: 68px;
      line-height: 68px;
      vertical-align: middle;
    }
  }
}
</style>
