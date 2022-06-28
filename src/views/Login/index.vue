<template>
  <div>
    <van-nav-bar title="账号登录" left-arrow @click-left="$router.back()" />
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
  created () {
  },
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async onSubmit (values) {
      try {
        const res = await userLoginApi(values)
        this.$store.commit('setUser', res.data.body)
        console.log(res)
      } catch (err) {
        console.log(err)
      }
      if (this.$store.state.user && this.$store.state.user.token) {
        this.$toast.success('登录成功')
        setTimeout(async () => {
          try {
            await this.$router.push('/my')
          } catch (err) {
            console.log(err)
          }
        }, 2000)
      } else {
        this.$toast.fail('账号密码错误')
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
