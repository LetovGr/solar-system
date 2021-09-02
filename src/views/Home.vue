<template>
  <HomeLayout>
    <notifications/>
    <router-view></router-view>
  </HomeLayout>
</template>

<script>
import HomeLayout from '@/components/Layouts/HomeLayout'

export default {
  components: {
    HomeLayout
  },
}
</script>

<style lang="scss" scoped>

</style>