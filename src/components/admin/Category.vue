<template>
  <div class="category">
    <div class="row">
      <div class="col-sm-12 col-md-12">
        <div class="header">
          <h3 class="fleft">categories</h3>
          <button class="btn btn-primary fright" @click="NewCategory()">
            <i class="fa fa-cart-plus"></i> New category
          </button>
        </div>
      </div>
    </div>
     <br>
    <div class="row">
      <div class="col-sm-12 col-md-12">
        <table class="table table-striped table-bordered" width="100%" cellspacing="0">
          <thead class="thead-dark">
            <tr>
              <th>Sn</th>
              <th>Category Name</th>
              <th>Category description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tr v-for="(product,index)  in allProduct.data" :key="index">
            <td>{{index+1}}</td>
            <td>
              <strong>{{product.category_name}}</strong>
            </td>
            <td>{{product['category_description']}}</td>

            <td>
              <router-link style="padding:10px;" class="action" :to="{name:'category.edit',params:{id:product.id}}"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></router-link>
              <a style="padding:10px;" href="javascript:void(0)" @click="deleteCategory(product.id)"><i class="fa fa-times" aria-hidden="true"></i></a>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      allProduct: ""
    };
  },
  methods: {
    NewCategory() {
      this.$router.push({ name: "admin.modal" });
    },
    deleteCategory(id)
    {
        if(confirm("Are you sure ?"))
        {
          this.axios.post("http://127.0.0.1/api-project/api/deleteCategory?id="+id).then(response=>{
                  console.log(response.data);
                  this.allCategory();
          });
        }
    },
    allCategory()
    {
       this.axios.get("http://127.0.0.1/api-project/api/getcategory").then(res => {
      console.log(res.data);
      this.allProduct = res.data;
      // this.$router.push({name:"admin"});
    });
    }
  },
  mounted() {
     this.allCategory();
  }
};
</script>