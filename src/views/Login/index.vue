<template>
  <div>
    <van-nav-bar title="账号登录" left-arrow />
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        placeholder="请输入账号"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button block native-type="submit" class="login-btn"
          >登录</van-button
        >
      </div>
    </van-form>
    <p>还没有账号，去注册~</p>
  </div>
</template>

<script>
import { userLoginApi } from '@/api/login'
export default {
  created () { },
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async onSubmit (values) {
      const res = await userLoginApi({
        username: this.username,
        password: this.password
      })
      this.$store.commit('setUser', res.data.body.token)
      console.log(res)
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.login-btn {
  background-color: #21b97a;
  color: white;
}
.van-field {
  height: 100px;
}
.van-button {
  height: 110px;
  font-size: 38px;
}
p {
  text-align: center;
  font-size: 30px;
  color: #999;
}
</style>
