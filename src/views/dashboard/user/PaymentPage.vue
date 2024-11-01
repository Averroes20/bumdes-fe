<template>
  <NavbarUser/>
  <PaymentMethod/>
  <FooterLayout/>
</template>

<script>
import FooterLayout from '@/components/layouts/FooterLayout.vue';
import NavbarUser from '@/components/layouts/NavbarUser.vue';
import PaymentMethod from '@/components/user/PaymentMethod.vue';

  export default{
    name: 'PaymentPage',

    components:{
      NavbarUser,
      PaymentMethod,
      FooterLayout
    }
  }
</script>