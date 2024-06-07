import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    username: '',
    estaLogeado: false,
  }),
  actions: {
    login(username) {
        this.username = username;
        this.estaLogeado = true;
    },
    logout() {
        this.username = '';
        this.estaLogeado = false;
    },
  }
});