<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style=activeStyle>
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem" ,
    props: {
      path: String,
      activeColor: {
        type: String ,
        default: 'red'
      }
    },
    data() {
      return {

      }
    },
    methods : {
      itemClick() {
        this.$router.replace(this.path)  //跳转到动态传值过来的path路由
      }
    },
    computed: {
      isActive(){
        return this.$route.path.indexOf(this.path) != -1
      },
      activeStyle(){
        return this.isActive ? {color: this.activeColor} : {}  //当前如果处于活跃状态，则字体颜色显示为指定颜色，否则为默认
      }
    }
  }
</script>

<style scoped>

  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;  /* 一般tabBar的高度都是49px */
    font-size: 14px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }

  .active {
    color: red;
  }
</style>
