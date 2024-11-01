<template>
  <div class="mx-auto mt-24 mb-32 w-full text-center">
    <!-- Header -->
    <h1 class="text-2xl font-bold mb-4">Transaksi Selesai</h1>
    <a href="/" class="primary-color mb-6 block">Kembali Belanja</a>
    
    <!-- Konten Utama -->
    <div class="mt-20">
      <div class="flex justify-center mb-4">
        <div class="w-20 h-20 rounded-full border-4 border-green-500 flex items-center justify-center">
          <svg class="w-12 h-12 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
      <p class="text-lg text-gray-700 font-semibold mb-2">Payment Confirmed</p>
      <p class="primary-color text-lg font-semibold mb-6">ID PESANAN #2039</p>
      <a href="/" class="bg-primary-color text-white px-6 py-2 hover:bg-green-700">Kembali Belanja</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TransaksiSelesai'
}
</script>

<style scoped>
/* Tambahkan style khusus jika diperlukan */
</style>
