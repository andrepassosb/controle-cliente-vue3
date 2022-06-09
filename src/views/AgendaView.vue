<template>
  <section class="wrapper-agenda">
    <h1 class="pt-3">Sua agenda</h1>
  </section>
  <section class="wrapper">
    <v-date-picker v-model="date" />
    <h4 class="mt-3 selecione">Selecione na agenda</h4>
    <div class="horarios">
      <template
        v-for="hours in everyNminutes(duration, open, close)"
        :key="hours"
      >
        <div
          class="horarios-atendimento"
          :class="selectHour == hours ? 'selecionado' : ''"
          @click="selectHour = hours"
        >
          {{ hours }}
        </div>
      </template>
    </div>
    <br />
    {{ day }} / {{ month }} / {{ fullYear }}
    <br />
    {{ selectHour }}
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import services from "@/services";
import useStore from "@/hooks/useStore";
import { setAgenda } from "@/store/agenda";

const date = ref(
  "Wed May 18 2022 00:04:26 GMT-0300 (Horário Padrão de Brasília)"
);
const selectHour = ref("");
const open = 10;
const close = 20;
const duration = 30;

const day = computed(() => {
  return new Date(date.value).getDate();
});
const month = computed(() => {
  return new Date(date.value).getMonth();
});
const fullYear = computed(() => {
  return new Date(date.value).getFullYear();
});

const store = useStore();

onMounted(async () => {
  if (!store.agenda || Object.keys(store.agenda).length === 0) {
    const { data } = await services.agenda.getAgenda();
    setAgenda(data);
    console.log(data);
  }
});

var everyNminutes = (duration, open, close) => {
  var result = [];
  for (var hours = open; hours < close; hours++) {
    for (var minutes = 0; minutes < 60; minutes = minutes + duration) {
      var h = "";
      var m = "";
      if (hours < 10) {
        h = "0" + hours;
      } else {
        h = hours;
      }
      if (minutes < 10) {
        m = "0" + minutes;
      } else {
        m = minutes;
      }
      result.push(h + ":" + m);
    }
  }
  return result;
};

console.log(everyNminutes(15));
</script>

<style>
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
.vc-highlight {
  background-color: #5c486a !important;
}
.selecionado {
  background-color: #5c486a !important;
  color: white;
  border-radius: 8px;
  margin: 0 15px;
}
.selecione {
  color: #5c486a;
}
.horarios {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.horarios-atendimento {
  font-family: BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, Helvetica, Arial,
    sans-serif;
  font-size: 14px;
  font-weight: 600;
  padding: 4px 0;
  cursor: pointer;
}
</style>
<style scoped>
h1 {
  font-weight: 600;
  text-align: initial;
  padding-left: 50px;
}
.wrapper-agenda {
  background-color: #fcd0cf;
  padding-bottom: 30px;
}
.wrapper {
  border-radius: 25px 25px 0 0;
  margin-top: -20px;
  background-color: white;
  margin-bottom: 100px;
}
</style>
