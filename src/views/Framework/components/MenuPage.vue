<template>
  <div class="menu-page">
    <el-menu :default-active="activePath" class="el-menu-vertical-demo">
      <el-menu-item
        v-for="item in option.menuList"
        :key="item.key"
        :index="item.key"
        @click="handleClick(item.key)"
      >
        <img class="icons" :src="item.img" />
        <template #title> {{ item.title }}</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { IconMap } from 'element-plus'
import option from './config/option.js'

import defaultIcon from '@/assets/icons/精灵球.svg'

export default {
  data() {
    return {
      option,
      IconMap,
      activePath: option.menuList[0].key,
    }
  },
  created() {
    this.handleIcon()
    this.checkUrl()
  },
  methods: {
    handleClick(index) {
      this.$router.push({ path: index }).then(() => {
        // this.checkUrl()
      })
    },
    handleIcon() {
      const icons = import.meta.glob('@/assets/icons/*.svg', { eager: true })
      this.option.menuList.forEach((item) => {
        const targetPath = `/src/assets/icons/${item.icon}`
        item.img = icons[targetPath]?.default || defaultIcon
      })
    },
    //检测url变化
    checkUrl() {
      const currentPath = this.$route.path.replace(/^\//, '').split('/')[0]
      this.activePath = currentPath
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
