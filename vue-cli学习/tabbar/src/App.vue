<template>

  <div id="app">

<router-view></router-view>

    <tab-bar>
      <tab-bar-item path="/home" activeColor="#2DA2DF">
        <img slot="item-icon" src="./assets/img/tabbar/home.png" alt="" />
        <img slot="item-icon-active" src="./assets/img/tabbar/homeClicked.png" alt="" />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="#2DA2DF">
        <img slot="item-icon" src="./assets/img/tabbar/message.png" alt="" />
         <img slot="item-icon-active" src="./assets/img/tabbar/messageClicked.png" alt="" />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="#2DA2DF">
        <img slot="item-icon" src="./assets/img/tabbar/social.png" alt="" />
         <img slot="item-icon-active" src="./assets/img/tabbar/socialClicked.png" alt="" />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="#2DA2DF">
        <img slot="item-icon" src="./assets/img/tabbar/mine.png" alt="" />
         <img slot="item-icon-active" src="./assets/img/tabbar/mineClicked.png" alt="" />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "./components/tabbar/TabBar";
import TabBarItem from "./components/tabbar/TabBarItem";

export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem
  },
};
</script>

<style>
@import "./assets/css/base.css";

</style>
