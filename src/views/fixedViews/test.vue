<template>
  <div>
    <el-form ref="form" label-width="100px">
      <el-row :gutter="20">
        <el-col :span="7">
          <el-form-item label="全局信息">
            <span>{{ basicinfo.aaa }}</span>
          </el-form-item>
          <el-form-item label="设备序列号">
            <span>{{ model.code }}</span>
          </el-form-item>
          <el-form-item label="设备名称">
            <span>{{ model.name }}</span>
          </el-form-item>
          <el-form-item label="项目名称">
            <span>{{ model.projectName }}</span>
          </el-form-item>
        </el-col>
      </el-row>
      <el-button @click="queryTop">刷新</el-button>
    </el-form>
    <el-divider />
    <el-form ref="form" v-loading="loading" :model="form" label-width="100px">
      <el-row :gutter="20">
        <el-col :span="7">
          <el-form-item label="设备序列号">
            <span>{{ form.code }}</span>
          </el-form-item>
          <el-form-item label="设备名称">
            <span>{{ form.name }}</span>
          </el-form-item>
          <el-form-item label="项目名称">
            <span>{{ form.projectName }}</span>
          </el-form-item>
        </el-col>
        <el-col :span="7">
          <el-form-item label="设备序列号">
            <el-input v-model="form.code" />
          </el-form-item>
          <el-form-item label="设备名称">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="项目名称">
            <el-input v-model="form.projectName" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">提交</el-button>
          </el-form-item>
        </el-col>
        <el-col :span="7">
          <el-form-item label="设备序列号">
            <el-input v-model="form.code" />
          </el-form-item>
          <el-form-item label="设备名称">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="项目名称">
            <el-input v-model="form.projectName" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">提交</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
// import { mapState } from 'vuex'
export default {
  data() {
    return {
      loading2: false,
      model: {},
      loading: false,
      form: {}
    }
  },
  computed: {
    // ...mapState(['basicinfo'])
  },
  created() {
    // 查询顶部信息
    this.queryTop()
    // 页面刚进入的时候(不需要抓取dom)
    this.queryInfo()
  },
  methods: {
    queryTop() {
      this.loading2 = false
      axios
        .get('http://httpbin.org/status/200', {
          method: 'info',
          payload: {
            cmd: 'READ',
            type: 'INFO'
          }
        })
        .then(() => {
          const mock = {
            method: 'info',
            payload: {
              sn: '1111',
              devName: '222',
              code: 'modelCode',
              name: 'modelName',
              projectName: 'modelProjectName'
            }
          }
          setTimeout(() => {
            this.model = mock.payload
            this.loading2 = true
          }, 1000)
        })
    },
    // 查询当前设置的参数
    queryInfo() {
      this.loading = true
      axios
        .get('http://httpbin.org/get', {
          method: 'info',
          payload: {
            cmd: 'READ',
            type: 'BASIC'
          }
        })
        .then(res => {
          // 假如系统有消息类包装，需要做一层判断，请求是否承购
          // if(res.data.code !== 200) return
          // data是axios库包装的一层，跟你实际返回的数据结构没有关系

          // 这里是假装接口调用成功返回的数据
          const mock = {
            method: 'info',
            payload: {
              sn: '1111',
              devName: '222',
              code: 'code',
              name: 'name',
              projectName: 'projectName'
            }
          }
          setTimeout(() => {
            this.form = mock.payload
            this.loading = false
          }, 1000)
        })
    },
    onSubmit() {
      axios
        .post('http://httpbin.org/post', {
          method: 'info',
          payload: {
            cmd: 'WRITE',
            type: 'BASIC',
            ...this.form
          }
        })
        .then(res => {
          console.log(res)
        })
    }
  }
}
</script>

<style></style>
