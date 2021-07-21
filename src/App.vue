<template>
  <div id="app">
    <ul>
      <li @click="handleClick('HelloWorld')">首页</li>
      <li @click="handleClick('another')">画面页</li>
      <li @click="handleClick('last')">后面</li>
    </ul>
    <transition :name="transitionName">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return{
      transitionName: ''
    }
  },
  methods: {
    handleClick(value) {
      // console.log(value);
      switch(value) {
        case 'HelloWorld':
          this.$router.push("/HelloWorld");
          break;
        case 'another':
          this.$router.push("/another");
          break;
        case 'last':
          this.$router.push("/last");
          break;
      }
    }
  },
  watch: {
    $route(to, from) {
      if(to.meta.index > from.meta.index) {
        this.transitionName = 'slide-right';
      }else{
        this.transitionName = 'slide-left';
      }
    }
  }
}
</script>

<style>
#app {
  overflow: hidden;
}
ul{
  overflow: hidden;
  padding: 20px 0;
}
  ul li{
    float: left;
    list-style: none;
    margin: 0 20px;
  }


.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all .5s ease-in-out;
  position: absolute;
}
.slide-left-enter {
  opacity: 0;
  transform: translateX(-100%);
}
.slide-right-enter {
  opacity: 0;
  transform: translateX(100%);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translateX(100%);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translateX(-100%);
}
</style>
