import {defineStore} from "pinia";
import {Socket} from "socket.io";
type State = {
  generated: number,
  currentLaunch: null | number,
  interval: null | number,
  currentNumber: null | number,
  socket: null | Socket,
}
export const useRandomNumberStore = defineStore('random', {
  state: (): State => ({
    generated: 0,
    currentLaunch: null,
    interval: null,
    currentNumber: null,
    socket: null,
  }),
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
    }
  },
})