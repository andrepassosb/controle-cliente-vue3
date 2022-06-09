<template>
  <section class="wrapper-cliente">
    <h1 class="pt-3">Clientes</h1>
  </section>
  <section class="wrapper mt-3">
    <div class="clientes">
      <div class="clientes-input col-12">
        <p class="col-4">Nome :</p>
        <input class="col-8" type="text" v-model="servico.nome" />
      </div>
      <div class="clientes-input col-12">
        <p class="col-4">Descrição :</p>
        <input class="col-8" type="text" v-model="servico.descricao" />
      </div>
      <div class="clientes-input col-12">
        <p class="col-4">Duração prevista :</p>
        <input class="col-8" type="number" v-model="servico.duracao_prevista" />
      </div>
      <div class="clientes-input col-12">
        <input
          type="radio"
          id="ativo"
          name="fav_language"
          :value="true"
          v-model="servico.ativo"
        />
        <label for="ativo">Ativo</label><br />
        <input
          type="radio"
          id="inativo"
          name="fav_language"
          :value="false"
          v-model="servico.ativo"
        />
        <label for="inativo">Inativo</label><br />
      </div>
    </div>
    <div class="mx-5 d-flex justify-content-between">
      <button @click="backPage()" type="button" class="btn btn-primary">
        Voltar
      </button>
      <button
        v-if="servicoId !== 'cadastrar'"
        @click="save()"
        type="button"
        class="btn btn-secondary"
      >
        Salvar
      </button>
      <button v-else @click="cadastrar()" type="button" class="btn btn-primary">
        Cadastrar
      </button>
    </div>
  </section>
</template>
<script setup>
import { onMounted, ref } from "@vue/runtime-core";
import services from "@/services";
import useStore from "@/hooks/useStore";
import { setServico } from "@/store/servicos";
import { useRoute } from "vue-router";

const route = useRoute();

const servicoId = route.params.servicoId;

const store = useStore();

const servico = ref({});

onMounted(async () => {
  if (servicoId !== "cadastrar") {
    if (!store.servicos || Object.keys(store.servicos).length === 0) {
      // const { data } = await services.servicos.getAllServicos();
      // // data.forEach((servico) => {
      // //   // setUser(servico.id, servico);
      // // });
    }
    servico.value = store.servicos[servicoId];
  }
});
function backPage() {
  history.back();
}
function save() {
  services.servicos.updateUser(servicoId, servico);
  // setUser(servicoId, servico);
}
async function cadastrar() {
  servico.value.duracao_prevista = +servico.value.duracao_prevista;
  const newServico = await services.servicos.postNewServico(servico.value);
  setServico(newServico.id, newServico.data);
}
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
.clientes-input {
  display: flex;
  align-items: center;
  align-content: center;
  margin-top: 10px;
}
.clientes-input p {
  margin-bottom: 0;
  margin-right: 10px;
  text-align: end;
}
</style>
