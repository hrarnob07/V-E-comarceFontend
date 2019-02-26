import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue';

import Login from './components/pages/Login.vue';
import Admin from './components/admin/Admin.vue';
import Category from './components/admin/Category.vue';
import Product from './components/admin/Product.vue';
import Supliers from './components/admin/Supliers.vue';
import addCategory from '@/components/category/addCategory.vue';
import EditCategory from '@/components/category/EditCategory.vue';
import Map from '@/components/location/Map.vue';



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect:{path:"login"}
    },
    {
      path: "/login",
      name: 'login',
      component:Login
    
    },
    {
      path: "/admin",
      name: "admin",
      component:Admin,
      redirect:{name:"admin.category"},
      children:[
        {
          path: "",
          name: "admin.category",
          component:Category
        
        },
        {
          path: "/Product",
          name: "product",
          component:Product
        
        },
        {
          path: "/Supliers",
          name: "admin.Supliers",
          component:Supliers
        
        },
        {
          path: "/addCategory",
          name: "admin.modal",
          component:addCategory
        
        },
        {
          path: "/edit/:id",
          name: "category.edit",
          component:EditCategory
        },
        {
          path: "map",
          name: "mylocaton.map",
          component:Map
        }


      ]
    
    },
   

    
   


  ]
})
