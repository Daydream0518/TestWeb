<template>
  <div class="switch-sn-contain">
    <el-input v-model="searchText" class="search" placeholder="SN">
      <el-button slot="append" icon="el-icon-search" @click="searchAction" />
    </el-input>
    <el-table
      :data="tableData"
      :height="vdaH"
      border
      stripe
      style="width: 100%"
      highlight-current-row
      @current-change="handleCurrentChange"
    >
      <el-table-column prop="sn" label="SN" />
      <el-table-column prop="name" label="名称" />
      <el-table-column prop="creatTime" label="创建时间" />
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'SwitchSn',
  data() {
    return {
      vdaH: 0,
      currentRow: null,
      tableData: [
        {
          sn: '15648245965',
          name: '--',
          creatTime: '2022-02-12 10:10:12'
        },
        {
          sn: '14569832516',
          name: '--',
          creatTime: '2022-02-13 8:30:12'
        }
      ],
      searchText: ''
    }
  },
  created() {
    this.vdaH = (document.documentElement.clientHeight || document.body.clientHeight) - 90
  },
  methods: {
    handleCurrentChange(val) {
      this.currentRow = val
      this.$route.params.sn = val.sn
      this.$router.push({ name: 'main', params: this.$route.params })
    },
    searchAction() {}
  }
}
</script>

<style scoped lang="scss">
.switch-sn-contain {
  padding: 5px 5px;
  .search {
    padding-bottom: 8px;
  }
}
</style>
