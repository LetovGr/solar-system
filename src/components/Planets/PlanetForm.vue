<template>
  <form action="" class="planet-form">
    <h2>{{ title }}</h2>
    <FormItem v-model="localValue.name" label="Имя планеты" name="name" class="planet-form__item" />
    <FormItem v-model="localValue.discoveredBy" label="Имя исследователя" name="discoveredBy"
              class="planet-form__item"
    />
    <FormItem v-model="localValue.discoveryDate"
              label="Дата"
              name="discoveryDate"
              placeholder="Формат DD/MM/YYYY"
              class="planet-form__item"
    />

    <CustomButton :text="buttonText" @click="onSubmitHandler" />
  </form>
</template>

<script>
import CustomButton from '@/components/UI/CustomButton'
import FormItem from '@/components/UI/FormItem'
import { mapActions } from 'vuex'

export default {
  components: {
    CustomButton,
    FormItem
  },
  props: {
    planet: {
      default: () => {
        return {
          name: '',
          discoveredBy: '',
          discoveryDate: ''
        }
      }
    }
  },
  data() {
    return {
      localValue: { ...this.planet }
    }
  },
  computed: {
    title() {
      return this.localValue.id ? 'Редактировать' : 'Добавить'
    },
    buttonText() {
      return this.localValue.id ? 'Обновить' : 'Добавить'
    }
  },
  methods: {
    ...mapActions('planets', [ 'addPlanet', 'updatePlanet' ]),
    addItem() {
      try {
        this.addPlanet({ ...this.localValue, id: Date.now() })
        this.$modal.hide('planet-form')
        this.$notify({ message: 'Объект успешно добавлен' })
      } catch(err) {
        this.$notify({ message: 'Ошибка', type: 'danger' })
        throw new Error(err)
      }
    },
    updateItem() {
      try {
        this.updatePlanet({ ...this.localValue })
        this.$modal.hide('planet-form')
        this.$notify({ message: 'Объект успешно обновлен' })
      } catch(err) {
        this.$notify({ message: 'Ошибка', type: 'danger' })
        throw new Error(err)
      }
    },
    onSubmitHandler() {
      this.localValue.id ? this.updateItem() : this.addItem()
    }
  },
  created() {
    console.log(this.planet)
  }
}
</script>

<style lang="scss" scoped>
.planet-form {
  padding: 20px;
  text-align: left;

  h2 {
    margin-bottom: 20px;
  }

  &__item {
    margin-bottom: 20px;
  }
}
</style>