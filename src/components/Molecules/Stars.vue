<template>
  <div type="button" data-bs-toggle="modal" :data-bs-target="`#modal${user}`">
    <span :class="`fa fa-star ${countStar > 0 ? 'checked' : ''}`"></span>
    <span :class="`fa fa-star ${countStar > 1 ? 'checked' : ''}`"></span>
    <span :class="`fa fa-star ${countStar > 2 ? 'checked' : ''}`"></span>
    <span :class="`fa fa-star ${countStar > 3 ? 'checked' : ''}`"></span>
    <span :class="`fa fa-star ${countStar > 4 ? 'checked' : ''}`"></span>
  </div>
</template>
<script setup>
import { computed } from "@vue/runtime-core";

const props = defineProps({
  user: Number,
  stars: Array,
});

const countStar = computed(() => {
  if (!props.stars) return 0;
  let count = 0;
  props.stars.forEach((e) => {
    count = +e.pontos;
  });
  return (count / props.stars.length).toFixed(2);
});
</script>
<style scoped>
.checked {
  color: orange;
}
</style>
