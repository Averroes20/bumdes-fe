<template>
  <NavbarUser/>
  <TransactionSuccess/>
  <FooterLayout/>
</template>

<script>
import FooterLayout from '@/components/layouts/FooterLayout.vue';
import NavbarUser from '@/components/layouts/NavbarUser.vue';
import TransactionSuccess from '@/components/user/TransactionSuccess.vue';

  export default{
    name: 'TransactionSuccessPage',

    components:{
      NavbarUser,
      TransactionSuccess,
      FooterLayout
    }
  }
</script>