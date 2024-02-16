import { defineStore } from "pinia";
import { ref } from "vue";

//try Composition api Pinia

export const modalStore = defineStore("modal", () => {

    const showModal = ref(false);
    const inputValue = ref('');
    const entity = ref('');
    const selectedItem = ref('');
    const items = ref([
        { id: 1, name: 'Не выбрано' },
        { id: 2, name: 'Сделка' },
        { id: 3, name: 'Контакт' },
        { id: 4, name: 'Компания' }
      ]);

    const openModal = () => {
        showModal.value = true;
      }  
    const closeModal = () => {
      showModal.value = false;
      selectedItem.value='Не выбрано';
      }  
    const sendMessage = () => {
        console.log(selectedItem.value + ':' + inputValue.value);
        showModal.value = false;
        selectedItem.value='Не выбрано';
    }  

    const getEntity = (data) => {      
       entity.value = data;    
        if (entity.value != 'Не выбрано') openModal()
      }
     
  
    return {
        items,
        selectedItem,
        showModal,
        inputValue,
        openModal,
        closeModal,
        sendMessage,
        getEntity,
        sendMessage,
    }
});