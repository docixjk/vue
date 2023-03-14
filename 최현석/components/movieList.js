export default {
  template:
    `
      <div>
        <table>
        <thead>
          <tr>
            <th>순위</th>
            <th>영화 제목</th>
            <th>누적 관객수</th>
            <th>개봉 날짜</th>
            <th></th>
          </tr>
        </thead>
          <tbody>
            <tr v-for="item in movieArray" :key="item.rank">
              <td>{{item.rank}}</td>
              <router-link tag="td" :to="{name : 'movieDetail',params:{'item':item}}">{{item.movieNm}}</router-link>
              <td>{{item.audiCnt}}</td>
              <td>{{item.openDt}}</td>
              <td>
                <button @click="del(item.rank)">삭제</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
  props: ['parentData'],
  data() {
    return {
      movieArray: {},
      MovDate: ''
    }
  },
  created: function () {
    this.MovDate = this.$parent.getSerDay();
    console.log("MovDate", this.MovDate);
    let yyyy = this.MovDate.substr(0, 4)
    let mm = this.MovDate.substr(5, 2)
    let dd = this.MovDate.substr(8, 2)
    console.log("yyyy=", yyyy, " mm=", mm, " dd=", dd)
    if (this.MovDate != '') {
      fetch(
        "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=" + yyyy + mm + dd
      )
        .then((res) => res.json())
        .then((data) => {
          this.movieArray = data.boxOfficeResult.dailyBoxOfficeList;

        });
    }
  },
  methods: {
    del: function (rank) {

      for (let i = 0; i < this.movieArray.length; i++) {

        if (this.movieArray[i].rank == rank) {
          this.movieArray.splice(i, 1);
        }
      }
      // 변경된 data를 알려준다
      this.$parent.setParentData(this.movieArray);
    }
  },
}