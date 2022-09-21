<template>
  <div id="app">
    <!--  vue-burger-menu-->
    <BurgerMenuPushRotate />
    <main id="page-wrap">
      <router-view/>
    </main>
    <!--    <nav>-->
    <!--      <router-link to="/">Home</router-link>-->
    <!--      |-->
    <!--      <router-link to="/about">About</router-link>-->
    <!--    </nav>-->
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
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
</style>


<script>
// vue-burger-menu
import  BurgerMenuPushRotate from '@/components/BurgerMenuPushRotate.vue'

export default {
  name: 'app',
  components: {
    BurgerMenuPushRotate
  }
}
</script>

