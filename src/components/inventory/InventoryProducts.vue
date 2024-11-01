<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <div class="flex flex-row items-center justify-between py-4">
      <h2 class="text-lg font-semibold">Products</h2>
      <div class="flex space-x-2">
        <!-- Tombol untuk membuka modal -->
        <button @click="showModal = true" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="button">
          Tambahkan Produk
        </button>
        <button class="text-gray-700 border border-gray-300 rounded-lg px-4 py-2 flex items-center">
          <svg class="w-4 h-4 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
          </svg>
          Filters
        </button>
        <button class="text-gray-700 border border-gray-300 rounded-lg px-4 py-2">
          Download all
        </button>
      </div>
    </div>
    <table class="w-full text-sm text-left text-gray-500">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" class="px-6 py-3">Produk</th>
          <th scope="col" class="px-6 py-3">Harga Produk</th>
          <th scope="col" class="px-6 py-3">Jumlah</th>
          <th scope="col" class="px-6 py-3">Nama Supplier</th>
          <th scope="col" class="px-6 py-3">Expiry Date</th>
          <th scope="col" class="px-6 py-3">Availability</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white border-b hover:bg-gray-50">
          <td class="px-6 py-4">Minyak</td>
          <td class="px-6 py-4">Rp 25,000</td>
          <td class="px-6 py-4">20 Liter</td>
          <td class="px-6 py-4">Bpk H Ramlih</td>
          <td class="px-6 py-4">11/12/22</td>
          <td class="px-6 py-4 text-green-600">In-stock</td>
        </tr>
        <tr class="bg-white border-b hover:bg-gray-50">
          <td class="px-6 py-4">Mie Goreng</td>
          <td class="px-6 py-4">Rp 3,500</td>
          <td class="px-6 py-4">50 Pcs</td>
          <td class="px-6 py-4">Ibu Romlah</td>
          <td class="px-6 py-4">21/12/22</td>
          <td class="px-6 py-4 text-red-600">Out of stock</td>
        </tr>
        <tr class="bg-white border-b hover:bg-gray-50">
          <td class="px-6 py-4">Beras</td>
          <td class="px-6 py-4">Rp 40,000</td>
          <td class="px-6 py-4">40 Liter</td>
          <td class="px-6 py-4">Bpk Edi</td>
          <td class="px-6 py-4">5/12/22</td>
          <td class="px-6 py-4 text-green-600">In-stock</td>
        </tr>
      </tbody>
    </table>
    <div class="flex items-center justify-between m-4">
      <button class="text-gray-600 bg-gray-100 border border-gray-300 rounded-lg px-4 py-2">Previous</button>
      <span class="text-gray-700">Page 1 of 10</span>
      <button class="text-gray-600 bg-gray-100 border border-gray-300 rounded-lg px-4 py-2">Next</button>
    </div>
  </div>

  <!-- Main modal -->
  <div v-if="showModal" tabindex="-1" aria-hidden="true" class="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
      <div class="relative p-4 w-full max-w-lg max-h-full">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <!-- Modal header -->
              <div class="flex items-center justify-between p-4 border-b rounded-t">
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                      Produk Baru - Langkah {{ step }}
                  </h3>
                  <button @click="closeModal" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center">
                      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                      </svg>
                      <span class="sr-only">Close modal</span>
                  </button>
              </div>
              <!-- Konten Formulir Langkah 1 -->
              <form v-if="step === 1" class="p-4 space-y-4">
                  <div class="flex flex-col items-center space-y-2">
                      <div class="border-dashed border-2 border-gray-300 rounded-lg w-32 h-32 flex items-center justify-center">
                          <p class="text-center text-gray-500 text-xs">Drag image here<br>or<br><a href="#" class="text-blue-500">Browse image</a></p>
                      </div>
                  </div>
                  <div class="flex items-center space-x-4">
                    <label class="text-sm font-medium text-gray-700 w-32">Nama Produk</label>
                    <input type="text" class="block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Enter product name">
                  </div>
                  <div class="flex items-center space-x-4">
                    <label class="text-sm font-medium text-gray-700 w-32">Id Produk</label>
                    <input type="text" class="block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Enter product id">
                  </div>
                  <div class="flex items-center space-x-4">
                    <label class="text-sm font-medium text-gray-700 w-32">Kategori</label>
                    <input type="text" class="block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Enter category">
                  </div>
                  <div class="flex items-center space-x-4">
                    <label class="text-sm font-medium text-gray-700 w-32">Harga</label>
                    <input type="text" class="block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Enter price">
                  </div>
                  <div class="flex items-center space-x-4">
                    <label class="text-sm font-medium text-gray-700 w-32">Jumlah</label>
                    <input type="text" class="block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Enter price">
                  </div>
                  <div class="flex items-center space-x-4">
                    <label class="text-sm font-medium text-gray-700 w-32">Expiry Date</label>
                    <input type="text" class="block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Enter price">
                  </div>
                  <div class="flex items-center space-x-4">
                    <label class="text-sm font-medium text-gray-700 w-32">Nama Supplier</label>
                    <input type="text" class="block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Enter price">
                  </div>
                  <div class="flex justify-between mt-4">
                      <button type="button" @click="closeModal" class="text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm px-4 py-2">Kembali</button>
                      <button type="button" @click="nextStep" class="text-white bg-blue-600 hover:bg-blue-700 rounded-lg text-sm px-4 py-2">Selanjutnya</button>
                  </div>
              </form>
              
              <form v-if="step === 2" class="p-4 space-y-4" @submit.prevent="navigateToOverview">
                <div class="flex items-center space-x-4">
                  <label class="text-sm font-medium text-gray-700 w-32">Deskripsi Produk</label>
                  <textarea class="block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Enter description product"></textarea>
                </div>
                <div class="flex justify-between mt-4">
                  <button type="button" @click="prevStep" class="text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm px-4 py-2">Kembali</button>
                  <button type="button" @click="navigateToOverview" class="text-white bg-blue-600 hover:bg-blue-700 rounded-lg text-sm px-4 py-2">Tambah Produk</button>
                </div>
              </form>
          </div>
      </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const showModal = ref(false)
const step = ref(1)
const router = useRouter();

const closeModal = () => {
  showModal.value = false
  step.value = 1 // Reset step ke 1 saat modal ditutup
}

const nextStep = () => {
  step.value = 2
}

const prevStep = () => {
  step.value = 1
}

const navigateToOverview = () => {
  // Mengarahkan ke halaman overview setelah klik "Tambah Produk"
  router.push('/overview');
};
</script>
