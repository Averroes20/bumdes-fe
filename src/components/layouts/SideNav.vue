<template>
  <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
    <div class="px-3 py-3 lg:px-5 lg:pl-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-start rtl:justify-end">
          <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
              <span class="sr-only">Open sidebar</span>
              <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
              </svg>
          </button>
          <a href="" class="flex ms-2 md:me-24">
            <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white primary-color">BUMDes MART</span>
          </a>
        </div>
        <div class="flex items-center">
          <button type="button" class="relative inline-flex items-center text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white dark:text-gray-400">
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 20">
              <path d="M12.133 10.632v-1.8A5.406 5.406 0 0 0 7.979 3.57.946.946 0 0 0 8 3.464V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C1.867 13.018 0 13.614 0 14.807 0 15.4 0 16 .538 16h12.924C14 16 14 15.4 14 14.807c0-1.193-1.867-1.789-1.867-4.175ZM3.823 17a3.453 3.453 0 0 0 6.354 0H3.823Z"/>
            </svg>
            <span class="sr-only">Notifications</span>
            <div class="absolute block w-3 h-3 bg-red-500 border-2 border-white rounded-full -top-0.5 start-2.5 dark:border-gray-900"></div>
          </button>
            <div class="flex items-center ms-3">
              <div>
                <button type="button" class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                  <span class="sr-only">Open user menu</span>
                  <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo">
                </button>
              </div>
              <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
                <div class="px-4 py-3" role="none">
                  <p class="text-sm text-gray-900 dark:text-white" role="none">
                    Neil Sims
                  </p>
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                    neil.sims@flowbite.com
                  </p>
                </div>
                <ul class="py-1" role="none">
                  <li>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Earnings</a>
                  </li>
                  <li @click="logout" style="cursor:pointer">
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
      </div>
    </div>
  </nav>

  <aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
    <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul class="space-y-2 font-medium">
          <li>
              <a href="/dashboard" class="sidebar-link flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group primary-color">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                  <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                  <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                </svg>
                <span class="ms-3">Dashboard</span>
              </a>
          </li>
          <li>
              <a href="/inventory" class="sidebar-link flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.0101 15.5633L22.0109 15.5659L22.0108 15.5659C22.1775 16.1908 21.8185 16.8695 21.1849 16.992L15.2478 18.5567C15.3215 19.7232 14.569 20.8123 13.4004 21.1164C12.2322 21.4433 11.0181 20.8702 10.5099 19.8297L9.53045 20.0967L9.5294 20.097C9.32189 20.1488 9.10621 20.0453 9.05186 19.8293C9.05182 19.8292 9.05178 19.829 9.05174 19.8288L5.05577 5.11524L3.15673 5.59009L3.1446 5.54158L3.15673 5.59009C2.66755 5.71239 2.13076 5.41952 1.98422 4.90644M22.0101 15.5633L2.03229 4.89271M22.0101 15.5633L22.0101 15.5631L21.57 13.9419C21.57 13.9417 21.5699 13.9415 21.5699 13.9414C21.5155 13.7254 21.2998 13.6219 21.0923 13.6737L21.0918 13.6739L19.448 14.1017L17.6072 7.26778C17.6071 7.26763 17.6071 7.26749 17.6071 7.26735C17.5527 7.0513 17.337 6.9478 17.1295 6.99959L17.1287 6.9998L13.5385 7.96023L12.5553 4.32465C12.5553 4.32449 12.5552 4.32434 12.5552 4.32418C12.5009 4.10816 12.2852 4.00468 12.0776 4.05646L12.0771 4.05662L7.44402 5.27222M22.0101 15.5633L7.44402 5.27222M1.98422 4.90644L2.03229 4.89271M1.98422 4.90644C1.98422 4.90644 1.98422 4.90644 1.98422 4.90644L2.03229 4.89271M1.98422 4.90644C1.83689 4.39073 2.1568 3.87816 2.66743 3.73232L2.6691 3.73184L2.66911 3.73187L6.39933 2.80519M2.03229 4.89271C1.89329 4.40613 2.19443 3.91941 2.68117 3.7804L6.41218 2.85352M6.39933 2.80519C6.39904 2.80527 6.39876 2.80535 6.39847 2.80543L6.41218 2.85352M6.39933 2.80519L6.40013 2.80499L6.41218 2.85352M6.39933 2.80519C6.58706 2.75217 6.80087 2.85931 6.85452 3.07278L6.85441 3.07238L6.80612 3.08532M6.41218 2.85352C6.57431 2.80729 6.75973 2.89991 6.80612 3.08532M6.80612 3.08532L6.85462 3.07319M6.80612 3.08532L7.4086 5.3332L6.85462 3.07319M6.85462 3.07319L7.44402 5.27222M6.85462 3.07319L7.44402 5.27222M5.69542 4.57859L5.69549 4.57856L5.6946 4.57588C5.64275 4.42052 5.48727 4.28679 5.32274 4.28679H5.25323V4.28531L5.24134 4.28822L2.97033 4.84444L2.97032 4.8444L2.96849 4.84493C2.90029 4.8644 2.84743 4.85274 2.80872 4.8273C2.76886 4.8011 2.73974 4.75737 2.72642 4.7065C2.69961 4.60413 2.73895 4.49136 2.85673 4.45442L6.21439 3.60934L9.86277 17.0483C9.86281 17.0484 9.86285 17.0486 9.8629 17.0488C9.91723 17.2648 10.1329 17.3683 10.3404 17.3165L10.3409 17.3163L10.8071 17.1954C10.3552 17.7407 10.1772 18.4623 10.272 19.1303L9.69189 19.2704L5.69542 4.57859ZM11.0947 19.2924L11.0947 19.2923C10.8018 18.3461 11.3422 17.3784 12.2878 17.1307L12.2883 17.1306C13.2797 16.8603 14.2478 17.5141 14.4276 18.4131L14.4276 18.4131L14.4278 18.4141C14.63 19.3353 14.0466 20.1691 13.1885 20.4177C12.287 20.6655 11.3645 20.1695 11.0947 19.2924ZM20.9754 16.2926L15.0636 17.8567C14.8148 17.2186 14.2793 16.7014 13.6323 16.4618C14.256 16.2964 14.9237 16.1196 15.6118 15.9373C17.3835 15.4681 19.2904 14.9631 20.93 14.5248L21.2646 15.7743L21.2647 15.7745C21.3272 16.0037 21.2029 16.23 20.9764 16.2923C20.9761 16.2924 20.9759 16.2925 20.9757 16.2925L20.9754 16.2926ZM18.7254 14.3125L10.5026 16.4884L8.74443 10.0267L16.9672 7.85076L18.7254 14.3125ZM7.6553 6.01758L11.9152 4.88458L12.793 8.14821L8.53295 9.2812L7.6553 6.01758Z" fill="#5D6679" stroke="#5D6679" stroke-width="0.1"/>
                </svg>

                <span class="flex-1 ms-3 whitespace-nowrap">Inventory</span>
              </a>
          </li>
          <li>
              <a href="/suppliers" class="sidebar-link flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                    <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
                </svg>
                <span class="flex-1 ms-3 whitespace-nowrap">Suppliers</span>
              </a>
          </li>
        </ul>
    </div>
  </aside>
</template>

<script>
  import axios from 'axios'
  export default{
    name: 'SideNav',

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

    methods: {
        logout() {
            axios.get('http://localhost:8000/api/logout')
            .then(() => {
                //remove localStorage
                localStorage.removeItem("loggedIn")    


                //redirect
                return this.$router.push({ name: 'AdminLogin' })
            })
        }
    },

    components: {

    }
  }
</script>