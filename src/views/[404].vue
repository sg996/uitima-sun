<template>
  <el-empty class="bg-white" :image="require('@/assets/images/404.svg')" :image-size="400">
    <template #description />
    <el-button type="primary" @click="$router.push('/')">返回首页</el-button>
  </el-empty>
</template>
