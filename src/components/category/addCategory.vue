<template>
  <!-- <transition>
        <div class="modal">
            <div class="modalContainer">

                     <div class="modalHeader">
                        <h1>Modal comp</h1>
                    </div>

                     <div class="modalContent">
                     </div>

                    <div class="modalFooter">
        
                    </div>

            </div>
        </div>
  </transition>-->
  <div class="">
    <div class="form-group row">
      <label for="inputEmail3" class="col-sm-2 col-form-label">Name</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="inputEmail3"  v-model="category.name" placeholder="Name">
      </div>
    </div>
    <div class="form-group row">
      <label for="inputPassword3" class="col-sm-2 col-form-label">Description</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" v-model="category.description" placeholder="description">
      </div>
     
    </div>
     <button class="btn btn-primary pull-right" @click="saveCategory()">Save</button>

   
  </div>
</template>

<script>
export default {
  data() {
    return {
      category: {
        name: "",
        description: ""
      }
    };
  },
  methods: {
    saveCategory() {
      //  console.log(this.category)
      //  let categorys=JSON.stringify(this.category);
      this.axios
        .post(
          "http://127.0.0.1/api-project/api/addCategory?name=" +
            this.category.name +
            "&description=" +
            this.category.description
        )
        .then(response => {
          console.log(response.data);
        });

      //      console.log(cart)
      //      this.axios.post("http://127.0.0.1/api-project/api/addCategory",cart
      //      ,
      //      { headers: {  'Content-type': 'application/x-www-form-urlencoded',},
      //      }  )
      //   .then( res=>{
      //     console.log(res);
      //         // this.$router.push({name:"admin"});
      //   });

      //  this.axios.get("http://127.0.0.1/api-project/api/open")
      //    .then( res=>{
      //         console.log(res)
      //    });

      //  this.$router.push({name:'admin'})
    }
  }
};
</script>

<style>
</style>
