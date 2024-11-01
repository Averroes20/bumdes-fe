<template>
  <NavbarUser />
  <JumbotronLayout />
  <div class="container mx-auto px-36">
    <button type="" class="text-white bg-green-600 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2">Product Category</button>
    <!-- <CardCategory /> -->
    <div class="text-center mt-4">
      <p class="text-xl font-bold">All Products</p>
    </div>
    <SearchLayout />
    <CardItem />
    <FooterLayout />
  </div>
</template>

<script>

// import axios from 'axios'
import CardItem from '@/components/layouts/CardItem.vue';
import FooterLayout from '@/components/layouts/FooterLayout.vue';
import JumbotronLayout from '@/components/layouts/JumbotronLayout.vue';
import NavbarUser from '@/components/layouts/NavbarUser.vue';
import SearchLayout from '@/components/layouts/SearchLayout.vue';

export default {
  name: 'AllProduct',

//   data() {
//       return {
          //state loggedIn with localStorage
        //   loggedIn: localStorage.getItem('loggedIn'),
        //   //state token
        //   token: localStorage.getItem('token'),
        //   //state user logged In
        //   user: []
//       }
//   },

//   created() {
//       axios.get('http://localhost:8000/api/user', {headers: {'Authorization': 'Bearer '+this.token}})
//       .then(response => {
//           console.log(response)
//           this.user = response.data // assign response to state user
//       })
//   },

//   methods: {
//       logout() {
//           axios.get('http://localhost:8000/api/logout')
//           .then(() => {
//               //remove localStorage
//               localStorage.removeItem("loggedIn")    


//               //redirect
//               return this.$router.push({ name: 'login' })
//           })
//       }
//   },

  //check user logged in or not
//   mounted() {
//       if(!this.loggedIn) {
//           return this.$router.push({ name: 'login' })
//       }
//   },

  components: {
    // Daftarkan komponen Navbar
    JumbotronLayout,
    SearchLayout,
    CardItem,
    FooterLayout,
    NavbarUser
  }
}
</script>