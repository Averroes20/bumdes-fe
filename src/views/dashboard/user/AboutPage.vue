<template>
  <NavbarUser/>
  <UserProfil/>
  <FooterLayout/>
</template>

<script>
import FooterLayout from '@/components/layouts/FooterLayout.vue';
import NavbarUser from '@/components/layouts/NavbarUser.vue';
import UserProfil from '@/components/user/AboutComponent.vue';

  export default{
    name: 'AboutPage',

    components:{
      NavbarUser,
      UserProfil,
      FooterLayout
    }
  }
</script>