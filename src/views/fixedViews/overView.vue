<template>
  <div class="pagelength">
    <div class="line_first">
      <div>
        <div>型号:{{ deviceInfo.deviceType }}</div>
        <div>soft productKey:{{ deviceInfo.productKey }}</div>
        <div>soft code:{{ deviceInfo.softCode }}</div>
        <div>soft version:{{ deviceInfo.softVersion }}</div>
      </div>
      <div>
        <div>型号:{{ deviceInfo.deviceType }}</div>
        <div>soft productKey:{{ deviceInfo.productKey }}</div>
        <div>soft code:{{ deviceInfo.softCode }}</div>
        <div>soft version:{{ deviceInfo.softVersion }}</div>
      </div>
      <div>
        <el-button @click="refreshAction">刷新</el-button>
      </div>
    </div>
    <div class="line_second">
      <div>
        <label for="">基础参数</label>
        <tr>
          <td>
            <div>运行时间：</div>
          </td>
          <td>
            <div>{{ deviceInfo.softVersion }}</div>
          </td>
        </tr>
        <tr>
          <td><div>当前状态：</div></td>
          <td>
            <div>{{ deviceInfo.softVersion }}</div>
          </td>
        </tr>
        <tr>
          <td><div>gsm信号强度</div></td>
          <td>
            <div>{{ deviceInfo.softVersion }}</div>
          </td>
        </tr>
        <tr>
          <td><div>wifi信号强度</div></td>
          <td>
            <div>{{ deviceInfo.softVersion }}</div>
          </td>
        </tr>
        <tr>
          <td><div>lora信号强度</div></td>
          <td>
            <div>{{ deviceInfo.softVersion }}</div>
          </td>
        </tr>
        <tr>
          <td><div>发送包数</div></td>
          <td>
            <div>{{ deviceInfo.softVersion }}</div>
          </td>
        </tr>
        <tr>
          <td><div>接收包数</div></td>
          <td>
            <div>{{ deviceInfo.softVersion }}</div>
          </td>
        </tr>
        <tr>
          <td><div>下行设备总数</div></td>
          <td>
            <div>{{ deviceInfo.softVersion }}</div>
          </td>
        </tr>
        <tr>
          <td><div>下行设备在线数</div></td>
          <td>
            <div>{{ deviceInfo.softVersion }}</div>
          </td>
        </tr>
        <tr>
          <td><div>串口个数</div></td>
          <td>
            <div>{{ deviceInfo.softVersion }}</div>
          </td>
        </tr>
        <tr>
          <td><div>网口个数</div></td>
          <td>
            <div>{{ deviceInfo.softVersion }}</div>
          </td>
        </tr>
        <tr>
          <td><div>lora个数</div></td>
          <td>
            <div>{{ deviceInfo.softVersion }}</div>
          </td>
        </tr>
      </div>
      <div>
        <label for="">基础参数</label>
        <tr>
          <td><div>设备序列号：</div></td>
          <td><el-input v-model="deviceInfo.deviceType" class="input-item" spellcheck="false" /></td>
        </tr>
        <tr>
          <td><div for="">设备名称：</div></td>
          <td><el-input v-model="deviceInfo.deviceType" class="input-item" spellcheck="false" /></td>
        </tr>
        <tr>
          <td><div>项目名称：</div></td>
          <td><el-input v-model="deviceInfo.deviceType" class="input-item" spellcheck="false" /></td>
        </tr>
        <tr>
          <td><div>所属国家名称：</div></td>
          <td><el-input v-model="deviceInfo.deviceType" class="input-item" spellcheck="false" /></td>
        </tr>
        <tr>
          <td><div>安装位置信息：</div></td>
          <td><el-input v-model="deviceInfo.deviceType" class="input-item" spellcheck="false" /></td>
        </tr>
        <tr>
          <td><div>当前时间：</div></td>
          <td><el-input v-model="deviceInfo.deviceType" class="input-item" spellcheck="false" /></td>
        </tr>
        <tr>
          <td><div>时区：</div></td>
          <td><el-input v-model="deviceInfo.deviceType" class="input-item" spellcheck="false" /></td>
        </tr>
        <div>
          <el-button class="button_set" @click="refreshAction">设置</el-button>
        </div>
      </div>

      <div class="server_style">
        <label for="">服务器</label>
        <tr>
          <td><div>上行-1 地址：</div></td>
          <td><el-input v-model="deviceInfo.deviceType" class="input-item" spellcheck="false" /></td>
        </tr>
        <tr>
          <td><div>上行-1 端口：</div></td>
          <td><el-input v-model="deviceInfo.deviceType" class="input-item" spellcheck="false" /></td>
        </tr>
        <tr>
          <td><div>上行-2 地址：</div></td>
          <td><el-input v-model="deviceInfo.deviceType" class="input-item" spellcheck="false" /></td>
        </tr>
        <tr>
          <td><div>上行-2 端口：</div></td>
          <td><el-input v-model="deviceInfo.deviceType" class="input-item" spellcheck="false" /></td>
        </tr>
        <tr>
          <td><div>上行-3 地址：</div></td>
          <td><el-input v-model="deviceInfo.deviceType" class="input-item" spellcheck="false" /></td>
        </tr>
        <tr>
          <td><div>上行-3 端口：</div></td>
          <td><el-input v-model="deviceInfo.deviceType" class="input-item" spellcheck="false" /></td>
        </tr>
        <div>
          <el-button class="button_set" @click="refreshAction">设置</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  border: 0;
}

.pagelength {
  width: 100%;
  background-color: rgba(53, 161, 233, 0.5);
}
@media only screen and (max-width: 1300px) {
  /* For tablets: */
  .pagelength_min {
    width: 1280px;
  }
}

.line_first {
  background-color: red;
  height: 300px;
  > div {
    float: left;
    margin-left: 60px;
    margin-top: 20px;
  }
}

.input-item {
  font-size: 12px !important;
  color: #333333 !important;
  font-family: Roboto !important;
  font-weight: bold;
  padding: 0px !important;
  width: 180px;
  float: right;
  margin-top: 5px;
  :focus {
    outline: none !important;
  }
}

.line_second {
  height: 550px;
  > div {
    background-color: rgb(89, 175, 233);
    box-shadow: 5px 5px 5px rgba(57, 8, 192, 0.4);
    border-radius: 8px;
    float: left;
    margin-left: 30px;
    margin-top: 20px;
    width: 350px;
    height: 450px;
    > tr {
      > td {
        display: table-cell;
        vertical-align: middle;
        width: 150px;
        > div {
          margin-top: 10px;
          margin-left: 5px;
        }
      }
    }
    > label {
      display: block;
      margin-top: 10px;
      margin-left: 10px;
    }
    .button_set {
      float: right;
      margin-right: 10px;
    }
    .server_style {
      > tr {
        > td {
          display: table-cell;
          vertical-align: middle;
        }
      }
    }
    > div {
      margin-top: 10px;
      margin-left: 10px;
      > label {
        display: block;
        margin-top: 20px;
        background-color: greenyellow;
        float: left;
      }
    }
  }
}
</style>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'OverView',
  computed: {
    ...mapGetters(['deviceInfo'])
  },
  methods: {
    refreshAction() {
      this.$store.dispatch('device/requestInfo', this.device_sn)
    }
  }
}
</script>
