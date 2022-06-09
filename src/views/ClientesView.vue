<template>
  <section class="wrapper-cliente">
    <h1 class="pt-3">Clientes</h1>
  </section>
  {{ store.loading.status }}
  <section class="wrapper mt-3">
    <div v-for="user in store.users" :key="user.id" class="clientes">
      <router-link :to="`/clientes/${user.id}`">
        <span>{{
          user.first_name
            ? `${user.first_name} ${user.last_name}`
            : `Cliente n°:${user.id}`
        }}</span>
      </router-link>
      <a
        v-if="user.telefone"
        :href="`https://api.whatsapp.com/send?phone=55${user.telefone}`"
        target="_blank"
      >
        <img src="@/assets/icons/whatsapp.svg" alt="" />
      </a>
    </div>
  </section>
  <router-link :to="`/clientes/cadastrar`">
    <button type="button" class="btn btn-primary">
      <span>Cadastrar</span>
    </button>
  </router-link>
</template>
<script setup>
import { onMounted } from "@vue/runtime-core";
import services from "@/services";
import useStore from "@/hooks/useStore";
import { setUser } from "@/store/users";

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

<style>
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
  align-items: center;
  min-height: 48px;
}
a img {
  height: 38px;
}
</style>
