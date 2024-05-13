
<script >
import TopNavigation from './components/TopNavigation.vue'
import HomePage from './components/HomePage/HomePage.vue'
export default {
  components:{
    TopNavigation,
    HomePage
  },

}
</script>

<template>
<div class="container">
  <TopNavigation/>
  <HomePage/>
</div>
</template>

<style>
@import "style.css";
</style>
