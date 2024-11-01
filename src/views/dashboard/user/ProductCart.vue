<template>
  <NavbarUser/>
  <CartProduct/>
  <FooterLayout/>
</template>

<script>
import FooterLayout from '@/components/layouts/FooterLayout.vue';
import NavbarUser from '@/components/layouts/NavbarUser.vue';
import CartProduct from '@/components/user/CartProduct.vue';

  export default{
    name: 'ProductCart',

    components:{
      NavbarUser,
      CartProduct,
      FooterLayout
    }
  }
</script>