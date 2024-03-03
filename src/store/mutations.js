export default {
    SET_INVENTORY(state, payload) {
        state.inventory = payload || [];
    },

    DELETE_INVENTORY_ITEM(state, payload) {
        const itemIndex = state.inventory?.findIndex(item => item.id === payload);
        state.inventory?.splice(itemIndex, 1);
    },
    
    DELETE_SHOPPING_LIST_ITEM(state, payload) {
        const itemIndex = state.shoppingList?.findIndex(item => item.id === payload);
        state.shoppingList?.splice(itemIndex, 1);
    },

    MOVE_TO_INVENTORY(state, payload) {
        const itemIndex = state.shoppingList?.findIndex(item => item.id === payload);
        state.inventory?.push(state.shoppingList[itemIndex]);
        state.shoppingList?.splice(itemIndex, 1);
    },

    MOVE_TO_SHOPPING_LIST(state, payload) {
        const itemIndex = state.inventory?.findIndex(item => item.id === payload);
        state.shoppingList?.push(state.inventory[itemIndex]);
        state.inventory?.splice(itemIndex, 1);
    },
    
    SET_SHOPPING_LIST(state, payload) {
        state.shoppingList = payload || [];
    }
}