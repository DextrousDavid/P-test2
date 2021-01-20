import Vue from 'vue'
import CodeInputa from 'vue-verification-code-input'
const CodeInput = {
  install(Vue, options) {
    Vue.component('CodeInput', CodeInputa)
  },
}
Vue.use(CodeInput)
export default CodeInput
