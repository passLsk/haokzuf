<template>
  <div class="main">
    <van-popup
      v-model="show"
      class="aere-popup"
      position="right"
      :style="{ height: '100%', width: '78%' }"
    >
      <div class="btn">
        <div class="house-type">
          <h3>户型</h3>
          <div class="house-type-btn-galbel">
            <van-button
              class="house-type-btn"
              type="default"
              v-for="(item, index) in houseObjList.roomType"
              :key="index"
              >{{ item.label }}</van-button
            >
          </div>
        </div>
        <div class="house-type">
          <h3>朝向</h3>
          <div class="house-type-btn-galbel">
            <van-button
              class="house-type-btn"
              type="default"
              v-for="(item, index) in houseObjList.oriented"
              :key="index"
              >{{ item.label }}</van-button
            >
          </div>
        </div>
        <div class="house-type">
          <h3>楼层</h3>
          <div class="house-type-btn-galbel">
            <van-button
              class="house-type-btn"
              type="default"
              v-for="(item, index) in houseObjList.floor"
              :key="index"
              >{{ item.label }}</van-button
            >
          </div>
        </div>
        <div class="house-type">
          <h3>房屋亮点</h3>
          <div class="house-type-btn-galbel">
            <van-button
              class="house-type-btn"
              type="default"
              v-for="(item, index) in houseObjList.supporting"
              :key="index"
              >{{ item.label }}</van-button
            >
          </div>
        </div>
        <div class="btn-bottom">
          <van-button
            class="btn-default"
            type="default"
            @click="$emit('update:show', !show)"
            >取消</van-button
          ><van-button class="btn-primary" type="primary">确定</van-button>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { houseParamsApi } from '@/api/house'
export default {
  props: {
    show: {
      type: Boolean,
      reuqired: true
    }
  },
  created () {
    this.houseParamsApi()
  },
  data () {
    return {
      houseObjList: {}
    }
  },
  methods: {
    async houseParamsApi () {
      try {
        const res = await houseParamsApi()
        this.houseObjList = res.data.body
        console.log('house', res, this.houseObjList)
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
.btn {
  .btn-bottom {
    position: relative;
    bottom: 0;
    .btn-primary {
      width: 390px;
    }
    .btn-default {
      width: 195px;
      color: #21b97a;
    }
  }
}
.aere-popup {
  width: 100%;
}
.house-type {
  margin: 28px 0;
  padding: 0 30px;
  h3 {
    margin: 40px 0;
    font-size: 30px;
    font-weight: 400;
  }
  .house-type-btn-galbel {
    margin-left: 80px;
    padding: 0 0 28px;
    border-bottom: 1px solid #e5e5e5;
    .house-type-btn {
      width: 140px;
      height: 64px;
      margin: 0 36px 30px 0;
    }
  }
}
</style>
