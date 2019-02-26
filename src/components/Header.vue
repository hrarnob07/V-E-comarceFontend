
<template>
        <div class="manu">
     <nav class="navbar navbar-default">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <!-- <a class="navbar-brand" href="#"><img src="images/logo/logo.png" alt="Logo"></a> -->
          </div>


          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <div class="header-items">
              <ul class="nav navbar-nav">
               <router-link to="/" active-class="active" tag="li"><a>Home</a></router-link> 
                <li><router-link to="/about">About</router-link></li>
                <li><router-link to="/register/1">Register1</router-link></li>
                <li><router-link to="/register/2">Register2</router-link></li>
                <li><router-link to="/user">User</router-link></li>
                <router-link to="/portfolio" activeClass="active" tag="li"><a>Portfolio</a></router-link>
                <router-link to="/stocks" activeClass="active" tag="li"><a>Stocks</a></router-link>

                <li><a href="#" @click="saveData">Save Data</a></li>
                <li><a href="#" @click="loadData">Load Data</a></li>
              </ul>
              <!-- <div class="search">
                <a href="#"><i class="fa fa-search"></i></a>
              </div> -->
              <div class="login">
                <a href="#"><i class="fa fa-user"></i> Login</a>
              </div>
            </div> <!-- /.header-items -->
          </div><!-- /.navbar-collapse -->
     </nav><!--navbar-->
   </div><!--manu-->

    
</template>

<script>
export default {
    
}
</script>