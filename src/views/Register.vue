<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign up</h1>
          <p class="text-xs-center">
            <router-link :to="{name: 'login'}">Need an account?</router-link>
          </p>
          <McvValidationErrors v-if="validationErrors" :validationErrors="validationErrors"></McvValidationErrors>
          <form @submit.prevent="onSubmit">
            <fieldset class="form-group">
              <input
                type="text"
                class="form-control form-control-lg"
                placeholder="Username"
                v-model="username"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                type="email"
                class="form-control form-control-lg"
                placeholder="Email"
                v-model="email"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                type="text"
                class="form-control form-control-lg"
                placeholder="Password"
                v-model="password"
              />
            </fieldset>
            <button
              :disabled="isSubmitting"
              class="btn btn-primary pull-xs-right"
            >Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import McvValidationErrors from "@/components/McvValidationErrors";
import {actionTypes} from "@/store/modules/auth";

export default {
  name: 'McvRegister',
  data () {
    return {
      email: '',
      username: '',
      password: ''
    }
  },
  methods: {
    onSubmit () {
      this.$store.dispatch(actionTypes.register, {
        email: this.email,
        username: this.username,
        password: this.password
      }).then(user => {
        console.log('user success', user);
        this.$router.push({name: 'home'})
      }).catch(error => {
        console.log('We have an error', error);
      })
    }
  },
  computed: {
    isSubmitting () {
      return this.$store.state.auth.isSubmitting
    },
    validationErrors () {
      return this.$store.state.auth.validationErrors
    }
  },
  components: {
    McvValidationErrors
  }
}
</script>
<style lang="scss">
.form-group {
  margin-bottom: 0.3rem;
}
</style>
