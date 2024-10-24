<template>
  <JumbotronLayout />
  <div class="container mx-auto px-36">
    <button type="" class="text-white bg-green-600 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2">Product Category</button>
    <CardCategory />
    <div class="text-center mt-4">
      <p class="text-xl font-bold">All Products</p>
    </div>
    <SearchLayout />
    <CardItem />
    <FooterLayout />
  </div>
</template>

<script>
import CardCategory from '@/components/layouts/CardCategory.vue';
import CardItem from '@/components/layouts/CardItem.vue';
import FooterLayout from '@/components/layouts/FooterLayout.vue';
import JumbotronLayout from '@/components/layouts/JumbotronLayout.vue';
import SearchLayout from '@/components/layouts/SearchLayout.vue';

export default {
  name: 'AdminHome',

  components: {
    // Daftarkan komponen Navbar
    JumbotronLayout,
    CardCategory,
    SearchLayout,
    CardItem,
    FooterLayout
  }
}
</script>