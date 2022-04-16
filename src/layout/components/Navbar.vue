<template>
  <div class="navbar">
    <div class="left text back" @click="backAction"><i class="el-icon-back"></i></div>
    <div class="left text">型号：{{ device_type }}</div>
    <el-button size="mini" class="left button" @click="drawer_visible.type = true">更换型号</el-button>
    <div class="left text">SN:{{ device_sn }}</div>
    <el-button size="mini" class="left button" @click="drawer_visible.device = true">切换设备</el-button>
    <el-button size="mini" class="right button" @click="drawer_visible.shadow = true">设备投影</el-button>

    <el-drawer title="更换型号" :visible.sync="drawer_visible.type" direction="rtl">
      <switch-device-type />
    </el-drawer>
    <el-drawer title="载入设备" :visible.sync="drawer_visible.device" direction="rtl">
      <switch-sn />
    </el-drawer>
    <el-drawer title="设备投影" :visible.sync="drawer_visible.shadow" direction="rtl">
      <switch-shadow />
    </el-drawer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SwitchSn from '@/components/SwitchSN'
import SwitchDeviceType from '@/components/SwitchType'
import SwitchShadow from '@/components/SwitchShadow'

export default {
  components: { SwitchSn, SwitchDeviceType, SwitchShadow },
  data() {
    return {
      drawer_visible: {
        type: false,
        device: false,
        shadow: false
      }
    }
  },
  computed: {
    ...mapGetters(['sidebar', 'avatar'])
  },
  watch: {
    device_sn(val) {
      if (val) {
        this.requestDeviceInfo()
      }
    },
    'drawer_visible.type'(val) {
      if (val === false && !this.device_sn) {
        this.drawer_visible.device = true
      }
    }
  },
  created() {
    console.log(this.$route.params)
    if (this.device_sn) {
      this.requestDeviceInfo()
    } else {
      this.drawer_visible.device = true
    }
  },
  methods: {
    requestDeviceInfo() {
      this.$store.dispatch('device/requestInfo', this.device_sn)
    },
    backAction() {
      this.logout()
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push({ path: '/login' })
    },
    changeType() {},
    changeDevice() {},
    deviceShadow() {}
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .left {
    float: left;
    margin-right: 12px;
  }
  .text {
    line-height: 46px;
    height: 100%;
  }
  .back {
    margin-left: 8px;
  }
  .button {
    margin-top: 10px;
  }
  .right {
    float: right;
  }
}
</style>
