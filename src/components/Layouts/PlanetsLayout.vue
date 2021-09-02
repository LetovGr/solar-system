<template>
  <div class="planets-layout">
    <header class="planets-layout__header">
      <slot name="header"></slot>
    </header>
    <main class="planets-layout__main">
      <slot></slot>
    </main>
    <footer class="planets-layout__footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.planets-layout {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 80px 1fr min-content;
  height: 100vh;
  overflow: hidden;


  &__header {
    background-color: var(--bg-secondary);
  }

  &__main {
    padding: 0 20px;
    overflow: auto;
    margin-bottom: 20px;
  }

  &__footer {
    margin-bottom: 20px;
  }
}

</style>