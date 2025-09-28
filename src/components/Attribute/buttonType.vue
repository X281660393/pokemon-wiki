<template>
  <div class="type-item" v-if="Data">
    <div class="type-name" :style="{ backgroundColor: Data.color }">
      {{ Data.name }}
    </div>
  </div>
</template>

<script>
import option from './config/option.js'

export default {
  props: {
    id: {
      type: String,
      default: () => '',
    },
    name: {
      type: String,
      default: () => '',
    },
    englishName: {
      type: String,
      default: () => '',
    },
    japaneseName: {
      type: String,
      default: () => '',
    },
  },
  data() {
    return {
      option,
      Data: [],
    }
  },
  created() {
    this.getTypeData()
  },
  methods: {
    // 辅助函数：根据中文名称获取颜色
    getTypeData() {
      if (this.id) {
        this.Data = this.option.pokemonTypes.find((item) => item.id === this.id)
      } else if (this.name) {
        this.Data = this.option.pokemonTypes.find((item) => item.name === this.name)
      } else if (this.englishName) {
        this.Data = this.option.pokemonTypes.find((item) => item.englishName === this.englishName)
      } else if (this.japaneseName) {
        this.Data = this.option.pokemonTypes.find((item) => item.japaneseName === this.japaneseName)
      } else {
        // 所有字段都不匹配时，设置默认值（避免保留旧数据）
        this.Data = null // 或 {}
      }
    },
  },
}
</script>

<style>
.type-item {
  padding: 2px 2px;
  width: 50px;
  align-items: center;
  font-size: 15px;
  user-select: none;
  color: #fff;
}
.type-name {
  border-radius: 5px;
  text-align: center;
}
</style>
