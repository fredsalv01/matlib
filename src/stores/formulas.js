import {defineStore, acceptHMRUpdate} from 'pinia';

export const useFormulasStore = defineStore({
    id: 'formula',
    state: () => ({
        topics: [],
        loading: false,
    }),
    getters: {},
    actions: {
        async addTopic(name){},
        async deleteTopic(id){},
        async updateTopic(id){},
    }
});

if(import.meta.hot){
    import.meta.hot.accept(acceptHMRUpdate(useFormulasStore, import.meta.hot));
}