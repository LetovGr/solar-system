<template>
  <div class="content-layout">
    <main class="content-layout__main">
      <slot></slot>
    </main>

  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.content-layout {
  display: grid;
  grid-template-columns:1fr;
  grid-template-rows: 1fr;
  height: 100vh;
  overflow: hidden;

}

</style>