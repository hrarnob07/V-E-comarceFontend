<template>
  <div class>
    <div class="form-group row">
      <label for="inputEmail3" class="col-sm-2 col-form-label">Name</label>
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
          id="inputEmail3"
          v-model="category.name"
          placeholder="Name"
        >
      </div>
    </div>
    <div class="form-group row">
      <label for="inputPassword3" class="col-sm-2 col-form-label">Description</label>
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
          v-model="category.description"
          placeholder="description"
        >
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
      },
    };
  },
  methods: {
    getCategoryByid(id) {
      
      this.axios.get("http://127.0.0.1/api-project/api/getCategoryById?id="+id,
      ).then(response=>{
         
          this.category.name = response.data.data[0].category_name;
          this.category.description = response.data.data[0].category_description;
      });
    }
  },

  mounted() {
    let id =this.$route.params.id;

    this.getCategoryByid(id);
  }
};
</script>

<style>
</style>
