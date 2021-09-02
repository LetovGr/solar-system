<template>
  <PlanetsLayout>
    <PlanetsHeader slot="header" @showModal="show" @setSearch="setSearchHandler" />
    <PlanetsTools :current-tab="currentTab" />
    <CustomTable :rows="filteredPlanets" :colls="columns" :disabled="loading" with-pointer @click="onRowClickHandler">
      <template slot="isPlanet" slot-scope="item">
        {{ item.isPlanet ? 'Да' : 'Нет' }}
      </template>
      <PlanetActions v-if="!item.deleted" slot="actions" @edit="show(item)" @delete="onDelete(item)"
                     slot-scope="{item}"
      />
    </CustomTable>
    <template slot="footer">
      <PlanetsFooter />
    </template>
    <v-dialog />
  </PlanetsLayout>
</template>

<script>
import CustomTable from '@/components/UI/CustomTable'
import PlanetActions from '@/components/Planets/PlanetActions'
import PlanetForm from '@/components/Planets/PlanetForm'
import PlanetsHeader from '@/components/Planets/PlanetsHeader'
import PlanetsTools from '@/components/Planets/PlanetsTools'
import PlanetsFooter from '@/components/Planets/PlanetsFooter'
import PlanetsLayout from '@/components/Layouts/PlanetsLayout'
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'

export default {
  components: {
    CustomTable,
    PlanetActions,
    PlanetsHeader,
    PlanetsLayout,
    PlanetsTools,
    PlanetsFooter
  },
  data() {
    return {
      columns: [
        { name: 'Имя', field: 'name' },
        { name: 'Явл. планетой', field: 'isPlanet' },
        { name: 'Кем открыта', field: 'discoveredBy' },
        { name: 'Дата откртытия', field: 'discoveryDate' },
        { name: '', field: 'actions' },
      ],
    }
  },
  computed: {
    ...mapState('planets', [ 'planets', 'loading', 'params' ]),
    ...mapGetters('planets', [ 'filteredPlanets' ]),
    currentTab() {
      return +this.params.deleted
    }
  },
  methods: {
    ...mapActions('planets', [ 'fetchPlanets', 'updatePlanet' ]),
    ...mapMutations('planets', [ 'SET_PAGE', 'SET_SEARCH', 'SET_LOADING' ]),
    setSearchHandler(value) {
      this.SET_SEARCH(value)
    },
    onDelete(planet) {
      try {
        this.updatePlanet({ ...planet, deleted: true })
        this.$notify({ message: 'Объект успешно архивирован' })
      } catch(err) {
        this.$notify({ message: 'Ошибка', type: 'danger' })
        throw new Error(err)
      }
    },
    onRowClickHandler(planet) {
      this.$router.push({ name: 'planet', params: { id: planet.id } })
    },
    show(planet) {
      this.$modal.show(PlanetForm,
          { planet },
          { height: 380, name: 'planet-form' })
    },

  },
  created() {
    this.fetchPlanets()
  }
}
</script>

<style lang="scss" scoped>
.planets {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  width: 100%;

  h3 {
    font-size: 24px;
  }
}
</style>