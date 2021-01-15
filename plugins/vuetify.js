import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const VBtn = Vue.component('VBtn')
VBtn.options.props.ripple.default = false

export default new Vuetify()
