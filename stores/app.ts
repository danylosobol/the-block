import type { IAppMessage } from "~/types/interfaces";
import { defineStore } from "pinia";

interface IAppStoreState {
  messages: IAppMessage[];
}

export const useAppStore = defineStore("app", {
  state: (): IAppStoreState => ({
    messages: [],
  }),

  actions: {
    addMessage(message: IAppMessage): void {
      if (!message || !message.text) {
        return;
      }
      this.messages.push(message);
    },

    getMessages(): IAppMessage[] {
      const ret: IAppMessage[] = [...this.messages];
      this.messages = [];
      return ret;
    },
  },
});
