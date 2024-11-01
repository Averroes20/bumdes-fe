<template>
  <NavbarUser/>
  <div class="mx-auto mt-24 mb-32 w-full max-w-2xl text-center">
    <!-- Header -->
    <h1 class="text-2xl font-bold mb-4">REGISTRASI</h1>
    <a href="/" class="primary-color mb-6 block">Kembali Belanja</a>

    <!-- Form Registrasi -->
    <form class="space-y-6">
      <!-- Nama Lengkap -->
      <div>
        <label for="nama-lengkap" class="block text-left font-medium text-gray-700">Nama Lengkap</label>
        <input type="text" id="nama-lengkap" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500" placeholder="Nama Lengkap">
      </div>

      <!-- Nama Panggilan -->
      <div>
        <label for="nama-panggilan" class="block text-left font-medium text-gray-700">Nama Panggilan</label>
        <input type="text" id="nama-panggilan" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500" placeholder="Nama Panggilan">
      </div>

      <!-- Katasandi dan Konfirmasi Katasandi -->
      <div class="flex space-x-4">
        <div class="w-1/2">
          <label for="katasandi" class="block text-left font-medium text-gray-700">Katasandi</label>
          <input type="password" id="katasandi" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500" placeholder="Katasandi">
        </div>
        <div class="w-1/2">
          <label for="konfirmasi-katasandi" class="block text-left font-medium text-gray-700">Konfirmasi Katasandi</label>
          <input type="password" id="konfirmasi-katasandi" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500" placeholder="Konfirmasi Katasandi">
        </div>
      </div>

      <!-- Email -->
      <div>
        <label for="email" class="block text-left font-medium text-gray-700">Email</label>
        <input type="email" id="email" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500" placeholder="Email">
      </div>

      <!-- Nomor WhatsApp -->
      <div>
        <label for="whatsapp" class="block text-left font-medium text-gray-700">Nomor WhatsApp</label>
        <input type="tel" id="whatsapp" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500" placeholder="Nomor WhatsApp">
      </div>

      <!-- Alamat -->
      <div class="flex space-x-4">
        <div class="w-1/4">
          <label for="desa" class="block text-left font-medium text-gray-700">Desa</label>
          <input type="text" id="desa" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500" placeholder="Desa">
        </div>
        <div class="w-1/4">
          <label for="kampung" class="block text-left font-medium text-gray-700">Kampung</label>
          <input type="text" id="kampung" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500" placeholder="Kampung">
        </div>
        <div class="w-1/4">
          <label for="rt" class="block text-left font-medium text-gray-700">RT</label>
          <input type="text" id="rt" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500" placeholder="RT">
        </div>
        <div class="w-1/4">
          <label for="rw" class="block text-left font-medium text-gray-700">RW</label>
          <input type="text" id="rw" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500" placeholder="RW">
        </div>
      </div>

      <!-- Tombol Registrasi -->
      <div>
        <button type="submit" class="w-full bg-primary-color text-white py-2 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">REGISTRASI</button>
      </div>
    </form>
  </div>
  <FooterLayout/>
</template>

<script>
import FooterLayout from '@/components/layouts/FooterLayout.vue';
import NavbarUser from '@/components/layouts/NavbarUser.vue';

export default {
  name: 'UserRegister',

  components:{
    NavbarUser,
    FooterLayout
  }
}
</script>

<style scoped>
/* Tambahkan style khusus jika diperlukan */
</style>
