<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control class="tab-conrtol" :titles="titles"></tab-control>

    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import FeatureView from "./childComps/FeatureView";

  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tabControl/TabControl";

  import {getHomeMultidata , getHomeGoods} from 'network/home';


  export default {
    name: "Home",
    components: {
      HomeSwiper,
      RecommendView,
      FeatureView,
      NavBar,
      TabControl
    },
    data(){
      return {
        banners: [],
        recommends: [],
        titles: ['流行' , '新款' , '精选'],
        goods: {
          'pop' : {page : 0 , list: [] },
          'news' : {page : 0 , list : [] },
          'sell' : {page : 0 , list : [] }
        }
      }
    },
    created() {
      //1、请求多个数据
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    methods: {

    }
  }
</script>

<style scoped>
  #home {
    padding-top: 44px;
  }

  .nav-bar {
    background-color: var(--color-tint);
    color: white;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 6;
  }

  .tab-conrtol {
    position: sticky;
    top: 44px;
  }
</style>
