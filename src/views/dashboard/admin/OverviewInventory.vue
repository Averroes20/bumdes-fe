<template>
  <SideNav/>
  <div class="p-4 bg-white sm:ml-60">
    <div class="p-4 mt-10">
      <div class="p-6 bg-gray-50 rounded-lg shadow-md">
        <div class="flex items-center justify-between">
          <h2 class="text-2xl font-semibold text-gray-800">Maggi</h2>
          <div class="flex space-x-2">
            <button class="flex items-center text-gray-700 border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-100">
              <svg class="w-4 h-4 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M11 3H9v4H5v2h4v4h2V9h4V7h-4V3z" />
              </svg>
              Edit
            </button>
            <button class="flex items-center text-gray-700 border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-100">
              Download
            </button>
          </div>
        </div>
    
        <nav class="mt-6 border-b">
          <ul class="flex space-x-4">
            <li>
              <a href="#" class="text-blue-500 font-medium border-b-2 border-blue-500 pb-2">Overview</a>
            </li>
          </ul>
        </nav>
    
        <div class="mt-8 flex">
          <!-- Detail Kiri -->
          <div class="flex-1 space-y-6">
            <!-- Primary Details -->
            <div>
              <h3 class="text-lg font-semibold text-gray-800">Primary Details</h3>
              <ul class="mt-2 space-y-2 text-gray-700">
                <li><strong>Product name:</strong> Maggi</li>
                <li><strong>Product ID:</strong> 456567</li>
                <li><strong>Product category:</strong> Instant food</li>
                <li><strong>Expiry Date:</strong> 13/4/23</li>
                <li><strong>Price:</strong> Rp 15,000</li>
              </ul>
            </div>
    
            <!-- Supplier Details -->
            <div>
              <h3 class="text-lg font-semibold text-gray-800">Supplier Details</h3>
              <ul class="mt-2 space-y-2 text-gray-700">
                <li><strong>Supplier name:</strong> Ronald Martin</li>
                <li><strong>Contact Number:</strong> 98789 86757</li>
              </ul>
            </div>
    
            <!-- Description -->
            <div>
              <h3 class="text-lg font-semibold text-gray-800">Description Products</h3>
              <p class="mt-2 text-gray-500">
                Nikmati kelezatan Mie Kremes Crispy Delight, camilan yang sempurna untuk setiap kesempatan! Terbuat dari mie berkualitas tinggi yang digoreng hingga renyah, camilan ini menawarkan kombinasi rasa yang menggugah selera. Setiap gigitan menghadirkan tekstur yang crunchy dan rasa yang kaya, dipadukan dengan bumbu spesial yang membuatnya semakin nikmat.
              </p>
            </div>
          </div>
    
          <!-- Detail Kanan -->
          <div class="w-1/3 pl-8 flex flex-col items-center">
            <img src="https://via.placeholder.com/150" alt="Product Image" class="border-dashed border-2 border-gray-300 rounded-lg w-40 h-40 mb-4">
            <p class="text-gray-500">Remaining Stock</p>
            <p class="text-2xl font-semibold text-gray-800">34</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideNav from '@/components/layouts/SideNav.vue';

  export default{
    name: 'OverviewInventory',

    components: {
      SideNav,
    }
  }
</script>