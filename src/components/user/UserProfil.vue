<template>
  <div class="mx-auto mt-24 mb-32 w-full max-w-2xl">
    <!-- Judul Halaman -->
    <h1 class="text-2xl font-bold mb-4 text-center">PROFIL SAYA</h1>
    <a href="/" class="primary-color mb-6 block text-center">Kembali Belanja</a>

    <!-- Informasi Profil -->
    <div class="text-left">
      <h2 class="text-xl font-semibold mb-6">Ahmad Agus</h2>
      
      <form class="space-y-4">
        <!-- Nama Panggilan -->
        <div class="flex items-center">
          <label class="w-32 text-gray-700 text-sm font-medium">Nama Panggilan</label>
          <input type="text" value="Agus Bengkel" class="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500" disabled>
        </div>
        
        <!-- Email -->
        <div class="flex items-center">
          <label class="w-32 text-gray-700 text-sm font-medium">Email</label>
          <input type="email" value="agusahmad888@gmail.com" class="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500" disabled>
        </div>
        
        <!-- Nomor Whatsapp -->
        <div class="flex items-center">
          <label class="w-32 text-gray-700 text-sm font-medium">Nomor Whatsapp</label>
          <input type="text" value="089976567666" class="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500" disabled>
        </div>
        
        <!-- Alamat -->
        <div class="flex items-start">
          <label class="w-32 text-gray-700 text-sm font-medium mt-1">Alamat</label>
          <textarea class="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500" rows="2" disabled>Kampung Kroya Pasir Pekon Sinar Petir, RT/RW 002/008, No. 0019</textarea>
        </div>
      </form>
      
      <!-- Tombol Edit -->
      <div class="flex justify-end mt-6">
        <button class="bg-primary-color text-white px-6 py-2 rounded hover:bg-green-700">Edit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserProfil'
}
</script>

<style scoped>
/* Tambahkan style khusus jika diperlukan */
</style>
