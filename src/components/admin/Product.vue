<template>  
<div class="Product">
    
  <div class="Product">
    <div class="row">
      <div class="col-sm-12 col-md-12">
        <div class="header">
          <h3 class="fleft">Product</h3>
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
          
        </table>
      </div>
    </div>
  </div>

</div>
 
 
</template>
<script>



export default {
  
  data() {
    return {
      product:{
        name:"x",
        category:"u",
        price:"100",
        status:'availale'
      }

    }
  },
  methods: {
    NewCategory(){
      this.axios.post("http://127.0.0.1/api-project/api/add-product" ,this.product).then(response=>{
                  console.log(response.data);
                  this.allCategory();
          });
    }
    
  },
    
}
</script>