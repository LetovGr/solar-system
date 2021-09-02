<template>
  <div class="table">
    <table class="table__body" :class="{'table__body--disabled': disabled}">
      <thead class="table__header">
      <tr>
        <th v-for="col in colls" :key="col.field">
          <slot name="header-cell" :column="col">{{ col.name }}</slot>
        </th>
      </tr>
      </thead>
      <tr v-for="(row, i) in rows" :key="i" :class="{'with-pointer': withPointer}">
        <td v-for="col in colls" :key="col.name" class="table__cell" @click="$emit('click', row)">
          <slot :name="col.field" :item="row">{{ row[col.field] }}</slot>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    rows: {
      type: Array,
      required: true
    },
    colls: {
      type: Array,
      required: true
    },
    withPointer: Boolean,
    disabled: Boolean
  }
}
</script>

<style lang="scss" scoped>
$td-padding: 8px 5px;

.table {
  position: relative;
  display: block;
  width: 100%;
  font-size: 13px;
  font-weight: 400;

  &__body {
    width: 100%;
    border-collapse: collapse;

    &--disabled {
      opacity: 0.5;
      pointer-events: none;
    }
  }

  th {
    position: sticky;
    top: 0;
    font-size: 16px;
    line-height: 1.5;
    color: var(--text);
    background-color: var(--secondary-120);
    white-space: nowrap;
  }

  tr th, td {
    padding: $td-padding;
    border-bottom: 1px solid var(--border-secondary);
    text-align: left;
  }

  tr td:first-child {
    font-weight: 500;
  }

  tr:not(:first-child) {
    &:hover {
      background-color: var(--secondary-120);
    }

    &.with-pointer {
      cursor: pointer;
    }
  }

}
</style>