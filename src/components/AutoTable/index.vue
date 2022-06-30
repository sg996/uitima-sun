<template>
  <el-table v-loading="loading" size="small" :header-cell-style="$tableHeadStyle" :data="data" border stripe
    width="100%" highlight-current-row>
    <template v-for="(item, index) in configs">
      <slot v-if="item.slot" :name="item.slot" />
      <component :is="item.component" v-else-if="item.component" :key="index" :info="item" />
      <el-table-column v-else :key="index" v-bind="item" align="center" />
    </template>
  </el-table>
</template>

<script>
// 参考地址： https://juejin.im/post/6844903512225087496
export default {
  name: 'AutoTable',
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    configs: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>
