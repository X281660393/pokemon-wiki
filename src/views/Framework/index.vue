<template>
  <div class="common-layout">
    <el-container>
      <el-header> <TopPage /></el-header>
      <el-container :style="{ height: 'calc(100vh - 70px)' }">
        <el-aside width="150px" height="100%"> <MenuPage /></el-aside>
        <el-main> <router-view /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import TopPage from './components/TopPage.vue'
import MenuPage from './components/MenuPage.vue'
export default {
  components: {
    TopPage,
    MenuPage,
  },
}
</script>

<style></style>
