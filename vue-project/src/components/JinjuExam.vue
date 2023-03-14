<template>
  <div>
    <button @click="loadJinju">데이터 호출</button>
    <table>
      <thead>
        <tr>
          <th>축제이름</th>
          <th>주소</th>
          <th>홈페이지</th>
          <th>사진</th>
          <th>연락처</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in jinjuArray" :key="item.idx">
          <td>{{ item.name }}</td>
          <td>{{ item.address }}</td>
          <td>{{ item.homepage }}</td>
          <td v-for="img in item" :key="img.i">
            <img :src="img.images[i]" style="width: 100px" /><br />
          </td>
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
      jinjuArray: {},
    };
  },
  methods: {
    loadJinju() {
      fetch(
        "https://cors-anywhere.herokuapp.com/https://www.jinju.go.kr/openapi/tour/festival.do"
      )
        .then((res) => res.json())
        .then((data) => {
          this.jinjuArray = data.results;
          console.log(this.jinjuArray);
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
