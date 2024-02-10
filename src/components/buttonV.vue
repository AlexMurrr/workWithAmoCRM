<script setup>  
const props = defineProps({
  isActive: {type: String},
  nameButton:{type: String}
})

const emit = defineEmits(['updateName']);
const changeName = () => {
  const newName = 'Новое значение кнопки';
  emit('updateName', newName); // Отправляем новое значение имени в родительский компонент через событие 'updateName'
};

</script>

<template>
    <button :class="isActive" @click="changeName">{{ nameButton }}</button>    
</template>  
  

<style scoped>

.noActive {
  background-color: rgb(242, 242, 247); 
}

.active {
  background-color: rgb(9, 9, 146);
  color: white;
}

.spinner-btn {
  padding: 15px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  position: relative;
  overflow: hidden;
 
}

.spinner-btn::after {
  content: "";
  width: 20px;
  height: 20px;
  border: 2px solid #ffffff;
  border-top-color: transparent;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>