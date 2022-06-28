<template>
  <div>
    <div class="my-title">
      <template v-if="user && user.token">
        <div class="banner1"></div>
        <div class="login">
          <van-image
            round
            class="img-size"
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
          />
          <p>进去的黑马</p>
          <div class="login-btn" @click="logout">退出</div>
          <p>编辑个人资料</p>
        </div>
      </template>
      <template v-else>
        <div class="banner"></div>
        <div class="loginout">
          <van-image
            round
            class="img-size"
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
          />
          <p>游客</p>
          <div class="login-btn" @click="$router.push('/login')">去登录</div>
        </div>
      </template>
    </div>
    <div class="my-body">
      <van-grid :column-num="3" :gutter="0">
        <van-grid-item size="20px" icon="star-o" text="我的收藏" />
        <van-grid-item size="40px" icon="wap-home-o" text="我的出租" />
        <van-grid-item size="40px" icon="clock-o" text="看房记录" />
        <van-grid-item size="40px" icon="debit-pay" text="成为房主" />
        <van-grid-item size="40px" icon="manager-o" text="个人资料" />
        <van-grid-item size="40px" icon="service-o" text="联系我们" />
      </van-grid>
    </div>
    <div class="my-footer">
      <img src="@/assets/my-join.png" alt="" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  created () { },
  data () {
    return {}
  },
  methods: {
    async logout () {
      try {
        await this.$dialog.confirm({ message: '确定退出吗？' })
        this.$store.commit('setUser', {})
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {
    ...mapState(['user'])
  },
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.my-title {
  position: relative;
  width: 750px;
  height: 600px;
}
.banner {
  width: 750px;
  height: 382px;
  background: url("@/assets/My-bg.png") no-repeat 0 0 / cover;
}
.banner1 {
  width: 750px;
  height: 562px;
  background: url("@/assets/avatar.png") no-repeat 0 0 / cover;
}
.login,
.loginout {
  width: 637.5px;
  height: 330px;
  background-color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  // transform: translateX(-50%);
  margin-left: -320px;
  margin-top: -50px;
  // transform: translateY(-50%);
  box-shadow: 0 0 10px 3px #ddd;
  text-align: center;
  p {
    font-size: 26px;
    padding: 30px 0;
  }
  .login-btn {
    color: white;
    width: 132px;
    height: 60px;
    background-color: rgb(99, 165, 99);
    font-size: 28px;
    line-height: 60px;
    margin: 0 auto;
    border-radius: 10px;
  }
}
.img-size {
  width: 140px;
  height: 140px;
  margin-top: -70px;
}
.my-footer {
  display: flex;
  width: 750px;
  height: 170px;
  padding-top: 30px;
  justify-content: center;
  img {
    width: 690px;
  }
}
</style>
