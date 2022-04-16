<template>
  <el-tabs v-model="activeName" class="app-main" type="border-card">
    <el-tab-pane label="概览" name="1"><over-view /></el-tab-pane>
    <el-tab-pane label="在线调试" name="2">
      <div class="debuging-view fixed-view">
        <sidebar v-if="activeName === '2'" ref="sidebar" class="sidebar-container" />
        <transition name="fade-transform" mode="out-in">
          <router-view :key="key" />
        </transition>
      </div>
    </el-tab-pane>
    <el-tab-pane label="固件升级" name="3"><firmware-update /></el-tab-pane>
    <el-tab-pane label="日志查看" name="4"><journal /></el-tab-pane>
  </el-tabs>
  <!-- <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
  </section> -->
</template>

<script>
import overView from '@/views/fixedViews/overView.vue'
import firmwareUpdate from '@/views/fixedViews/firmwareUpdate.vue'
import journal from '@/views/fixedViews/journal.vue'

import sidebar from './Sidebar'
export default {
  name: 'AppMain',
  components: { overView, firmwareUpdate, journal, sidebar },
  data() {
    return {
      activeName: '1'
    }
  },
  computed: {
    key() {
      return this.$route.path
    }
  },
  watch: {
    device_sn() {
      this.activeName = '1'
    },
    device_type() {
      this.activeName = '1'
    }
  }
}
</script>

<style lang="scss">
.app-main {
  .el-tabs__content {
    padding: unset;
  }
}
</style>

<style scoped lang="scss">
.app-main {
  /*50 = navbar  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}
.fixed-header + .app-main {
  padding-top: 50px;
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
.debuging-view {
  display: flex;
}
.debuging-container {
  background-color: red;
  width: 200px;
  height: 200px;
}
</style>
