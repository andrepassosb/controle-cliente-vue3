<template>
  <section class="wrapper-agenda">
    <h1 class="pt-3">Sua agenda</h1>
  </section>
  <section class="wrapper">
    <v-date-picker v-model="date" />
    <br />
    {{ date }}
  </section>
</template>

<script setup>
import { ref } from "vue";

const date = ref(
  " Wed May 18 2022 00:04:26 GMT-0300 (Horário Padrão de Brasília)"
);
</script>

<style>
h1 {
  font-weight: 600;
  text-align: initial;
  padding-left: 50px;
}
.vc-container.vc-blue {
  width: 90%;
  margin-top: 20px;
  border: none;
}
.vc-header.align-center {
  background-color: #fff3f2;
  padding: 5px 16px 5px;
  border-radius: 14px;
}
.vc-arrow {
  transform: translateY(-4px);
}
.wrapper-agenda {
  background-color: #fcd0cf;
  padding-bottom: 30px;
}
.wrapper {
  border-radius: 25px 25px 0 0;
  margin-top: -20px;
  background-color: white;
}
</style>
