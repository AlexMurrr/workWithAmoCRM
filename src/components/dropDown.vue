<script setup>

import { ref, onMounted } from 'vue';

    const selectedItem = ref('items[0].name');
       
    const items = [
          { id: 1, name: 'Не выбрано' },
          { id: 2, name: 'Сделка' },
          { id: 3, name: 'Контакт' },
          { id: 4, name: 'Компания' }
        ];
    onMounted(() => {
      selectedItem.value = items[0].name;
    });   
     
  </script>

<template>
    <div>
      <select v-model="selectedItem">
        <option v-for="item in items" :key="item.id" :value="item.name">{{ item.name }}</option>
      </select>     
    </div>
  </template>
  
  