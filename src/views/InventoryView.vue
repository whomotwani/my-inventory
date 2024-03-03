<template>
    <div class="container inventory-view mt-3 pb-3">

        <ul v-if="inventory.length > 0" class="inventory-view__list list-group">
            <li v-for="p in inventory" :key="p.id"
                class="inventory-view__list-item list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <p class="fw-bold m-0">{{ p.name }}</p>
                    <!-- <span class="badge rounded-pill bg-info text-dark">{{p.expiry_date}}</span> -->
                </div>
                <button type="button" class="btn" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bi bi-three-dots-vertical"></i>
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                    <li><button class="dropdown-item" type="button">Edit</button></li>
                    <li>
                        <button class="dropdown-item" type="button" @click="moveItem(p.id, p.name)">
                            Move to shopping list
                        </button>
                    </li>
                    <li>
                        <hr class="dropdown-divider">
                    </li>
                    <li><button class="dropdown-item" type="button" @click="deleteItem(p.id, p.name)">Delete</button>
                    </li>
                </ul>
            </li>
        </ul>
        <div v-else class="text-center">You don't have items in your Inventory.</div>
    </div>

    <div class="position-fixed bottom-0 start-50 translate-middle-x p-3" style="z-index: 11">
        <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="true">
            <div class="toast-header">
                <strong class="me-auto">Todoer</strong>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
                {{ toastMessage }}
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    data() {
        return {
            toastMessage: null
        }
    },
    computed: {
        ...mapGetters(['inventory'])
    },

    methods: {
        deleteItem(id, name) {
            this.toastMessage = "Deleted, " + name;
            const toastEl = document.getElementById('liveToast');
            const toast = new bootstrap.Toast(toastEl);
            toast.show();
            this.$store.dispatch('deleteInventoryItem', id);
        },
        moveItem(id, name) {
            this.toastMessage = name + " was moved to Shopping list";
            const toastEl = document.getElementById('liveToast');
            const toast = new bootstrap.Toast(toastEl);
            toast.show();
            this.$store.dispatch('moveToShoppingList', id);
        }
    },

    mounted() {
        this.$store.dispatch('loadInventory');
    }
}
</script>

<style scoped lang="scss">
.inventory-view {}
</style>