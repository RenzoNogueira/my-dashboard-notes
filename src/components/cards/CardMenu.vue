<template>
  <div role="button" class="d-flex justify-content-between align-items-center">
    <h4 class="user-select-none">{{ title }}</h4>
    <button class="border-0 bg-transparent text-dark" @click="removeCard">
      <font-awesome-icon icon="fa-solid fa-times"/>
    </button>
  </div>
</template>

<script>

export default {
  name: "card-menu",
  props: {
    title: {
      type: String,
      default: "Header"
    },
    id: {
      type: Number,
      default: 0
    }
  },
  methods: {
    removeCard: function () {
      this.$emit( "remove-card", this.$props.id )
    },
  }
}
</script>

<style scoped></style>