<template>
    <div>
      <select v-model="selectedItem">
        <option v-for="item in items" :key="item.id" :value="item.id">{{ item.name }}</option>
      </select>
      <p>Выбрано: {{ selectedItem }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedItem: null,
        items: [
          { id: 1, name: 'Вариант 1' },
          { id: 2, name: 'Вариант 2' },
          { id: 3, name: 'Вариант 3' }
        ]
      };
    }
  };
  </script>