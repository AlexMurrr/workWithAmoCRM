<script setup>  
import { useAmoStore }  from '../stores/amoStore';
import { modalStore } from '../stores/modalStore';
import { storeToRefs } from 'pinia';
import { watch, watchEffect } from 'vue';

const storeModal = modalStore();
const { selectedItem } = storeToRefs(storeModal); 

const amoStore = useAmoStore();
const { deals } = storeToRefs(amoStore);
const { listEntity } = amoStore;

function check(){
  console.log(selectedItem.value);
}

 watchEffect(selectedItem, listEntity(selectedItem));
</script>

<template>  
  
   <div class="resultContaner">

    <!-- <button @click="check">check</button> -->

  <ul>
    <li v-for="item in listEntity(selectedItem)">{{ item }}</li>  
  </ul>
</div>

</template>  
  

<style scoped>
.resultContaner {
    width: 350px;
    height: 300px;
    overflow: auto;
    background-color: rgb(19, 47, 99);
    border-radius: 5%;
    color: #fff;
}

</style>