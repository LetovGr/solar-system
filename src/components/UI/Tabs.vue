<template>
  <div class="tabs" :class="{[variant]:true}">
    <div v-for="(tab, i) in options" :key="i"
         @click="setActiveTab(tab, i)"
         :class="{ active: activeTab === i }"
         class="tabs__tab"
    >{{ tab.name }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: Array,
    initTab: {
      type: Number, default: 0
    },
    variant: String
  },
  data() {
    return {
      activeTab: this.initTab
    }
  },
  methods: {
    setActiveTab(tab, i) {
      this.activeTab = i
      this.$emit('tabChange', tab.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.tabs {
  $self: &;

  position: relative;
  display: inline-flex;
  padding: 0px 1px;

  &__tab {
    display: flex;
    align-items: center;
    justify-content: center;
    height: var(--ui-el-height);
    min-width: 80px;
    padding: 0 10px;
    font-weight: 600;
    cursor: pointer;
    border-bottom: 2px solid transparent;

    &.active, &:hover {
      border-color: var(--text);
    }

    &:hover:not(&.active) {
      background-color: var(--secondary-120);
    }
  }

  &.buttons {
    border: 1px solid var(--border-secondary);
    border-radius: 8px;
    padding: 5px;
    height: var(--ui-el-height);


    #{$self}__tab {
      height: auto;
      min-width: 40px;
      border-color: transparent;
      border-radius: 20px;
      font-size: 14px;
      font-weight: 400;
      line-height: 1;

      &.active, &:hover {
        background-color: var(--text);
        color: var(--secondary-80)
      }
    }


  }


}
</style>