<template>
  <section class="wrapper-cliente">
    <h1 class="pt-3">Serviços</h1>
  </section>
  <section class="wrapper mt-3">
    <div v-for="servico in store.servicos" :key="servico.id" class="clientes">
      <router-link :to="`/servicos/${servico.id}`">
        <span>{{ servico.nome }}</span>
      </router-link>
    </div>
  </section>
  <router-link :to="`/servicos/cadastrar`">
    <button type="button" class="btn btn-primary">
      <span>Cadastrar</span>
    </button>
  </router-link>
</template>
<script setup>
import { onMounted } from "@vue/runtime-core";
import services from "@/services";
import useStore from "@/hooks/useStore";
import { setServico } from "@/store/servicos";

const store = useStore();

onMounted(async () => {
  if (!store.servicos || Object.keys(store.servicos).length === 0) {
    const { data } = await services.servicos.getAllServicos();
    data.forEach((servico) => {
      setServico(servico.id, servico);
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
