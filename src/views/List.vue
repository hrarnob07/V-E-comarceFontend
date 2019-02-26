<template>
  
  <div class="panel body">
     <p>Filter and Mixins</p>
       <hr>
       <input v-model="filterText">
       <ul>
           <li v-for="fruit in filteredFruits" :key="fruit.id">{{fruit}}

           </li>
       </ul>


   

 

  </div>
  
</template>

<script>
import {FruitMixin} from'../FruitMixin';
export default {
// props:['quoteCount','maxQuote']
mixins:[FruitMixin],
data(){
 return {
    quoteCount:2,
    maxQuotes:10,
    fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
    filterText: ''
  }
},

}
</script>