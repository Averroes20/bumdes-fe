<template>
  <!-- <div class="dashboard" style="margin-top:80px">
      <div class="container">
          <div class="row">
              <div class="col-md-4">
                  <div class="card">
                      <div class="card-body">
                          MAIN MENU
                          <hr>
                          <ul class="list-group">
                              <router-link :to="{name: 'dashboard'}" class="list-group-item text-dark text-decoration-none">DASHBOARD</router-link>
                              <li @click="logout" class="list-group-item text-dark text-decoration-none" style="cursor:pointer">LOGOUT</li>
                          </ul>
                      </div>
                  </div>
              </div>
              <div class="col-md-8">
                  <div class="card">
                      <div class="card-body">
                          DASHBOARD
                          <hr>
                          Selamat Datang <strong>{{ user.name }}</strong>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div> -->
  <JumbotronLayout />
  <div class="container mx-auto px-36">
    <button type="" class="text-white bg-green-600 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2">Product Category</button>
    <CardCategory />
    <div class="text-center mt-4">
      <p class="text-xl font-bold">All Products</p>
    </div>
    <SearchLayout />
    <CardItem />
    <FooterLayout />
  </div>
</template>

<script>

import axios from 'axios'
import CardCategory from '@/components/layouts/CardCategory.vue';
import CardItem from '@/components/layouts/CardItem.vue';
import FooterLayout from '@/components/layouts/FooterLayout.vue';
import JumbotronLayout from '@/components/layouts/JumbotronLayout.vue';
import SearchLayout from '@/components/layouts/SearchLayout.vue';

export default {
  name: 'AdminDashboard',

  data() {
      return {
          //state loggedIn with localStorage
          loggedIn: localStorage.getItem('loggedIn'),
          //state token
          token: localStorage.getItem('token'),
          //state user logged In
          user: []
      }
  },

  created() {
      axios.get('http://localhost:8000/api/user', {headers: {'Authorization': 'Bearer '+this.token}})
      .then(response => {
          console.log(response)
          this.user = response.data // assign response to state user
      })
  },

  methods: {
      logout() {
          axios.get('http://localhost:8000/api/logout')
          .then(() => {
              //remove localStorage
              localStorage.removeItem("loggedIn")    


              //redirect
              return this.$router.push({ name: 'login' })
          })
      }
  },

  //check user logged in or not
  mounted() {
      if(!this.loggedIn) {
          return this.$router.push({ name: 'login' })
      }
  },

  components: {
    // Daftarkan komponen Navbar
    JumbotronLayout,
    CardCategory,
    SearchLayout,
    CardItem,
    FooterLayout
  }
}
</script>