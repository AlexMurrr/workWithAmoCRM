<script setup>
  import dropDown from './dropDown.vue';
  import contanerV from './contanerV.vue';
  

  const items = [
          { id: 1, name: 'Не выбрано' },
          { id: 2, name: 'Сделка' },
          { id: 3, name: 'Контакт' },
          { id: 4, name: 'Компания' }
        ];
</script>

<template> 
   <dropDown :items="items"/>  
   <contanerV/>
</template>

<style scoped>

</style>