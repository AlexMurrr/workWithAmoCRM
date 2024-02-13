<script setup>
  import dropDown from './dropDown.vue';
  import contanerV from './contanerV.vue';
  import titleV from './titleV.vue';
  

  const items = [
          { id: 1, name: 'Не выбрано' },
          { id: 2, name: 'Сделка' },
          { id: 3, name: 'Контакт' },
          { id: 4, name: 'Компания' }
        ];

  const title = 'Давайте создадим сущность';

</script>

<template> 
  <div  class="total">
   <titleV :title="title"/>
   <dropDown :items="items"/>  
   <div class="contaner">
    <contanerV/>
   </div>
  </div>
</template>

<style scoped>
  .total{
    display: flex;
    justify-content: center; 
    align-items: center;
    flex-direction: column;
    gap: 30px;
    background: linear-gradient(to bottom, #00d2ff, #928dab);    
    height: 570px;
    width: 600px;
    border-radius: 15px;
  } 
 
</style>