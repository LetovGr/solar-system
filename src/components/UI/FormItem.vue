<template>
  <label class="form-item" :for="name">
    <span>
      {{ label }}
    </span>
    <CustomInput :name="name" v-bind="$attrs" v-on="$listeners" />
  </label>
</template>

<script>
import CustomInput from '@/components/UI/CustomInput'

export default {
  components: {
    CustomInput
  },
  props: {
    name: String,
    label: String
  }
}
</script>

<style lang="scss" scoped>
.form-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  span {
    margin-bottom: 5px;
  }

  input {
    width: 100%;
  }
}
</style>