<template>
  <div class="planets-footer">
    <CustomButton variant="secondary" text="Загрузить еще" @click="onLoadMoreHandler" />
    <div class="planets-footer__limit">
      <span>
        Показывать по:
      </span>
      <Tabs :options="tabs" variant="buttons" :init-tab="0" @tabChange="({limit})=>onLimitChangeHandler(limit)" />
    </div>

  </div>
</template>

<script>
import CustomButton from '@/components/UI/CustomButton'
import Tabs from '@/components/UI/Tabs'
import { mapActions, mapMutations } from 'vuex'

export default {
  components: {
    CustomButton,
    Tabs
  },
  data() {
    return {
      tabs: [
        { name: '20', value: { limit: 20 } },
        { name: '50', value: { limit: 50 } },
        { name: '100', value: { limit: 100 } },
      ]
    }
  },
  methods: {
    ...mapActions('planets', [ 'fetchPlanets' ]),
    ...mapMutations('planets', [ 'SET_PARAMS', 'SET_PAGE', 'RESET_PLANETS' ]),
    async onLoadMoreHandler() {
      this.SET_PAGE()
      await this.fetchPlanets()
    },
    async onLimitChangeHandler(limit) {
      this.SET_PARAMS({ limit })
      this.RESET_PLANETS()
      await this.fetchPlanets()
    }
  }
}
</script>

<style lang="scss" scoped>
.planets-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;

  &__limit {
    display: flex;
    align-items: center;

    span {
      margin-right: 10px;
    }
  }
}
</style>