<template>
  <component
      class="action-button"
      :is="tag"
      :type="type"
      v-on="$listeners"
      :disabled="disabled"
      :class="{ [`action-button__${variant}`]: true}"
      :href="to"
  >
    <div v-if="$scopedSlots.icon" class="action-button__icon">
      <slot name="icon" />
    </div>
    <span v-if="text" class="action-button__text" :class="{ [`action-button__text--${textColor}`]: true }">{{
        text
      }}</span>
    <slot></slot>
  </component>
</template>

<script>
export default {
  components: {},
  props: {
    tag: {
      type: String,
      default: 'button'
    },
    text: String,
    disabled: {
      type: Boolean,
      default: false
    },
    variant: {
      type: String,
      validator(value) {
        return [ 'primary', 'secondary', 'success', 'warning', 'danger' ].includes(value)
      },
      default: 'primary'
    },
    textColor: String,
    type: {
      type: String,
      default: 'button'
    },
    to: {
      type: String
    }
  }
}
</script>

<style lang="scss">
.action-button__success svg path {
  fill: #32a879;
}
</style>

<style lang="scss" scoped>
@import 'src/styles/variables.scss';

.action-button {
  display: flex;
  height: var(--ui-el-height);
  min-width: var(--ui-el-height);
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: 1px solid transparent;
  letter-spacing: 0.5px;
  cursor: pointer;
  white-space: nowrap;

  &:active {
    transform: translateY(1px);
    transition: transform 100ms;
  }

  &__text {
    padding: 0 16px;
    font-weight: 400;
    font-size: 14px;
  }

  &__icon {
    display: flex;
    flex-shrink: 0;
  }

  &__primary {
    background-color: var(--primary);
    color: var(--button-primary-text);

    &:hover {
      background-color: var(--primary-80);
    }

    &:active {
      background-color: var(--primary-120);
    }
  }

  &__secondary {
    border-color: var(--border-secondary);
    background-color: var(--secondary-80);
    color: var(--button-secondary-text);

    &:hover {
      background-color: var(--secondary);
    }

    &:active {
      background-color: var(--secondary-120);
    }
  }

  &__danger {
    border-color: transparent;
    background-color: var(--danger-80);
    color: var(--button-danger-text);

    &:hover {
      background-color: var(--danger);
    }

    &:active {
      background-color: var(--danger-120);
    }
  }
}
</style>
