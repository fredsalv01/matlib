import { defineStore, acceptHMRUpdate } from "pinia";
import { generateId, sleep } from "../utils";
import dataFormulas from '../utils/data.json';

export const useFormulaStore = defineStore( "formula", {
  state: () => ({
    topics: dataFormulas,
    loading: false,
  }),
  getters: {},
  actions: {
    async addTopic({values}) {
        this.loading = true;
        this.topics.push(
            {
                id: generateId,
                ...values 
            }
        )
        await sleep(3000);
        this.loading = false;
    },
    async deleteTopic(id) {
        this.loading = true;
        this.topics = this.topics.filter((topic) => topic.id !== id)
        await sleep(3000)
        this.loading = false;
    },
    async updateTopic(id, values) {
        this.loading = true;
        const topic = this.topics.find((topic) => topic.id === id)
        
        if(topic) {
            topic = {id, ...values}
        }
        
        await sleep(3000)
        this.loading = false;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useFormulaStore, import.meta.hot));
}
