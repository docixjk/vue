import main from "../components/main.js";
import movieDetail from '../components/movieDetail.js';
import movieList from '../components/movieList.js';

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "main",
      component: main,
    },
    {
      path: "/movieDetail/:item",
      name: "movieDetail",
      component: movieDetail,
      props: true
    },
    {
      path: "/movieList",
      name: "movieList",
      component: movieList,
    },
  ],
});
