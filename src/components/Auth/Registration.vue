<template>
<div class="content-wrapper">
    <section>
        <div class="container">
            <h1 class="ui-title-1">Login</h1>
            <div class="auth">
                <div class="auth__banner">
                    <h1 class="ui-title-2">Hello banner</h1>
                </div>
                <div class="auth__form"><span class="ui-title-2">Login</span>
                    <form @submit.prevent="onSubmit">
                        <div class="form-item" :class="{ errorInput: $v.email.$error }"><input type="email" placeholder="Email" v-model="email" :class="{ error: $v.email.$error }" @change="$v.email.$touch()" />
                            <div class="error" v-if="!$v.email.required">Field is required</div>
                            <div class="error" v-if="!$v.email.email">Email is not correct</div>
                        </div>
                        <div class="form-item" :class="{ errorInput: $v.password.$error }"><input type="password" placeholder="Password" v-model="password" :class="{ error: $v.password.$error }" @change="$v.password.$touch()" />
                            <div class="error" v-if="!$v.password.required">Password is required.</div>
                            <div class="error" v-if="!$v.password.minLength">Password must have at least {{ $v.password.$params.minLength.min }} letters.</div>
                        </div>
                        <div class="buttons-list"><button class="button button-primary" type="submit" :disabled="submitStatus === 'PENDING'">Login</button></div>
                        <div class="buttons-list buttons-list--info">
                            <p class="typo__p" v-if="submitStatus === 'OK'">Thanks for your submission!</p>
                            <p class="typo__p" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
                            <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
                        </div>
                        <div class="buttons-list buttons-list--info"><span>Need Registration?<router-link to="/registration"> Enter Here</router-link></span></div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      email: '',
      password: '',
      repeatPassword: '',
      submitStatus: null
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    }
  },
  methods: {
    onSubmit () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        console.log('Login!')
        const user = {
          email: this.email,
          password: this.password
        }
        console.log(user)
        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
        }, 500)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>