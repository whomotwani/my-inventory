<template>
  <nav class="navbar navbar-dark bg-dark navbar-expand-md fixed-top">
    <div class="container-fluid">
      <RouterLink to="/inventory" class="navbar-brand" href="#">Todoer</RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <RouterLink
              to="inventory"
              class="nav-link"
              :class="[isInventoryView && 'active']"
              aria-current="page"
              href="#"
              >Inventory</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink
              to="shoppinglist"
              class="nav-link"
              :class="[isShoppingListView && 'active']"
              href="#"
              >Shopping List</RouterLink
            >
          </li>
          <li class="nav-item">
            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Add Item
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    isInventoryView() {
      return this.$route.name === 'inventory'
    },

    isShoppingListView() {
      return this.$route.name === 'shoppinglist'
    }
  }
}
</script>
