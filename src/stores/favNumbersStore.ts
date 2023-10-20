import {defineStore} from "pinia";

export type State = {
  numbers: Set<number>;
};

export const useFavNumbersStore = defineStore('favNumbersStore', {
  state: (): State => {
    return {
      numbers: new Set(),
    }
  },
  actions: {
    addNumber(number: number){
      this.numbers.add(number);
      return this.numbers;
    },
    removeNumber(number: number){
      this.numbers = new Set(Array.from(this.numbers.values()).filter(num => num !== number));
      return this.numbers;
    }
  },
})