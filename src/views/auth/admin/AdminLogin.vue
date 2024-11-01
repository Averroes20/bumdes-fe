<template>
  <!-- <div class="login">
      <div class="container" style="margin-top:100px">
          <div class="row justify-content-center">
              <div class="col-md-5">
                  <div v-if="loginFailed" class="alert alert-danger">
                      Email atau Password Anda salah.
                  </div>
                  <div class="card">
                      <div class="card-body">
                          LOGIN
                          <hr>
                          <form @submit.prevent="login">

                              <div class="form-group">
                                  <label>EMAIL</label>
                                  <input type="email" class="form-control" v-model="user.email"
                                      placeholder="Masukkan Email">
                                  <div v-if="validation.email" class="mt-2 alert alert-danger">
                                      Masukkan Email
                                  </div>
                              </div>

                              <div class="form-group">
                                  <label>PASSWORD</label>
                                  <input type="password" class="form-control" v-model="user.password"
                                      placeholder="Masukkan Password">
                                  <div v-if="validation.password" class="mt-2 alert alert-danger">
                                      Masukkan Password
                                  </div>
                              </div>

                              <button type="submit" class="btn btn-primary">LOGIN</button>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div> -->

  <div v-if="loginFailed" class="alert alert-danger">
      Email atau Password Anda salah.
  </div>

  <form @submit.prevent="login" class="max-w-xl mx-auto mt-48">
    <div class="mb-5">
      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
      <input type="email" v-model="user.email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan email" required />
      <div v-if="validation.email" class="mt-2 alert alert-danger">
        Masukkan Email
      </div>
    </div>
    <div class="mb-5">
      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
      <input type="password" v-model="user.password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
      <div v-if="validation.password" class="mt-2 alert alert-danger">
          Masukkan Password
      </div>
    </div>
    <div class="flex items-start mb-5">
      <div class="flex items-center h-5">
        <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
      </div>
      <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
    </div>
    <button type="submit" class="text-white bg-primary-color hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
  </form>
</template>

<script>
  import axios from 'axios'

	export default {
  data() {
    return {
      user: {
        email: '',
        password: ''
      },
      validation: {}, // Menyimpan error validasi
      loginFailed: false
    };
  },
  methods: {
    login() {
      // Periksa input
      this.validation = {};
      if (!this.user.email) this.validation.email = 'Masukkan email';
      if (!this.user.password) this.validation.password = 'Masukkan password';

      // Hanya lanjut jika input valid
      if (this.user.email && this.user.password) {
        axios.get('http://localhost:8000/sanctum/csrf-cookie').then(() => {
          axios.post('http://localhost:8000/api/login', {
            email: this.user.email,
            password: this.user.password
          }).then(res => {
            if (res.data.success) {
              localStorage.setItem('loggedIn', 'true');
              localStorage.setItem('token', res.data.token);
              this.$router.push({ name: 'AdminDashboard' });
            } else {
              this.loginFailed = true;
            }
          }).catch(() => {
            this.loginFailed = true;
          });
        });
      }
    }
  },
  mounted() {
    // Cek jika pengguna sudah login
    if (localStorage.getItem('loggedIn') === 'true') {
      this.$router.push({ name: 'AdminDashboard' });
    }
  }
};

</script>