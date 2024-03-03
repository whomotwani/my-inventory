<template>
  <div
    class="toast"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
    :ref="myref"
    :id="myref"
    @__dismissToast="dismiss"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    myref: {
      required: true
    }
  },
  methods: {
    dismiss() {
      new bootstrap.Toast(this.$refs?.[this.myref])?.hide()
    }
  }
}
</script>
