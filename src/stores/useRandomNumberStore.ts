import {defineStore} from "pinia";
import { Socket } from "socket.io-client";
import {ClientToServerEvents, ServerToClientEvents} from "../main.ts";
import {Ref, ref} from "vue";
type State = {
  currentLaunch: null | number,
  interval: null | number,
  currentNumber: null | number,
  socket: null | Socket<ServerToClientEvents, ClientToServerEvents>,
  numbers: Ref<number[]>
}
export const useRandomNumberStore = defineStore('random', {
  state: (): State => {
    return {
      currentLaunch: null,
      interval: null,
      currentNumber: null,
      socket: null,
      numbers: ref([]),
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
    },
    setGenerator(launch: number, interval: number) {
      this.currentLaunch = launch;
      this.interval = interval;
    }
  },
})