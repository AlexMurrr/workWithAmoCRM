
import { defineStore } from "pinia";

export const amoStore = defineStore("amo", {
  state: () => {
    return {
      entity:'',
      nameEntity: '',      
    };
  },

  getters: {},

  actions: {
    getEntity(data){
      
      if (data != 'Не выбрано') this.entity=data;
      else this.entity='';

      console.log(this.entity);
    }
  },
});



    // getDeal(){
    //   const response = await axios.get('https://plastoponica.amocrm.ru/api/v4/companies', 
    //   {
    //     headers: headers,
    //   });
    //   this.everythingDeal = response.data;
    //   console.log(this.everythingDeal);
    // }
 

//добавляем сделку
// https://plastoponica.amocrm.ru/api/v4/leads
// Content-Type:application/json
// body [ {     
// }]

//добавляем контакт
//https://plastoponica.amocrm.ru/api/v4/contacts
// Content-Type:application/json
// body [ {     
// }]

//добавляем компанию
//https://plastoponica.amocrm.ru/api/v4/companies
// Content-Type:application/json
// body [ {     
// }]