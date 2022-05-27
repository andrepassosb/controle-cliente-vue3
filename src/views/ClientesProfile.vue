<template>
  <section class="wrapper-cliente">
    <h1 class="pt-3">Clientes</h1>
  </section>
  <section class="wrapper mt-3">
    <div class="clientes">
      <p>id : {{ store.users[userId].id }}</p>
      <p>username : {{ store.users[userId].username }}</p>
      <p>cpf: {{ store.users[userId].cpf }}</p>
      <p>first_name: {{ store.users[userId].first_name }}</p>
      <p>last_name: {{ store.users[userId].last_name }}</p>
      <p>endereco: {{ store.users[userId].endereco }}</p>
      <p>nascimento: {{ store.users[userId].nascimento }}</p>
      <p>telefone: {{ store.users[userId].telefone }}</p>
      <p>email: {{ store.users[userId].email }}</p>
      <p>is_atendente: {{ store.users[userId].is_atendente }}</p>
      <p>is_gerente: {{ store.users[userId].is_gerente }}</p>
    </div>
  </section>
</template>
<script setup>
import { onMounted } from "@vue/runtime-core";
import services from "@/services";
import useStore from "@/hooks/useStore";
import { setUser } from "@/store/data";
import { useRoute } from "vue-router";

const route = useRoute();

const userId = route.params.userId;

const store = useStore();

onMounted(async () => {
  if (!store.users || Object.keys(store.users).length === 0) {
    const { data } = await services.users.getAllUsers();
    data.forEach((user) => {
      setUser(user.id, user);
    });
  }
});
</script>

<style scoped>
.wrapper-cliente {
  background-color: #fcd0cf;
  padding-bottom: 30px;
}
.wrapper {
  border-radius: 25px 25px 0 0;
  margin-top: -20px;
  background-color: white;
}
h1 {
  font-weight: 600;
  text-align: initial;
  padding-left: 50px;
}
.clientes {
  display: flex;
  justify-content: space-between;
  margin: 6px 20px;
  border: 1px solid rgb(239, 243, 244);
  z-index: 5;
  transform: translateX(-1px);
  box-shadow: 0px 0px 14px 0px rgb(0 0 0 / 15%);
  padding: 4px 14px;
  border-radius: 7px;
  align-items: flex-start;
  flex-direction: column;
  align-content: flex-start;
}
</style>
