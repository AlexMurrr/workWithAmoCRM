
import { defineStore } from "pinia";

//try Option api Pinia

export const useAmoStore = defineStore("amo", {
  state: () => {
    return {
      deals:['deal1', 'deal2'],
      company: ['company1', 'company2'],
      contacts: ['contact1', 'contact2'],      
    };
  },

  getters: {},

  actions: {
   listEntity(entity){
    switch(entity) {
      case 'Сделка':
      return this.deals;
      case 'Контакт':
      return this.contacts;
      case 'Компания':
      return this.company;
      case 'Не выбрано':
      return ['Выберите сущьность выше и появится их список'];
      default:
      return [];
   }
  },
    addEntity(selectItem, addItem){
      if (selectItem==='Сделка') this.deals.push(addItem);
      else if (selectItem==='Контакт') this.contacts.push(addItem)
      else if (selectItem==='Компания') this.company.push(addItem)
    }
 }
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