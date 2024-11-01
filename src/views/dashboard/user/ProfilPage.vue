<template>
  <NavbarUser/>
  <UserProfil/>
  <FooterLayout/>
</template>

<script>
import FooterLayout from '@/components/layouts/FooterLayout.vue';
import NavbarUser from '@/components/layouts/NavbarUser.vue';
import UserProfil from '@/components/user/UserProfil.vue';

  export default{
    name: 'ProfilPage',

    components:{
      NavbarUser,
      UserProfil,
      FooterLayout
    }
  }
</script>