<template>
  <el-drawer title="任健1傻逼" :visible.sync="innerVisible">11</el-drawer>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean
    }
  },
  computed: {
    innerVisible: {
      get() {
        return this.visible
      },
      set(val) {
        this.$emit('update:visible', val)
      }
    }
  }
}
</script>
