<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign up</h1>
          <p class="text-xs-center">
            <router-link :to="{name: 'login'}">Need an account?</router-link>
          </p>
          Validations error
          <form @submit.prevent="onSubmit">
            <fieldset class="form-group">
              <input
                type="text"
                class="form-control form-control-lg"
                placeholder="Username"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                type="email"
                class="form-control form-control-lg"
                placeholder="Email"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                type="text"
                class="form-control form-control-lg"
                placeholder="Password"
              />
            </fieldset>
            <p>{{ counter }}</p>
            <button class="btn btn-primary pull-xs-right">Sign up</button>
          </form>
          <button @click="increaseCounter">Increase counter</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'McvRegister',
  methods: {
    onSubmit() {},
    increaseCounter() {
      this.$store.commit('increment')
    },
  },
  computed: {
    counter() {
      return this.$store.getters.counter
    },
  },
}
</script>
<style lang="scss">
.form-group {
  margin-bottom: 0.3rem;
}
</style>