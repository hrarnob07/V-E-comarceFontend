<template>
  <div id="app">
  
       <!-- <div class="container"> -->
            <!-- <AppHeader></AppHeader> -->
       <!-- </div>v-if="loding" -->

    <div class="container">
         <div v-if="loding">
         <!-- <i class="icon ion-md-heart"></i> -->

         </div>
         <router-view/>
    </div>
    
  </div>
</template>



<script>
import { EventBus } from './main';
// import Header from './components/Header.vue'
export default {
  data() {
    return {
      loding: false
    }
  },
  components:{
    // AppHeader:Header
  },
  //  mounted() {
  //       EventBus.$on('lodingStatus', data => {
  //           this.loding = data;
  //       });
  //   }

  // created() {
  //   EventBus.$on('lodingStatus', data => {
  //           this.loding = data;
  //           // alert("alert");
  //           // console.log(data);
  //       });
  // },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
