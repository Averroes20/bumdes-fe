<template>
  <div class="mx-auto mt-24 mb-32 w-full px-10">
    <!-- Header -->
    <h1 class="text-2xl font-bold mb-4 text-center">Pembayaran</h1>
    <a href="/" class="text-green-600 mb-6 block text-center">Kembali Belanja</a>

    <!-- Alamat Pengiriman -->
    <div class="mb-10">
      <h2 class="font-semibold text-lg">Alamat Pengiriman</h2>
      <div class="mt-4">
        <p class="text-xl font-semibold">Ahmad Jumroni</p>
        <p class="text-gray-700">08996767677</p>
        <p class="text-gray-700">
          Jalan Raya Simo Jogorogo, Desa Simo, Kp. Kayu Lima RT/RW 004/001 Gang Senggol No. 4F
        </p>
      </div>
    </div>

    <!-- Daftar Produk -->
    <table class="w-full text-sm text-left text-gray-500 mb-10">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th class="px-4 py-3">Product</th>
          <th class="px-6 py-3">Harga</th>
          <th class="px-6 py-3">Jumlah</th>
          <th class="px-6 py-3">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white border-b hover:bg-gray-50">
          <td class="flex items-center space-x-4 px-6 py-4">
            <img src="https://via.placeholder.com/100" class="w-20 h-20 rounded-md" alt="Product Image">
            <div>
              <p class="text-lg font-semibold text-gray-900">Minyak Tawon</p>
              <a href="#" class="text-sm text-green-500 hover:underline">Hapus Belanja</a>
            </div>
          </td>
          <td class="px-6 py-4 text-gray-900">Rp. 100,000</td>
          <td class="px-6 py-4">
            <div class="flex items-center space-x-2">
              <button class="px-2 py-1 border border-gray-300 rounded-l">-</button>
              <input type="text" class="w-12 text-center border border-gray-300" value="1" readonly>
              <button class="px-2 py-1 border border-gray-300 rounded-r">+</button>
            </div>
          </td>
          <td class="px-6 py-4 font-semibold text-gray-900">Rp. 100,000</td>
        </tr>
      </tbody>
    </table>

    <!-- Metode Pembayaran -->
    <div class="mb-10">
      <h2 class="font-semibold text-lg">Pilih Metode Pembayaran</h2>
      <p class="mt-2 text-gray-700">COD</p>
      <p class="text-gray-500">Ambil ke BUMDES MART</p>
    </div>

    <!-- Bagian Total dan Tombol Bayar -->
    <div class="flex justify-end items-center mt-6 w-full">
      <div class="w-80 flex items-center justify-between">
        <div class="text-xl font-semibold text-gray-900">
          Total: <span>Rp. 100,000</span>
          <p class="text-sm text-gray-500 mt-2">*Total yang harus dibayar</p>
        </div>
        <button class="bg-primary-color text-white ml-4 px-6 py-2 hover:bg-green-700">Bayar COD</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentMethod'
}
</script>

<style scoped>
/* Tambahkan style khusus jika diperlukan */
</style>
