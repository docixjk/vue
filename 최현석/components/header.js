//모듈
export default {
  template:
    `
    <header>
      <p>영화 검색 사이트</p>
      <p>영화 검색 (오늘 날짜 : {{date}} )</p>
      <input type="date" v-model="serDay">
      <button @click="search">검색</button>
    </header>
    `,
  props: ['parentData'],
  data() {
    return {
      date: '',
      serDay: ''
    }
  },
  created() {
    let today = new Date();
    let dateFormat = today.getFullYear() + "년" +
      (today.getMonth() + 1) + "월" +
      today.getDate() + "일";
    return this.date = dateFormat
  },
  methods: {
    search: function () {

      console.log(this.serDay)
      this.$parent.setSerDay(this.serDay);
      this.$router.push({ name: "movieList" })
    }
  },
}