<template>
  <div>
    <h1>수도권 미세먼지 현황</h1>

    <table>
      <thead>
        <tr>
          <th>지역</th>
          <th>미세먼지 농도/대기질</th>
          <th>초미세먼지 농도/대기질</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in FineDustArray" :key="item.idx">
          <td>{{ item.MSRSTE_NM }}</td>
          <td>{{ item.PM10 }} / {{ good10 }}</td>
          <td>{{ item.PM25 }} / {{ good25 }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      FineDustArray: {},
      good10: "",
      good25: "",
    };
  },
  created() {
    fetch(
      "https://cors-anywhere.herokuapp.com/http://openapi.seoul.go.kr:8088/6d4d776b466c656533356a4b4b5872/json/RealtimeCityAir/1/99"
    )
      .then((res) => res.json())
      .then((data) => {
        this.FineDustArray = data.RealtimeCityAir.row;
        console.log(this.FineDustArray);
        for (let i = 0; i < this.FineDustArray.length; i++) {
          console.log(this.FineDustArray[i].PM25);
          if (this.FineDustArray[i].PM10 <= 100) {
            this.good10 = "좋음";
          }
          if (this.FineDustArray[i].PM10 > 100) {
            this.good10 = "나쁨";
          }
          if (this.FineDustArray[i].PM25 <= 35) {
            this.good25 = "좋음";
          }
          if (this.FineDustArray[i].PM25 > 35) {
            this.good25 = "나쁨";
          }
        }

        return this.FineDustArray;
      })
      .catch((err) => console.log(err));
  },
};
</script>
