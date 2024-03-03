import products from '../assets/dummy/products.json'

export default {
  loadInventory(context) {
    setTimeout(() => {
      context.commit('SET_INVENTORY', products)
    }, 1000)
  },

  loadShoppingList(context) {
    setTimeout(() => {
      context.commit('SET_SHOPPING_LIST')
    }, 1000)
  },

  deleteInventoryItem(context, id) {
    context.commit('DELETE_INVENTORY_ITEM', id)
  },

  deleteShoppingListItem(context, id) {
    context.commit('DELETE_SHOPPING_LIST_ITEM', id)
  },

  moveToShoppingList(context, id) {
    context.commit('MOVE_TO_SHOPPING_LIST', id)
  },

  moveToInventory(context, id) {
    context.commit('MOVE_TO_INVENTORY', id)
  },

  addProduct(context, payload) {
    context.commit('ADD_PRODUCT', payload)
  }
}
