<template>
  <div class="planets-header">
    <div class="planets-header__logo">
      <img src="../../assets/svg/logo.svg" alt="">
      <h2>Solar System</h2>
    </div>
    <div class="planets-header__actions">
      <CustomInput placeholder="Search" @input="v=> $emit('setSearch', v)" />
      <CustomButton @click="$emit('showModal')" text="Создать" />
    </div>
  </div>
</template>

<script>
import CustomButton from '@/components/UI/CustomButton'
import CustomInput from '@/components/UI/CustomInput'

export default {
  components: {
    CustomButton,
    CustomInput
  },

}
</script>

<style lang="scss" scoped>
.planets-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  border-bottom: 1px solid var(--border);

  &__logo {
    display: flex;
    align-items: flex-end;

    h2 {
      line-height: 1;
    }

    img {
      width: 35px;
      height: 35px;
      margin-right: 10px;
    }
  }

  &__actions {
    display: flex;
    align-items: center;

    input {
      margin-right: 10px;
    }
  }
}
</style>