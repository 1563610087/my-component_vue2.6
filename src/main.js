import HelloWorld from './components/HelloWorld/index'


const components=[
  HelloWorld
]


const install=function(vue) {
  components.forEach(component =>{
    vue.component(component.name, component)
  })
}

export default {
  HelloWorld,
  install
}
