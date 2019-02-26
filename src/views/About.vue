<template>
  
  <div class="container">
    <div class="about">
         <h1 v-highlight="'green'">This is an about page</h1>
       
       <h1 v-colorhighlight:background.delayed="'red'">This is an about page</h1>
       <p v-teststyle:background.delayed.blink="{mainColor: 'red', secondColor: 'green', delay: 1000}"> Hafijur rahman Arnob</p>
       
       
       
       <div class="progress">
                  <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                        :style="{width: (quoteCount / maxQuotes) * 100 + '%'}">
                        {{ quoteCount }} / {{ maxQuotes}}
                    </div>  
       </div>
       <hr>
       <input v-model="filterText">
       <ul>
           <li v-for="fruit in filteredFruits" :key="fruit.id">{{fruit}}

           </li>
       </ul>
       


   

  </div>
<h1>Mixins </h1>
  <AppList></AppList>

  </div>
  
</template>

<script>
import {FruitMixin} from'../FruitMixin';
import List from './List.vue';
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
directives:{
  'teststyle':{
    bind(el,binding){
     var delay = 0;
      if (binding.modifiers['delayed']) {
          delay = 3000;
      }
      if (binding.modifiers['blink']) {
                        let mainColor = binding.value.mainColor;
                        let secondColor = binding.value.secondColor;
                        let currentColor = mainColor;
                        setTimeout(() => {
                            setInterval(() => {
                                currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor;
                                if (binding.arg == 'background') {
                                    el.style.backgroundColor = currentColor;
                                } else {
                                    el.style.color = currentColor;
                                }
                            }, binding.value.delay);
                        }, delay);
                    }
        
        else{
          el.style.color="yellow";
        }



    }
  }
},
components:{
    AppList:List
}



}
</script>