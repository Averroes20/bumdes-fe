<template>
  <SideNav />
  <div class="p-4 sm:ml-60 bg-white">
    <div class="p-4 mt-10">
      <div class="p-6 bg-gray-50 rounded-lg shadow-md">
        <SuppliersTable/>
      </div>
    </div>
  </div>
</template>

<script>
import SuppliersTable from '@/components/dashboard/SuppliersTable.vue';
import SideNav from '@/components/layouts/SideNav.vue';

  export default{
    name: 'SuppliersAdmin',

    components: {
      SideNav,
      SuppliersTable
    }
  }
</script>