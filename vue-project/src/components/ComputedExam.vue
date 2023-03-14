<template>
  <h1>Full Name : {{ fullName }}</h1>
</template>
<script>
// 모듈 형태로 만들어서 외부로 사용 가능하도록 한거
export default {
  data() {
    return {
      firstName: "SunaSuryeong",
      lastName: "Dongji",
    };
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
    },
  },
};
</script>
