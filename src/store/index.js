import { createStore } from 'vuex';

import authStoreModule from './autharizationStore/index';
import storeMutations from './mutations';
import storeActions from './actions';
import storeGetters from './getters';

export const store = createStore({
  modules: {
    auth: authStoreModule,
  },
  state() {
    return {
      counter: 0,
    }
  },
  mutations: storeMutations,
  actions: storeActions,
  getters: storeGetters,
});
