<template>
  <div class="planets-tools">
    <Tabs :options="tabs" :init-tab="0" @tabChange="({deleted})=>SET_PARAMS({deleted})" />
    <div class="planets-tools__filters-ph"></div>
  </div>
</template>

<script>
import Tabs from '@/components/UI/Tabs'
import { mapMutations } from 'vuex'

export default {
  components: {
    Tabs
  },
  data() {
    return {
      tabs: [
        { name: 'Текущие', value: { deleted: false } },
        { name: 'Архивированные', value: { deleted: true } }
      ]
    }
  },
  methods: {
    ...mapMutations('planets', [ 'SET_PAGE', 'SET_SEARCH', 'SET_LOADING', 'SET_PARAMS' ])
  }
}
</script>

<style lang="scss" scoped>
.planets-tools {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 0 30px 0;
}
</style>