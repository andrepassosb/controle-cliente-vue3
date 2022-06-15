<template>
  <section class="wrapper-agenda">
    <h1 class="pt-3">Sua agenda</h1>
  </section>
  <section class="wrapper">
    <v-date-picker v-model="date" @click="selectHour = ''" />
    <h4 class="mt-3 selecione">Selecione na agenda</h4>
    <div class="horarios">
      <template
        v-for="hours in everyNminutes(duration, open, close)"
        :key="hours"
      >
        <div
          class="horarios-atendimento"
          :class="selectHour == hours ? 'selecionado' : ''"
          @click="
            selectHour == '' || selectHour != hours
              ? (selectHour = hours)
              : (selectHour = '')
          "
        >
          {{ hours }}
        </div>
      </template>
    </div>
    <br />
    <!-- {{ day }} / {{ month }} / {{ fullYear }} -->
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Cliente</th>
          <th scope="col">Serviço</th>
          <th scope="col">Atendente</th>
          <th scope="col">Horário</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="agendaCliente in clientsOfDay" :key="agendaCliente.id">
          <th scope="row">{{ store.users[agendaCliente.pessoa].username }}</th>
          <th scope="row">{{ store.servicos[agendaCliente.servico].nome }}</th>
          <th scope="row">{{ store.users[agendaCliente.pessoa].username }}</th>
          <td>{{ agendaCliente.horario.slice(0, -3) }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import services from "@/services";
import useStore from "@/hooks/useStore";
import { setAgenda } from "@/store/agenda";
import { setUser } from "@/store/users";
import { setServico } from "@/store/servicos";

const date = ref("");
const selectHour = ref("");
const open = 10;
const close = 20;
const duration = 30;

const day = computed(() => {
  let Day = new Date(date.value).getDate();
  if (Day < 10) Day = `0${Day}`;
  return Day;
});
const month = computed(() => {
  let Month = new Date(date.value).getMonth() + 1;
  if (Month < 10) Month = `0${Month}`;
  return Month;
});
const fullYear = computed(() => {
  return new Date(date.value).getFullYear();
});

const clientsOfDay = ref([]);

const store = useStore();

watch(date, () => {
  clientsOfDay.value = store.agenda.data.filter((e) => {
    return e.dia == `${fullYear.value}-${month.value}-${day.value}`;
  });
});

watch(selectHour, () => {
  clientsOfDay.value = store.agenda.data.filter((e) => {
    return (
      e.dia == `${fullYear.value}-${month.value}-${day.value}` &&
      e.horario.slice(0, -3) == selectHour.value
    );
  });
});

onMounted(async () => {
  if (!store.agenda.data || store.agenda.data.length === 0) {
    const { data } = await services.agenda.getAgenda();
    setAgenda(data);
  }
  if (!store.users || Object.keys(store.users).length === 0) {
    const { data } = await services.users.getAllUsers();
    data.forEach((user) => {
      setUser(user.id, user);
    });
  }
  if (!store.servicos || Object.keys(store.servicos).length === 0) {
    const { data } = await services.servicos.getAllServicos();
    data.forEach((servico) => {
      setServico(servico.id, servico);
    });
  }
  date.value = new Date();
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
table.table.table-striped {
  width: 95%;
  margin: auto;
}
</style>
