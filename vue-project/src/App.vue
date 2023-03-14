<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/computedExam">ComputedExam</router-link> |
    <router-link to="/DataBinding">DataBinding</router-link> |
    <router-link to="/EventClick">EventClick</router-link> |
    <router-link to="/JinjuExam">JinjuExam</router-link> |
    <router-link to="/Kimhae">Kimhae</router-link> |
    <router-link to="/MovieBox">MovieBox</router-link> |
    <router-link to="/FineDust">FineDust</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
table {
  margin: 0 auto;
}
</style>
