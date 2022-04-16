import API from '/src/utils/api.js'
DCApi.method = {
  restart: 'restart', // 重启
  info: 'info', // 参数读取设置
  ota: 'ota', // 固件升级
  comtext: 'comtext', // 端口监测
  topo: 'topo', // 拓扑结构
  call_data: 'call_data', // 读取设备数据
  sync: 'sync', // 配置同步
  config_file: 'config_file' // 配置文件传输
}
// DC:DataCenter 数据中台
export default class DCApi {
  constructor(method, sn, playload) {
    this.method = method
    this.sn = sn
    this.playload = playload
    return this
  }
  build() {
    const data = {
      msgid: this.msgid,
      method: this.method,
      sn: this.sn,
      timestamp: this.timestamp,
      payload: this.payload
    }
    return API.POST('', data)
  }
}

DCInfoAPI.type = {
  STATIC: 'STATIC', // 固定值参数，只需读取一次
  BASIC: 'BASIC', // 基础参数
  UART: 'UART', // 串口参数
  ETH: 'ETH', // 网口参数
  GSM: 'GSM', // 4G参数
  LORA: 'LORA', // lora参数
  WIFI: 'WIFI', // wifi参数
  DIDO: 'DIDO' // 开关量、模拟量参数
}

export class DCInfoAPI extends DCInfoAPI {
  constructor(sn, playload) {
    super(DCApi.method.info, sn, playload)
  }
  static READ(sn, type) {
    return new DCInfoAPI(sn, { cmd: 'READ', type: type })
  }
  static WRITE(sn, type) {
    return new DCInfoAPI(sn, { cmd: 'WRITE', type: type })
  }
}
