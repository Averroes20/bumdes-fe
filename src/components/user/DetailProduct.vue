<template>
  <div class="mx-auto mt-24 mb-32 w-full">
    <h1 class="text-2xl font-bold mb-4 text-center">Detail Product</h1>
    <a href="/" class="text-green-600 mb-6 block text-center">Kembali Belanja</a>
    <div class="flex flex-col md:flex-row items-start bg-blue-50 p-10 rounded-lg shadow-lg w-full">
      <!-- Gambar Produk -->
      <div class="md:w-1/2 w-full p-4">
        <div class="border border-blue-300 p-4 rounded-lg flex justify-center items-center">
          <img src="https://via.placeholder.com/300x400" alt="Product Image" class="w-64 h-80 object-cover" />
        </div>
      </div>
      
      <!-- Detail Produk -->
      <div class="md:w-1/2 w-full p-4">
        <h2 class="text-xl font-semibold mb-2">Minyak Tawon Haji Slamet</h2>
        <p class="text-lg primary-color font-semibold">Rp. 100,000</p>
        <p class="text-sm primary-color mb-4">Stock Tersedia: 100</p>

        <p class="text-gray-700 mb-4">
          <span class="font-semibold">Deskripsi :</span><br>
          Minyak ini sering digunakan untuk mengobati kondisi kulit, luka, dan nyeri sendi.
        </p>

        <p class="text-gray-700 mb-2">
          <span class="font-semibold">Penjual :</span> Pak Haji Slamet
        </p>
        <p class="text-gray-700 mb-4">
          <span class="font-semibold">Alamat :</span> Kp. Pasir Jengkol RT/RW 004/002
        </p>

        <!-- Pengaturan Jumlah dan Tombol -->
        <div class="flex items-center mb-6">
          <label for="quantity" class="mr-2 font-semibold">Jumlah</label>
          <button class="px-2 py-1 border border-gray-400 rounded-l" @click="decrementQuantity">-</button>
          <input type="text" id="quantity" class="w-12 text-center border-t border-b border-gray-400" :value="quantity" readonly />
          <button class="px-2 py-1 border border-gray-400 rounded-r" @click="incrementQuantity">+</button>
        </div>

        <button class="bg-primary-color text-white py-2 px-4 hover:bg-green-700 transition" @click="addToCart">
          Tambah ke keranjang
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quantity: 1
    };
  },
  methods: {
    incrementQuantity() {
      this.quantity += 1;
    },
    decrementQuantity() {
      if (this.quantity > 1) {
        this.quantity -= 1;
      }
    },
    addToCart() {
      // Logika menambahkan ke keranjang
      alert(`Produk ditambahkan ke keranjang dengan jumlah ${this.quantity}`);
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 800px;
}
</style>
