<template>
  <div>
    <button type="button" @click="getData">데이터 출력</button>
    <table>
      <thead>
        <tr>
          <th>영화이름</th>
          <th>개봉일</th>
          <th>가는길</th>
          <th>사진</th>
          <th>연락처</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in gimhaeArray" :key="item.idx">
          <td>{{ item.name }}</td>
          <td>{{ item.address }}</td>
          <td>{{ item.content }}</td>
          <td><img :src="item.images[0]" style="width: 100px" /><br /></td>
          <td>{{ item.phone }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      movieData: {},
    };
  },
  methods: {
    getData() {
      fetch(
        "https://cors-anywhere.herokuapp.com/http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230313"
      )
        .then((res) => res.json())
        .then((data) => {
          this.movieData = data.boxOfficeResult.dailyBoxOfficeList;
          console.log(this.movieData);
        });
    },
  },
};
</script>
