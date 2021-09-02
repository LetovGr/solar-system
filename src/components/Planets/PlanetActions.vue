<template>
  <div class="actions" @click.stop>
    <CustomButton text="✏️" variant="secondary" @click="$emit('edit')" />
    <CustomButton text="❌" variant="danger" @click="onDelete" />
  </div>
</template>

<script>
import CustomButton from '@/components/UI/CustomButton'

export default {
  components: {
    CustomButton
  },
  methods: {
    onDelete() {
      this.$modal.show('dialog', {
        title: 'Архивировать',
        text: 'Подтвердите действие',
        buttons: [
          {
            title: 'Отмена',
            handler: () => {
              this.$modal.hide('dialog')
            }
          },
          {
            title: 'Архивировать',
            handler: () => {
              this.$emit('delete')
              this.$modal.hide('dialog')
            }
          },
        ]
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.actions {
  display: flex;
  align-items: center;

  button:first-child {
    margin-right: 10px;
  }
}
</style>