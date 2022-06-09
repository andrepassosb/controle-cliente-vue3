<template>
  <section class="wrapper-cliente">
    <h1 class="pt-3">Clientes</h1>
  </section>
  <section class="wrapper mt-3">
    <div class="clientes">
      <div class="clientes-input col-12">
        <p class="col-4">Usuário :</p>
        <input class="col-8" type="text" v-model="user.username" />
      </div>
      <div class="clientes-input col-12">
        <p class="col-4">Cpf :</p>
        <input class="col-8" type="text" v-model="user.cpf" />
      </div>
      <div class="clientes-input col-12">
        <p class="col-4">Primeiro nome :</p>
        <input class="col-8" type="text" v-model="user.first_name" />
      </div>
      <div class="clientes-input col-12">
        <p class="col-4">Último nome :</p>
        <input class="col-8" type="text" v-model="user.last_name" />
      </div>
      <div class="clientes-input col-12">
        <p class="col-4">Endereco :</p>
        <input class="col-8" type="text" v-model="user.endereco" />
      </div>
      <div class="clientes-input col-12">
        <p class="col-4">Data de nascimento :</p>
        <input class="col-8" type="text" v-model="user.nascimento" />
      </div>
      <div class="clientes-input col-12">
        <p class="col-4">Telefone :</p>
        <input class="col-8" type="text" v-model="user.telefone" />
      </div>
      <div class="clientes-input col-12">
        <p class="col-4">Endereço de email :</p>
        <input class="col-8" type="text" v-model="user.email" />
      </div>
      <div class="clientes-input col-12">
        <p class="col-4">Nova senha :</p>
        <input class="col-8" type="text" v-model="user.new_password" />
      </div>
    </div>
    <div class="mx-5 d-flex justify-content-between">
      <button @click="backPage()" type="button" class="btn btn-primary">
        Voltar
      </button>
      <button
        v-if="userId !== 'cadastrar'"
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
import { setUser } from "@/store/users";
import { useRoute } from "vue-router";

const route = useRoute();

const userId = route.params.userId;

const store = useStore();

const user = ref({});

onMounted(async () => {
  if (userId !== "cadastrar") {
    if (!store.users || Object.keys(store.users).length === 0) {
      const { data } = await services.users.getAllUsers();
      data.forEach((user) => {
        setUser(user.id, user);
      });
    }
    user.value = store.users[userId];
  }
});
function backPage() {
  history.back();
}
function save() {
  services.users.updateUser(userId, user);
  setUser(userId, user);
}
async function cadastrar() {
  const newUser = await services.users.postNewUser(user.value);
  console.log(newUser);
  setUser(newUser.id, newUser.data);
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
