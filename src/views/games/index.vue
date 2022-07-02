<template>
  <div class="game-content group grid md:grid-cols-2 lg:grid-cols-3 gap-4 min-w-min">
    <template v-for="item in menuList" :key="item.id">
      <div class="cell relative" @click="$router.push(item.path)">
        {{ item.name }}
        <el-tag class="absolute top-0 left-0" effect="light" disable-transitions>
          {{ item.label }}
        </el-tag>
      </div>
    </template>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { nanoid } from 'nanoid'
const menuList = reactive([
  { id: nanoid(), name: 'Tic Tac Toe', path: '/games/001', label: '001' },
  { id: nanoid(), name: 'Tic Tac Toe', path: '', label: '002' }
])
</script>

<style lang="scss" scoped>
.game-content {
  .cell {
    @apply h-24 shadow w-full rounded-[4px] bg-white text-gray-800 font-semibold flex items-center justify-center py-1 px-2 cursor-pointer;
  }
}
</style>
