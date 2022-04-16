<template>
  <div class="switch-sn-contain">
    <div class="header">
      <span class="text">{{ 'Version:' }}</span>
      <span class="text">{{ 'Timestamp:' }}</span>
      <el-button class="refreshButton" size="small">刷新</el-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'SwitchShadow',
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['softVersion'])
  },
  created() {},
  methods: {}
}
</script>

<style scoped lang="scss">
.switch-sn-contain {
  padding: 5px 5px;
  .header {
    height: 40px;
    .text {
      line-height: 40px;
      margin-left: 12px;
      margin-right: 12px;
    }

    .refreshButton {
      float: right;
    }
  }
}
</style>
