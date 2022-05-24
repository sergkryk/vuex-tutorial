import { createStore } from 'vuex';

import authStoreModule from './autharizationStore/index';
import rootMutations from './mutations';
import rootActions from './actions';
import rootGetters from './getters';

export const store = createStore({
  modules: {
    auth: authStoreModule,
  },
  state() {
    return {
      counter: 0,
    }
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
});
