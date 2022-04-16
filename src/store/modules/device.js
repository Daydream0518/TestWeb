import { resetRouter } from '@/router'

const state = {
  productKey: '',
  softVersion: '',
  info: { product: '', softcode: '', sofrversion: '', bootloadVer: '', produceTime: '', imei: '', ccid: '' },
  basicinfo: {
    sn: '',
    devName: '',
    projectName: '',
    country: '',
    location: '',
    time: '',
    timeZone: '',
    runTime: '',
    state: '',
    gsmRssi: '',
    wifiRssi: '',
    loraRssi: '',
    sendPkt: '',
    recvPkt: '',
    devCnt: '',
    devOnlineCnt: '',
    uartCnt: '',
    ethCnt: '',
    loraCnt: '',
    addrUp1: '',
    addrPort1: '',
    addrUp2: '',
    addrPort2: '',
    addrUp3: '',
    addrPort3: ''
  }
}

const mutations = {
  SET_INFO: (state, info) => {
    state.info = info
  },
  SET_SOFT_VERSION: (state, version) => {
    state.softVersion = version
  },
  SET_SOFT_PRODUCTKEY: (state, productKey) => {
    state.productKey = productKey
  }
}

const actions = {
  requestInfo: ({ commit }, sn) => {
    const softCode = (Math.random() * 1).toFixed().toString()
    const version = '1.' + softCode + '.0'
    const type = 'AWT200'
    const productKey = 'LDKSNPFJDKWEOJ'
    setTimeout(() => {
      commit('SET_INFO', {
        deviceType: type,
        productKey: 'LDKSNPFJDKWEOJ',
        softCode: softCode,
        softVersion: version
      })
      commit('SET_SOFT_VERSION', version)
      commit('SET_SOFT_PRODUCTKEY', productKey)
      resetRouter(type)
    }, 10)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
