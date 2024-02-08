<script setup>
  import dropDown from './dropDown.vue';
  

  const items = [
          { id: 1, name: 'Не выбрано' },
          { id: 2, name: 'Сделка' },
          { id: 3, name: 'Контакт' },
          { id: 4, name: 'Компания' }
        ];
</script>

<template>
 
   <dropDown :items="items"/>  
</template>

<style scoped>

</style>