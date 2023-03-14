import header from './components/header.js'
import router from './router/router.js'


let template =
  `
    <div>
      <my-header v-bind:parentData.sync="this.$data"></my-header>
      <router-view></router-view>
    </div>
  `;

new Vue({
  el: '#app',
  template: template,
  data: {
    movieArray: {},
    serDay: ''
  },
  components: {
    'my-header': header
  },
  methods: {
    getParentData: function () {
      console.log(this.movieArray)
      return this.movieArray
    },
    setParentData: function (dataList) {
      this.movieArray = dataList
      console.log(this.movieArray)
    },
    getSerDay: function () {
      console.log("getSerDay", this.serDay)
      return this.serDay
    },
    setSerDay: function (day) {
      this.serDay = day
      console.log("setSerDay", this.serDay)
    }
  },
  router
})
