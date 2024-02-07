<script setup>

import { ref, onMounted, defineProps } from 'vue';

    const selectedItem = ref('');   

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
       
    // const items = [
    //       { id: 1, name: 'Не выбрано' },
    //       { id: 2, name: 'Сделка' },
    //       { id: 3, name: 'Контакт' },
    //       { id: 4, name: 'Компания' }
    //     ];

    onMounted(() => {
      selectedItem.value = items.value[0].name;
    });   
     
  </script>

<template>
    <div>
      <select v-model="selectedItem">
        <option v-for="item in items" :key="item.id" :value="item.name">{{ item.name }}</option>
      </select>     
    </div>
  </template>
  
  