<template>
  <PlanetsLayout class="planet-info">
    <h2 slot="header">Planet {{ $route.params.id }}</h2>
    <CustomTable :colls="columns" :rows="rows" />
  </PlanetsLayout>
</template>

<script>
import PlanetsLayout from '@/components/Layouts/PlanetsLayout'
import CustomTable from '@/components/UI/CustomTable'
import { mapActions, mapState } from 'vuex'

export default {
  components: {
    CustomTable,
    PlanetsLayout
  },
  data() {
    return {
      columns: [
        { name: 'Поле', field: 'field' },
        { name: 'Значение', field: 'value' }
      ]
    }
  },
  computed: {
    ...mapState('planets', [ 'currentPlanet' ]),
    rows() {
      let res = []
      if (this.currentPlanet) {
        Object.keys(this.currentPlanet).forEach(key => {
          res.push({ name: key, field: key, value: this.currentPlanet[key] })
        })
      }
      return res
    }
  },
  methods: {
    ...mapActions('planets', [ 'fetchPlanet' ]),
  },
  created() {
    this.fetchPlanet(this.$route.params.id)
  }

}
</script>

<style lang="scss" scoped>
.planet-info {
  h2 {
    text-align: left;
    padding-left: 20px;
  }
}
</style>