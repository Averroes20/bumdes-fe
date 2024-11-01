<template>
  <SideNav />
  <div class="p-4 sm:ml-60 bg-white">
   <div class="p-4 mt-10">
    <div class="p-6 bg-gray-50 rounded-lg shadow-md">
      <h2 class="text-lg font-semibold text-gray-700 dark:text-gray-300">Overall Inventory</h2>
      <div class="mt-4 grid grid-cols-4 gap-6 text-left">
        <!-- Kategori -->
        <div>
          <p class="text-blue-500 font-medium">Kategori</p>
          <p class="text-2xl font-semibold text-gray-700 dark:text-gray-200">14</p>
        </div>
        <!-- Total Produk -->
        <div class="grid grid-rows-4 grid-flow-col">
          <p class="text-yellow-600 font-medium">Total Produk</p>
          <p class="text-xl font-semibold text-gray-700 dark:text-gray-200">100</p>
          <p></p>
          <p></p>
          <p></p>
          <!-- <div class="grid grid-rows-subgrid row-span-3"> -->
            <p class="text-xl font-semibold text-gray-700 dark:text-gray-200 text-right">Rp 3,500,000</p>
            <p class="text-sm text-gray-400 text-right">Pendapatan</p>
          <!-- </div> -->
        </div>
        <!-- Persediaan Habis (Dipesan) -->
        <div class="grid grid-rows-4 grid-flow-col">
          <p class="text-red-600 font-medium">Persediaan Habis</p>
          <p class="text-xl font-semibold text-gray-700 dark:text-gray-200">12</p>
          <p class="text-sm text-gray-400">Dipesan</p>
        </div>
        <!-- Persediaan Habis (Tidak Tersedia) -->
        <div class="grid grid-rows-4 grid-flow-col">
          <p></p>
          <p class="text-xl font-semibold text-gray-700 dark:text-gray-200">2</p>
          <p class="text-sm text-gray-400">Tidak tersedia</p>
        </div>
      </div>
    </div>
    </div>
    <div class="p-6 bg-gray-50 rounded-lg shadow-md">
      <InventoryProducts/>
    </div>
  </div>
</template>
<script>
import InventoryProducts from '@/components/inventory/InventoryProducts.vue';
import SideNav from '@/components/layouts/SideNav.vue';

export default {
  name: 'InventoryAdmin',

  components: {
    SideNav,
    InventoryProducts
  },
};
</script>
