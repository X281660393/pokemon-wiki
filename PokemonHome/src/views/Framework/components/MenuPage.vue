<template>
  <div class="menu-page">
    <el-menu :default-active="option.menuList[0].key" class="el-menu-vertical-demo">
      <el-menu-item
        v-for="item in option.menuList"
        :key="item.key"
        :index="item.key"
        @click="handleClick(item.key)"
      >
        <img class="icons" :src="handleIcon(item.icon)" />
        <template #title> {{ item.title }}</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import option from './config/option.js'

export default {
  data() {
    return {
      option,
    }
  },
  methods: {
    handleClick(index) {
      this.$router.push({ path: index })
    },
    handleIcon(index) {
      const icons = import.meta.glob('/src/assets/icons/*.svg', { eager: true })
      const iconPath = `/src/assets/icons/${index}`
      // 检查资源是否存在于导入的模块中
      if (icons[iconPath]) {
        return iconPath
      } else {
        const defaultPath = '/src/assets/icons/精灵球.svg'
        return defaultPath
      }
    },
  },
}
</script>

<style>
.menu-page {
  width: 100%;
  height: 100%;
  user-select: none;
}
.el-menu-vertical-demo {
  height: 100%;
}
.icons {
  width: 24px;
  margin-right: 8px;
}
.button {
  width: 24px;
  margin-right: 8px;
  cursor: pointer;
}
/* 设置选中项的背景颜色 */
.el-menu-item.is-active {
  background-color: #e6f7ff !important;
}
</style>
