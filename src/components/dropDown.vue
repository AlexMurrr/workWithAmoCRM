<script setup>

import { ref, onMounted, watch } from 'vue';
import  buttonSelect  from './buttonV.vue';
import { modalStore } from '../stores/modalStore';
import { storeToRefs } from 'pinia';

const storeModal = modalStore();
      
    const activeBtn = ref('');
    let dis = '';
    let nameButton = ref('Создать');

    const { items, selectedItem } = storeToRefs(storeModal); //    
   
    onMounted(() => {
      selectedItem.value = items.value[0].name;
    });   
  
    watch(selectedItem, (newValue, oldValue) => { 
        if (newValue ==='Не выбрано'){
          activeBtn.value = 'noActive';
          dis = true;
        }else if (newValue !=='Не выбрано') {
          activeBtn.value = 'active';
          dis = false;
        }
    });

    function s () {
      activeBtn.value = 'spinner-btn';
      nameButton.value='';
      setTimeout(()=>{
      activeBtn.value = 'active';
      nameButton.value='Cоздать';
    }, 2000)   
    }
   

</script>

<template>
    <div>          
      <select class="custom-select" v-model="selectedItem" >
        <option v-for="item in items" :key="item.id" :value="item.name">{{ item.name }}</option>
      </select>     
    </div>
    <div>
      <buttonSelect class="button" @click="s" :isActive="activeBtn" :nameButton = 'nameButton' :disabled="dis"/>
    </div>
</template>
  
 <style>
.custom-select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding: 10px;
  font-size: 16px;
  border: 1px solid rgb(245, 244, 250);
  border-radius: 5px;
  background-color: rgb(134, 183, 248);
  cursor: pointer;
  color: aliceblue;
}

.custom-select:focus {
  outline: none;
}

.custom-select option {
  padding: 10px;
}

.button {
  display: inline-block;
  padding: 7px 15px;
  background-color: #eee5e7;
  color: rgb(80, 76, 76);
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  border: 1px solid #f3dce2;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}

</style>