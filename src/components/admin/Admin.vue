<template>  
<div class="admin">
    <div id="header">
      <h1 class="fleft">A simple E-comerce</h1>
      <a href="#" class="fright" @click="logOut()"> <i class="fa fa-cart-plus"></i> login Out</a>
    </div>
    <div id="sidebar">
      <ul class="navs">
        
          <router-link :to="{name:'admin.category'}" activeClass="active" tag="li"><a> <i class="fa fa-home"></i> Categories</a></router-link>
          <router-link :to="{name:'product'}" activeClass="active" tag="li"><a>Product</a></router-link>
          <router-link :to="{name:'admin.Supliers'}" activeClass="active" tag="li"><a>Supliers</a></router-link>
          <router-link :to="{name:'product'}" activeClass="active" tag="li"><a>Shops</a></router-link>
          <router-link :to="{name:'mylocaton.map'}" activeClass="active" tag="li"><a>Location</a></router-link>
          
          <!-- <li><router-link to="">Product</router-link></li>
          <li><router-link to="">supliers</router-link></li>
         <li> <router-link to="">Shops</router-link></li> -->
          
        
      </ul>
    </div>
    <div id="main">
      <router-view/>
    </div>
    

</div>
 
 
</template>
<script>

// import { EventBus } from '../../main';

export default {
  
  data() {
    return {
      user:{
        email:"",
        password:""
      }
    }
  },
  mounted() {
    var token=localStorage.getItem("token");
    if(!token){
       this.$router.push({name:"login"});
    }
  },
  methods: {
    logOut(){
      localStorage.setItem("token","");
      this.$router.push({name:"login"});
    }
  },
    
}
</script>