<template>
  <NavbarUser/>
  <TransactionProcess/>
  <FooterLayout/>
</template>

<script>
import FooterLayout from '@/components/layouts/FooterLayout.vue';
import NavbarUser from '@/components/layouts/NavbarUser.vue';
import TransactionProcess from '@/components/user/TransactionProcess.vue';

  export default{
    name: 'TransactionProcessPage',

    components:{
      NavbarUser,
      TransactionProcess,
      FooterLayout
    }
  }
</script>