<template>
  <div>
    <van-nav-bar title="城市列表" left-arrow @click-left="$router.back()" />
    <van-index-bar :index-list="indexList" @select="fn">
      <van-index-anchor index="#">当前城市</van-index-anchor>
      <van-cell :title="$store.state.nowC" />
      <van-index-anchor index="热">热门城市</van-index-anchor>
      <van-cell
        v-for="(obj, index1) in hotCityList"
        :key="index1"
        :title="obj.label"
        @click="hotcityFn(index1)"
      />
      <template>
        <div v-for="(item, index) in cityList" :key="index">
          <van-index-anchor :index="index.toUpperCase()"></van-index-anchor>
          <van-cell
            v-for="(obj, index1) in item"
            :key="index1"
            :title="obj.label"
          />
        </div>
      </template>
    </van-index-bar>
  </div>
</template>

<script>
import _ from 'lodash'
import { MyCityListApi, hotCityApi } from '@/api/home'
export default {
  created () {
    this.getCityList()
    this.hotCityApi()
  },
  data () {
    return {
      indexList: [],
      cityList: [],
      hotCityList: [],
      nowCity: '北京'
    }
  },
  methods: {
    hotcityFn (ind) {
      console.log(ind)
      this.nowCity = this.hotCityList[ind].label
      this.$store.commit('setNowC', this.nowCity)
      this.$router.back()
    },
    fn (num) {
      console.log(num)
    },
    async getCityList () {
      try {
        const res = await MyCityListApi('1')
        this.cityList = res.data.body
        this.$store.commit('setCityList', this.cityList)
        console.log(res, this.cityList)
        // const citylist = {}
        // res.data.body = _.orderBy(res.data.body, ['short'])
        // res.data.body.forEach((item) => {
        //   const firstzm = item.short.substr(0, 1)
        //   if (citylist[firstzm]) {
        //     citylist[firstzm].push(item)
        //   } else {
        //     citylist[firstzm] = [item]
        //   }
        // })
        // console.log(citylist)
        // const indexs = Object.keys(citylist).sort()
        // this.indexList = ['#', '热'].concat(
        //   indexs.map((item) => item.toUpperCase())
        // )
        // this.cityList = citylist
        //  1、创建一个空对象
        // 2、请求到的城市列表通过lodash的orderBy 数据里的short属性 排序之后重新赋值给请求来的数据
        // 3、请求来的数据forEach遍历 声明一个变量接收被截取第一个字母
        // 4、判断空对象里是否有这个属性 有的话把遍历的元素push到空对象中 没有的话创建这个属性名并且把元素用数组包裹起来赋值给这一项
        // 5、声明一个变量接收通过Object.keys(处理好的对象)cityFirstName 通过sort方法排序
        // 6、处理indexList数据 #，热通过concat拼接数组 concat里的内容是用cityFirstName用map处理每一项toupcase
        // 7、处理好的数据用cityList来接收
        const cityObj = {}
        res.data.body = _.orderBy(res.data.body, ['short'])
        res.data.body.forEach(item => {
          const cityFirstName = item.short.substr(0, 1)
          if (cityObj[cityFirstName]) {
            cityObj[cityFirstName].push(item)
          } else {
            cityObj[cityFirstName] = [item]
          }
          const indexs = Object.keys(cityObj).sort()
          this.indexList = ['#', '热'].concat(
            indexs.map(item => item.toUpperCase())
          )
          this.cityList = cityObj
        })
      } catch (err) {
        console.log(err)
      }
    },
    async hotCityApi () {
      try {
        const res = await hotCityApi()
        console.log('hotcity', res)
        this.hotCityList = res.data.body
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
</style>
