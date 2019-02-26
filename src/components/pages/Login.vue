<template>  
<div class="login">
    <div class="loginHeader">
       user login
    </div>
    <div class="loginContainer">
        <table>   
          <tr>
            <td>Email</td>
            <td>:</td>
          <td><input type="text" placeholder="email" v-model="user.email"/></td>
        </tr>
        <tr>
          <td>password</td>
          <td>:</td>
        <td> <input type="password" placeholder="password" v-model="user.password"/></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
          <td><button class="addBtn" @click="loginNow()">login</button></td>
          </tr>
          <tr>
          <p class="message">Not registered? <a href="#">Create an account</a></p>
          </tr>
        </table>
      </div>

</div>
 
 
</template>
<script>

import { EventBus } from '../../main';

export default {
  
  data() {
    return {
      user:{
        email:"",
        password:""
      }
    }
  },
  methods: {
    loginNow(){
      alert("fd")
      // console.log(this.user);
      // EventBus.$emit("lodingStatus",false);
      // this.axios.post("http://127.0.0.1/api-project/api/login?email="+this.user.email+"&password="+this.user.password)
      // .then( res=>{
      //   console.log(res);
      //       // this.$router.push({name:"admin"});
      // });
     
      localStorage.setItem("token","login");
      this.$router.push({name:"admin"});

      
      
    }
  },
    
}
</script>