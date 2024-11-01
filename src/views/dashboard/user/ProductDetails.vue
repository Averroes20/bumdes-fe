<template>
  <div class="top-0 left-0 h-screen">
    <NavbarUser/>
    <DetailProduct/>
    <FooterLayout/>
  </div>
</template>

<script>
import FooterLayout from '@/components/layouts/FooterLayout.vue';
import NavbarUser from '@/components/layouts/NavbarUser.vue';
import DetailProduct from '@/components/user/DetailProduct.vue';

  export default{
    name: 'ProductDetails',

    components:{
      NavbarUser,
      DetailProduct,
      FooterLayout
    }
  }
</script>