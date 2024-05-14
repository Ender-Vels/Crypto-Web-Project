
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
  <div class=" main container">
  <TopNavigation/>

</div>
  <RouterView/>
</template>

<style>
@import "style.css";
</style>
