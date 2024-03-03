import { createStore } from 'vuex';

import getters from './getters.js';
import actions from './actions.js';
import mutations from './mutations.js';

const store = createStore({
    state() {
        return {
            inventory: [],
            shoppingList: []
        }
    },
    getters,
    actions,
    mutations
})

export default store;