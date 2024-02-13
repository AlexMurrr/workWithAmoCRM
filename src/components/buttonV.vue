<script setup>  
import { storeToRefs } from "pinia";
import { amoStore } from '../stores/amoStore'
import axios from 'axios';

const amo = amoStore();
const {eee} = storeToRefs(amo);
function eeee (){
console.log(eee.value);
}

const access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImY0YWE2NDk4NDgyYWM3OGQ4MjMzOWFmOTBiMmRiNzYzNGVlN2Q4NjNkZGYxYmI5YTZiZGQ0Zjg4NTE3OGZkMTc5OGUzZmViNWVjYTVjNjc0In0.eyJhdWQiOiI2ZmU0Zjg3OS05MTMwLTQ1NDUtYjk2MS1jOWUzYWE5NjEyNmQiLCJqdGkiOiJmNGFhNjQ5ODQ4MmFjNzhkODIzMzlhZjkwYjJkYjc2MzRlZTdkODYzZGRmMWJiOWE2YmRkNGY4ODUxNzhmZDE3OThlM2ZlYjVlY2E1YzY3NCIsImlhdCI6MTcwNzc5NzE3NiwibmJmIjoxNzA3Nzk3MTc2LCJleHAiOjE3MDg4MTkyMDAsInN1YiI6IjEwNjUzMzc0IiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxNTU4NTE4LCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiZTc2ZjEzOGMtYThjMi00Y2E3LWJlNTQtNjZlY2Q1NmM5MjNlIn0.QIgCZjF1p5_c_wZfMnz3c96JxgjMiAN5KJMkGWQoSuIfef710LeJ_OZhai9IGZ-pVLP0liwVUvtmS_wGydwBreOWotn7tuE-lOFBC4g0_-gj8cZUoJwWr38tAYVYanXPyhXMNe9LU9tqmzuuuWOhEKrPPZLF-mkTcNwhmnByWb615TVTzaSngYjq4rYp1ThFIBeY480DmuyVvINt68i36XXBYgFUgRwsJ_yEiryq4YDkJDdN3I57UpTdIlu7ssFW0k9gllmBQBB10FYkEBaf0MxWbTU24Dg_iQnekAPWIxDddHspdgNMS6nGsLzKJ5JwkJJoTdVZKxqfWYkNP0CaxA';

const headers = {
  'Content-Type': 'application/json',
  'Authorization':  `Bearer ${access_token}`
};

async function getData() {
  try {
    const response = await axios.get('https://plastoponica.amocrm.ru/api/v4/leads',{
      headers: {
          'Content-Type': 'application/json',
          'Authorization':  `Bearer ${access_token}`
  },
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

function setDeal (){
  axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then (response => console.log(response.data))
  .catch(error => console.log(error))
}

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
    <!-- <button  @click="getData"> nameButton </button>     -->
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