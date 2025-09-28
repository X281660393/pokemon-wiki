<template>
  <div class="top-page">
    <div class="title">
      <img src="@/assets/images/精灵球.png" alt="精灵球" width="40" />
      <span @style="lift = 1">宝可梦图鉴</span>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.top-page {
  margin: 5px 10px 5px 10px;
  font-size: 24px;
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;
  position: sticky;
  top: 0; /* 补充sticky定位的顶部位置 */
  background-color: white; /* 添加背景色，避免滚动时内容穿透 */
  /* 在下方边缘添加灰色分割线 */
  border-bottom: 1px solid #e5e7eb;
  /* 防止内容紧贴边框 */
  padding-bottom: 5px;
  z-index: 10; /* 确保在滚动时保持在页面上方 */
}
.title {
  display: flex;
  align-items: center; /* 使图片和文字垂直居中对齐 */
  font-size: 24px;
  font-weight: bold;
  color: #333;
  gap: 10px; /* 图片和文字之间的间距 */
}
</style>
