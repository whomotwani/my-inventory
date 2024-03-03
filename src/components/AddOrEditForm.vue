<template>
  <form @submit.prevent="saveProduct">
    <input
      v-model="name"
      type="text"
      placeholder="Product name"
      class="form-control"
      :class="{ 'mb-3': !hasError }"
    />
    <p v-if="hasError" class="small text-danger" :class="{ error: hasError }">
      Product mut have a name.
    </p>
    <input v-model="quantity" type="number" placeholder="Quantity" class="form-control mb-3" />
    <input v-model="unit" type="text" placeholder="Unit of measurement" class="form-control mb-3" />
    <input v-model="expiry" type="date" placeholder="Expiry date" class="form-control mb-3" />

    <select class="form-select mb-3">
      <option disabled selected>Select category</option>
      <option>Electronics</option>
      <option>Medicines</option>
    </select>

    <textarea v-model="comments" class="form-control mb-3" placeholder="Comments"></textarea>

    <input v-model="price" type="text" placeholder="Price" class="form-control mb-3" />

    <div class="d-flex gap-1">
      <span class="d-flex gap-1 ms-auto">
        <button class="btn btn-primary btn-outline mr-2">Close</button>
        <button class="btn btn-primary">{{ editMode ? 'Save changes' : 'Add product' }}</button>
      </span>
    </div>
  </form>
  <div class="position-fixed bottom-0 start-50 translate-middle-x p-3" style="z-index: 11">
    <div
      id="liveToast"
      class="toast"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      data-bs-autohide="true"
    >
      <div class="toast-header">
        <strong class="me-auto">Todoer</strong>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">
        {{ editMode ? 'Saved' : 'Added' }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      quantity: null,
      unit: null,
      expiry: null,
      comments: null,
      price: null,
      categories: [],
      category: null,
      hasError: false
    }
  },

  props: {
    editMode: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    resetFields() {
      ;(this.name = null),
        (this.quantity = null),
        (this.unit = null),
        (this.expiry = null),
        (this.comments = null),
        (this.price = null),
        (this.category = null)
    },
    saveProduct() {
      if (!this.name) {
        this.hasError = true
      } else {
        this.hasError = false

        const toastEl = document.getElementById('liveToast')
        const toast = new bootstrap.Toast(toastEl)
        toast.show()

        this.$store.dispatch('addProduct', {
          name: this.name,
          quantity: this.quantity,
          unit: this.unit,
          expiry: this.expiry,
          comments: this.comments,
          price: this.price,
          category: this.category
        })
        this.resetFields()
      }
    }
  }
}
</script>
