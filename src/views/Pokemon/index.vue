<template>
  <div>
    <div class="type">
      <div v-for="id in 18" :key="id">
        <Attribute :id="`${id}`" />
      </div>
    </div>
  </div>
</template>

<script>
import Attribute from '@/components/Attribute/buttonType.vue'
export default {
  components: {
    Attribute,
  },
}
</script>

<style>
.type {
  display: flex;
  flex-wrap: wrap;
}
</style>
