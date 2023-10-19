import {defineStore} from "pinia";
import { Socket } from "socket.io-client";
import {ClientToServerEvents, ServerToClientEvents} from "../main.ts";
type State = {
  generatedCount: number,
  currentLaunch: null | number,
  interval: null | number,
  currentNumber: null | number,
  socket: null | Socket<ServerToClientEvents, ClientToServerEvents>,
  numbers: number[]
}
export const useRandomNumberStore = defineStore('random', {
  state: (): State => {
    return {
      generatedCount: 0,
      currentLaunch: null,
      interval: null,
      currentNumber: null,
      socket: null,
      numbers: [],
    }
  },
  getters: {
    generated: (state) => {
      if(!state.socket) return;
      state.socket.on('random', (randomNumber: number) => {
        return randomNumber;
      });
    },
  },
  actions: {
    start(socket: Socket) {
      this.socket = socket;
      socket.emit('connection');
      socket.on('random', (randomNumber: number) => {
        console.log(randomNumber)
        this.numbers.push(randomNumber);
      });
    }
  },
})