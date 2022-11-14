<template>
  <div>
    {{ props.user }}
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
  </div>
</template>
<script setup>
const props = defineProps({
  user: Number,
});
</script>
<style scoped>
.checked {
  color: orange;
}
</style>
