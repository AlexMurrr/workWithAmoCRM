<script setup>

import { ref, onMounted, watch } from 'vue';
import  buttonSelect  from './buttonV.vue';

    const selectedItem = ref('');   
    let activeBtn = 'noActive';
    const props = defineProps({
      items: {
      type: Array,
      default: () => [{
      id: 1,
      name: 'Item 1'
    }, {
      id: 2,
      name: 'Item 2'
    }]
  }
});

  const items = ref(props.items);       
   
    onMounted(() => {
      selectedItem.value = items.value[0].name;
    });   
  
watch(selectedItem, (newValue, oldValue) => { 
    if (newValue ==='Не выбрано'){
      activeBtn = 'noActive';
    }else if (newValue !=='Не выбрано') 
      activeBtn = 'active'
});

  </script>

<template>
    <div>      
       
      <select v-model="selectedItem">
        <option v-for="item in items" :key="item.id" :value="item.name">{{ item.name }}</option>
      </select>     
    </div>
    <div>
      <buttonSelect :isActive="activeBtn"/>
    </div>
  </template>
  
  