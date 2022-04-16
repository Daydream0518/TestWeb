<template>
  <div class="switch-type-contain">
    <el-input v-model="searchText" class="search" placeholder="型号/ProductKey">
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
      <el-table-column prop="type" label="型号" />
      <el-table-column prop="productKey" label="ProductKey" />
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'SwitchType',
  data() {
    return {
      vdaH: 0,
      currentRow: null,
      tableData: [
        {
          type: 'AWT200',
          productKey: 'SKDSJ3489284'
        },
        {
          type: 'AWT100',
          productKey: 'SJDUWOI293749234'
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
      this.$route.params.type = val.type
      this.$route.params.sn = ''
      this.$router.push({ name: 'main', params: this.$route.params })
    },
    searchAction() {}
  }
}
</script>

<style scoped lang="scss">
.switch-type-contain {
  padding: 5px 5px;
  .search {
    padding-bottom: 8px;
  }
}
</style>
