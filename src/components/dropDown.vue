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
      <select v-model="selectedItem">
        <option v-for="item in items" :key="item.id" :value="item.name">{{ item.name }}</option>
      </select>     
    </div>
    <div>
      <buttonSelect @click="s" :isActive="activeBtn" :nameButton = 'nameButton' :disabled="dis"/>
    </div>
</template>
  
  