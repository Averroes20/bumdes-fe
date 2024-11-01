<template>
  <NavbarUser/>
  <div class="mx-auto mt-24 mb-32 w-full max-w-md text-center">
    <!-- Header -->
    <h1 class="text-2xl font-bold mb-4">LOGIN</h1>
    <a href="/" class="primary-color mb-6 block">Kembali Belanja</a>
    
    <!-- Form Login -->
    <form class="space-y-6">
      <!-- Input Email -->
      <div>
        <label for="email" class="block text-left font-medium text-gray-700">Email</label>
        <input type="email" id="email" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500" placeholder="Email">
      </div>

      <!-- Input Password -->
      <div>
        <label for="password" class="block text-left font-medium text-gray-700">Katasandi</label>
        <input type="password" id="password" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500" placeholder="Katasandi">
      </div>

      <!-- Ingat Saya dan Lupa Password -->
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <input id="remember" type="checkbox" class="h-4 w-4 primary-color border-gray-300 rounded focus:ring-green-500">
          <label for="remember" class="ml-2 block text-sm text-gray-900">Ingat Saya</label>
        </div>
        <a href="#" class="text-sm primary-color hover:underline">Lupa Password</a>
      </div>

      <!-- Tombol Login -->
      <div>
        <button type="submit" class="w-full bg-primary-color text-white py-2 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">LOGIN</button>
      </div>
    </form>
  </div>
  <FooterLayout/>
</template>

<script>
import FooterLayout from '@/components/layouts/FooterLayout.vue';
import NavbarUser from '@/components/layouts/NavbarUser.vue';

  import axios from 'axios'

  export default {
      name: 'UserLogin',

      components:{
        NavbarUser,
        FooterLayout,
      },

      data() {
          return {
              //state loggedIn with localStorage
              loggedIn: localStorage.getItem('loggedIn'),
              //state token
              token: localStorage.getItem('token'),
              //state user
              user: [],
              //state validation
              validation: [],
              //state login failed
              loginFailed: null
          }
      },
      methods: {

          login() {
              if (this.user.email && this.user.password) {
                  axios.get('http://localhost:8000/sanctum/csrf-cookie')
                      .then(response => {

                          //debug cookie
                          console.log(response)

                          axios.post('http://localhost:8000/api/login', {
                              email: this.user.email,
                              password: this.user.password
                          }).then(res => {

                              //debug user login
                              console.log(res)

                              if (res.data.success) {

                                  //set localStorage
                                  localStorage.setItem("loggedIn", "true")

                                  //set localStorage Token
                                  localStorage.setItem("token", res.data.token)

                                  //change state
                                  this.loggedIn = true

                                  //redirect dashboard
                                  return this.$router.push({ name: 'dashboard' })

                              } else {

                                  //set state login failed
                                  this.loginFailed = true

                              }

                          }).catch(error => {
                              console.log(error)
                          })

                      })
              }

              this.validation = []

              if (!this.user.email) {
                  this.validation.email = true
              }

              if (!this.user.password) {
                  this.validation.password = true
              }

          }
      },

      //check user already logged in
      mounted() {
          if (this.loggedIn) {
              return this.$router.push({ name: 'dashboard' })
          }
      }
  }
</script>