<template>
  <div>
    <van-nav-bar title="发布房源" left-arrow />
    <van-cell class="cell-bottom top-color" title="房源信息" center />
    <van-cell class="cell-bottom" title="小区名称" value="内容" center>
      <template #default>
        <van-field v-model="value" placeholder="请输入小区名称" />
      </template>
      <template #right-icon>
        <van-icon name="arrow" />
      </template>
    </van-cell>
    <van-cell class="cell-bottom" title="租金" value="内容" center>
      <template #default>
        <van-field v-model="value" placeholder="请输入租金/月" />
      </template>
      <template #right-icon>
        <van-icon name="arrow" />
      </template>
    </van-cell>
    <van-cell class="cell-bottom" title="建筑面积" value="内容" center>
      <template #default>
        <van-field v-model="value" placeholder="请输入建筑面积" />
      </template>
      <template #right-icon>
        <van-icon name="arrow" />
      </template>
    </van-cell>
    <van-cell class="cell-bottom" title="户型" value="内容" center>
      <template #default>
        <span class="cell-span">请选择</span>
      </template>
      <template #right-icon>
        <van-icon name="arrow" />
      </template>
    </van-cell>
    <van-cell class="cell-bottom" title="所在楼层" value="内容" center>
      <template #default>
        <span class="cell-span">请选择</span>
      </template>
      <template #right-icon>
        <van-icon name="arrow" />
      </template>
    </van-cell>
    <van-cell class="cell-bottom-toward" title="朝向" value="内容" center>
      <template #default>
        <span class="cell-span">请选择</span>
      </template>
      <template #right-icon>
        <van-icon name="arrow" />
      </template>
    </van-cell>
    <van-cell class="cell-bottom" title="房屋标题" center />
    <van-cell class="cell-bottom"  center>
      <template #title>
        <van-field class="cell-bottom-title" v-model="value" placeholder="请输入标题（例如：整租 小区名 2室 5000元）" />
      </template>
    </van-cell>
    <van-cell class="cell-bottom" title="房屋图像" center />
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {
      value: ''
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
.cell-bottom {
  border-bottom: 1px solid #f2f2f2;
  height: 88px;
  padding: 0 30px;
  .cell-span {
    padding-right: 10px;
  }
  .cell-bottom-title {
    color:#c1bbca;
  }
}
.cell-bottom-toward {
    height: 88px;
    padding: 0 30px;
  }
 .van-cell::after {
border-bottom:0;
    }
// .cell-bottom-house-title {
//   border-bottom: 1px solid #f2f2f2;
//   height: 176px;
//   padding: 0 30px;
//   .house-title {
//     color:#666697;
//     margin-top: 30px;
//   }
// }
.top-color {
  color: #21b97a;
  font-size: 32px;
  height: 80px;
}
</style>
