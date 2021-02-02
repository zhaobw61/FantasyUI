import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
// import Row from './row'
// import Col from './col'
import Toast from './toast'
import plugin from './plugin'

import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'
import Popover from './popover'
import Collapse from './collapse'
import CollapseItem from './collapse-item'
import Cascader from './cascader'



Vue.component('g-button', Button)
// Vue.component('g-cascader', Cascader)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
// Vue.component('g-row', Row)
// Vue.component('g-col', Col)
Vue.component('g-toast', Toast)

Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)
Vue.component('g-popover', Popover)
Vue.component('g-collapse', Collapse)
Vue.component('g-collapse-item', CollapseItem)

Vue.use(plugin)

new Vue({
  el: '#app',
  components: {
    'g-cascader': Cascader
  },
  data: {
    loading1: false,
    loading2: false,
    loading3: false,
    message: 'asd',
    selectedTab: 'sports',
    selectedVal: ['1'],
    single: true,
    source: [
      {
        name: '浙江',
        children: [
          {
            name: '杭州',
            children: [
              {name: '杭州-1'},
              {name: '杭州-2'},
              {name: '杭州-3'},
              {name: '杭州-4'}
            ]
          },
          {
            name: '嘉兴',
            children: [
              {name: '嘉兴-1'},
              {name: '嘉兴-2'},
              {name: '嘉兴-3'},
              {name: '嘉兴-4'}
            ]
          },
          {name: '湖州'}
        ]
      },{
        name: '福建',
        children: [
          {
            name: '福州',
            children: [
              {name: '福州-1'},
              {name: '福州-2'},
              {name: '福州-3'}
            ]
          },
          {name: '福建-2'},
          {name: '福建-3'}
        ]
      }
    ]
  },
  methods: {
    inputChange(){
      console.log('asd');
    },
    showToast() {
      this.$toast('test',{
        closeButton: {
            text: '知道了',
            callback () {
                console.log('用户说知道了');
            }
        },
        position: 'bottom'
      });
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