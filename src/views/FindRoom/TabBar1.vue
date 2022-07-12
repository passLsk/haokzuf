<template>
  <div>
    <van-popup v-model="show" class="aere-popup" :class="{ active: id === 1 }">
      <div>
        <van-area
          cancel-button-text=" "
          confirm-button-text=" "
          :area-list="areaList"
        />
        <div class="btn" @click="$emit('update:show', !show)">
          <van-button class="btn-default" type="default">取消</van-button
          ><van-button class="btn-primary" type="primary">确定</van-button>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: [Number, String],
      required: true
    },
    areaList: {
      type: Object,
      required: true
    },
    show: {
      type: Boolean,
      reuqired: true
    }
  },
  created () { },
  data () {
    return {
    }
  },
  methods: {
    // getContainer () {
    //   document.querySelector('.my-container').onclick = function () {
    //     this.$emit('update:show', !this.show)
    //   }
    // }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.btn {
  .btn-primary {
    width: 500px;
  }
  .btn-default {
    width: 250px;
    color: #21b97a;
  }
}
.aere-popup {
  width: 100%;
  top: 550px;
}
</style>
