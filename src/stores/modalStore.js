import { defineStore } from "pinia";
import { ref } from "vue";

//try Composition api Pinia

export const modalStore = defineStore("modal", () => {

    const showModal = ref(false);
    const inputValue = ref('');

    const openModal = () => {
        showModal.value = true;
      }  
    const closeModal = () => {
      showModal.value = false;
      }  
    const sendMessage = () => {
        console.log(inputValue.value);
        showModal.value = false;
    }  
  
    return {
        showModal,
        inputValue,
        openModal,
        closeModal,
        sendMessage,
    }
});