import {defineStore} from "pinia";

export const useRandomNumberStore = defineStore('random', {
  state: () => ({
    generated: 0,
    currentLaunch: null,
    interval: null,
    currentNumber: null,
  }),
  getters: {
    doubleCount: (state) => state.generated * 2,
  },
  actions: {
    increment() {
      this.generated++
    },
  },
})