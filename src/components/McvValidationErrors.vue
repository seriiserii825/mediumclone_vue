<template>
  <ul class="error-messages">
    <li v-for="errorMessage in errorMessages" :key="errorMessage">
      <span>{{ errorMessage }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "McvValidationErrors",
  props: {
    validationErrors: {
      type: Object,
      required: true
    }
  },
  computed: {
    errorMessages () {
      return Object.keys(this.validationErrors).map(name => {
        const message = this.validationErrors[name].join(', ')
        return `${name}: ${message}`
      });
    }
  }
}
</script>

<style lang="scss">
.error-messages {
  li {
    font-size: 1.2rem;
    list-style-type: none;
    text-align: center;
    color: darkred;
  }
}
</style>
