import {defineStore} from "pinia";

export type State = {
  numbers: number[];
};

export const useRandomNumberStore = defineStore('favNumbersStore', {
  state: (): State => {
    return {
      numbers: [],
    }
  },
  actions: {
    addNumber(number: number){
      this.numbers.push(number);
      return this.numbers;
    },
    removeNumber(number: number){
      this.numbers = this.numbers.filter(num => num !== number);
      return this.numbers;
    }
  },
})