import {defineStore} from "pinia";
import { Socket } from "socket.io-client";
import {ClientToServerEvents, ServerToClientEvents} from "../main.ts";
import {Ref, ref, UnwrapRef} from "vue";

export type State = {
  currentLaunch: null | number,
  interval: null | number,
  currentNumber: null | number,
  socket: null | Socket<ServerToClientEvents, ClientToServerEvents>,
  numbers: Ref<History[]>,
  timeToNextNumber: Ref<number>,
  minMax: Ref<[number, number]>,
  _intervalId: null | number,
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
      timeToNextNumber: ref(0),
      minMax: ref<[number,number]>([20, 80]),
      _intervalId: null,
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
    stop(id: State['currentLaunch']){
      console.log(id)
      if(!this.interval || this.currentLaunch !== id){
        return;
      }
      clearInterval(this._intervalId as number);
      this._intervalId = null;
    },
    setGenerator(launch: State["currentLaunch"], interval: number, minMax: UnwrapRef<State["minMax"]>) {
      this.currentLaunch = launch;
      this.interval = interval;
      this.minMax = minMax;
      const id: number = window.setInterval(() => {
        const next = this.timeToNextNumber - 1;
        this.timeToNextNumber = next > 0 ? next : interval;
      },1000);
      this._intervalId = id;
    }
  },
})