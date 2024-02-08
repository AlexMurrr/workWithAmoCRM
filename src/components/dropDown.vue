<script setup>

import { ref, onMounted, watch } from 'vue';
import  buttonSelect  from './buttonV.vue';

    const selectedItem = ref('');   
    let activeBtn = '';
    let dis = '';

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
      dis = true;
    }else if (newValue !=='Не выбрано') {
      activeBtn = 'active';
      dis = false;
    }
});

</script>

<template>
    <div>      
       
      <select v-model="selectedItem">
        <option v-for="item in items" :key="item.id" :value="item.name">{{ item.name }}</option>
      </select>     
    </div>
    <div>
      <buttonSelect :isActive="activeBtn" :disabled="dis"/>
    </div>
  </template>
  
  