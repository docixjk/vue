export default {
  template:
    `
      <div>
        <p>제목 : {{item.movieNm}}</p>
        <ul>
          <li>
            배우 : <span v-for="actor in actors">{{actor.peopleNm}} </span> 
          </li>
          <li>
            감독 : {{peopleNm}}
          </li>
          <li>
            장르 : {{genreNm}}
          </li>
          <li>
            상영 시간 : {{showTm}}
          </li>
        </ul>
        <router-link tag="button" :to="{name : 'movieList'}">목록</router-link>
      </div>
    `,
  props: ['item'],
  data() {
    return {
      detailArray: {},
      actors: {},
      peopleNm: '',
      genreNm: '',
      showTm: '',
    }
  },
  created() {
    fetch(
      "https://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&movieCd=" + this.item.movieCd
    )
      .then((res) => res.json())
      .then((data) => {
        this.detailArray = data.movieInfoResult.movieInfo;
        this.actors = this.detailArray.actors;
        this.peopleNm = this.detailArray.directors[0].peopleNm;
        this.genreNm = this.detailArray.genres[0].genreNm;
        this.showTm = this.detailArray.showTm;
      });
  },
}