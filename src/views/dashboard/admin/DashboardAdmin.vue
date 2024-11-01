<template>
  <SideNav />
  
  <div class="p-4 sm:ml-60 bg-white">
    <div class="p-4 mt-10">
        <form class="w-full mx-auto mb-2 rounded-full">   
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                <!-- <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> -->
            </div>
        </form>
        <!-- bagian atas -->
        <div class="flex">
          <div class="flex-initial w-1/2 pr-4">
            <ItemTerjual />
            <NominalPenjualan />
          </div>
          
          <div class="flex-initial w-full">
            <SalesReport />
          </div>

        </div>

        <!--bagian tengah-->
        <div class="flex items-center justify-center h-auto mb-4 rounded bg-gray-50 dark:bg-gray-800">
          <div class="grid grid-rows w-full">
            <div class="flex justify-between w-full">
              <p class="text-base font-normal text-gray-400 dark:text-gray-300 pb-1 text-xl">List Of Orders</p>
              <div class="flex items-center text-base font-normal text-gray-400 dark:text-gray-300 pb-1 text-lg">
                <span>View Details</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 ml-1">
                  <path fill-rule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>
            <TableLayout />
          </div>
        </div>
    </div>
  </div>
</template>
<script>
import ItemTerjual from '@/components/dashboard/ItemTerjual.vue';
import NominalPenjualan from '@/components/dashboard/NominalPenjualan.vue';
import SalesReport from '@/components/dashboard/SalesReport.vue';
import TableLayout from '@/components/dashboard/TableLayout.vue';
import SideNav from '@/components/layouts/SideNav.vue';

export default {
  name: 'DashboardAdmin',

  components: {
    SideNav,
    TableLayout,
    ItemTerjual,
    NominalPenjualan,
    SalesReport
  },
};
</script>
