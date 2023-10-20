import {defineStore} from "pinia";
import { Socket } from "socket.io-client";
import {ClientToServerEvents, ServerToClientEvents} from "../main.ts";
import {Ref, ref} from "vue";

type State = {
  currentLaunch: null | number,
  interval: null | number,
  currentNumber: null | number,
  socket: null | Socket<ServerToClientEvents, ClientToServerEvents>,
  numbers: Ref<History[]>,
  timeToNextNumber: Ref<number>,
}

type History = Pick<State, 'currentLaunch'> & {
  number: number,
  date: Date
};
export const useRandomNumberStore = defineStore('random', {
  state: (): State => {
    return {
      currentLaunch: null,
      interval: null,
      currentNumber: null,
      socket: null,
      numbers: ref([]),
      timeToNextNumber: ref(0)
    }
  },
  actions: {
    start(socket: Socket) {
      this.socket = socket;
      socket.emit('connection');
      socket.on('random', (randomNumber: number) => {
        this.numbers.push({
          currentLaunch: this.currentLaunch,
          date: new Date(),
          number: randomNumber
        });
      });
    },
    setGenerator(launch: number, interval: number) {
      this.currentLaunch = launch;
      this.interval = interval;
      setInterval(() => {
        const next = this.timeToNextNumber - 1;
        this.timeToNextNumber = next > 0 ? next : interval;
      },1000);
    }
  },
})