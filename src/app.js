import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)

var app = new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: false,
    loading3: false,
    message: 'asd'
  },
  methods: {
    inputChange(){
      console.log('asd');
    }
  }
})

// 单元测试

// {
//   const Constructor = Vue.extend(Button)
//   const button = new Constructor({
//     propsData: {
//       icon: 'setting',
//       loading: true
//     }
//   })
//   button.$mount()
//   let useElement = button.$el.querySelector('use')
//   let href = useElement.getAttribute('xlink:href')
//   expect(href).to.eq('#i-loading')
// }