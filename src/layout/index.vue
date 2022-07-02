<template>
  <div class="layout-wrapper">
    <el-container>
      <!-- header start -->
      <el-header :class="{ 'is-collapse': $store.state.isCollapse }">
        <div class="logo-wrapper ">
          <el-image :src="require('../assets/logo.png')" />
          <span v-if="!$store.state.isCollapse">UItima</span>
        </div>
        <div class="header-content">
          <div class="breadcrumb-btn hover:[background:var(--el-menu-hover-bg-color)]"
            @click="$store.commit({ type: 'toggleCollapse' })">
            <icon-ep-fold v-if="!$store.state.isCollapse" class="cursor-pointer flex-1" />
            <icon-ep-expand v-else class="cursor-pointer" />
          </div>
        </div>
      </el-header>
      <!-- header end -->
      <el-container :class="['layout-content', $store.state.isCollapse ? 'is-collapse' : '']">
        <el-scrollbar>
          <el-aside class="layout-aside">
            <el-menu default-active="1" class="el-menu-vertical-demo" :collapse="$store.state.isCollapse"
              :collapse-transition="false" router>
              <el-menu-item index="1" :route="{ path: '/home' }">
                <icon-ep-menu />
                <template #title><span class="w-[150px] ml-[10px] truncate">首页</span></template>
              </el-menu-item>
              <el-menu-item index="2" :route="{ path: '/games' }">
                <icon-ion-game-controller />
                <template #title><span class="w-[150px] ml-[10px] truncate">游戏</span></template>
              </el-menu-item>
            </el-menu>
          </el-aside>
        </el-scrollbar>
        <el-container>
          <el-scrollbar>
            <el-main class="layout-main">
              <router-view />
            </el-main>
          </el-scrollbar>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.layout-wrapper {
  --el-header-height: 60px;
  --el-aside-width: 200px;

  .el-header {
    display: flex;
    padding: 0;
    z-index: 101;

    .logo-wrapper {
      box-sizing: border-box;
      width: var(--el-aside-width);
      height: var(--el-header-height);
      display: flex;
      align-items: center;
      justify-content: center;
      @apply cursor-pointer;

      .el-image {
        width: 40px;
        height: 40px;
      }

      span {
        margin-left: 10px;
      }
    }

    .header-content {
      width: calc(100vw - var(--el-aside-width));
      box-shadow: 0 4px 4px -2px rgb(0 0 0 / 5%);
      border-bottom: solid 1px var(--el-menu-border-color);

      .breadcrumb-btn {
        @apply w-[60px] h-[60px] flex justify-center items-center;
      }
    }

    &.is-collapse {

      .logo-wrapper {
        width: calc(var(--el-menu-icon-width) + var(--el-menu-base-level-padding) * 2);
      }

      .header-content {
        width: calc(100vw - var(--el-menu-icon-width) - var(--el-menu-base-level-padding) * 2);
      }
    }
  }

  .layout-content {
    height: calc(100vh - var(--el-header-height));

    .layout-aside {
      transform: all .3s;

      .el-menu {
        height: calc(100vh - var(--el-header-height));
        box-shadow: 4px 0 4px -2px rgb(0 0 0 / 5%);

        &-item.is-active {
          background-color: var(--el-menu-hover-bg-color);
        }
      }
    }

    .layout-main {
      width: calc(100vw - var(--el-aside-width));
      height: calc(100vh - var(--el-header-height));
      background-color: #eee;
      transform: all .3s;
    }

    &.is-collapse {
      .layout-aside {
        width: calc(var(--el-menu-icon-width) + var(--el-menu-base-level-padding) * 2);
      }

      .layout-main {
        width: calc(100vw - var(--el-menu-icon-width) - var(--el-menu-base-level-padding) * 2);
      }
    }
  }
}
</style>
