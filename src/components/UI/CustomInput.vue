<template>
  <input :type="type"
         :value="value"
         @input="e=>$emit('input', e.target.value)"
         @change="e=>$emit('change', e.target.value)"
         :placeholder="placeholder"
         :disabled="disabled"
         class="custom-input"
  >
</template>

<script>
export default {
  props: {
    placeholder: String,
    value: null,
    disabled: Boolean,
    type: {
      default: 'text',
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-input {
  position: relative;
  height: var(--ui-el-height);
  padding: 0 10px;
  background-color: var(--bg-primary);
  border: 1px solid var(--border);
  border-radius: 8px;
  font-size: 14px;
  color: var(--text);
  font-weight: 400;

  &:focus {
    outline: none;
    border-color: var(--primary);
  }

  &:hover:not(&:focus) {
    border-color: var(--primary-80);
  }

  &::placeholder {
    color: var(--text-secondary);
    font-size: 14px;
  }
}
</style>