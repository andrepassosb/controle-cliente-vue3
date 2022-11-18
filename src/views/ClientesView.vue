<template>
  <section class="wrapper-cliente">
    <h1 class="pt-3">Prestadores</h1>
  </section>
  <div v-if="store.loading.status" class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div>
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
      <Stars :user="user.id" :stars="store.pontuacao[user.id]" />
    </div>
  </section>
  <router-link :to="`/clientes/cadastrar`">
    <button type="button" class="btn btn-primary">
      <span>Cadastrar</span>
    </button>
  </router-link>

  <!-- Modal -->
  <div
    v-for="user in store.users"
    :key="user.id"
    class="modal fade"
    :id="`modal${user.id}`"
    tabindex="-1"
    role="dialog"
    :aria-labelledby="`modal${user.id}-center`"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">
            Pontuação : {{ countStar(store.pontuacao[user.id]) }}
          </h5>
        </div>
        <div class="modal-body">
          <Stars :user="user.id" :stars="store.pontuacao[user.id]" />
          <div>
            <div class="clientes-input col-12">
              <p class="col-4">Nota :</p>
              <input
                class="col-8"
                type="number"
                max="5"
                min="1"
                v-model="avaliacao.pontos"
              />
            </div>
            <div class="clientes-input col-12">
              <p class="col-4">Descrição :</p>
              <input
                class="col-8"
                type="text"
                aria-autocomplete="none"
                v-model="avaliacao.descricao"
              />
            </div>
            <button
              type="button"
              class="btn btn-primary"
              @click="enviar(user.id)"
            >
              Enviar
            </button>
          </div>
          <div style="margin-top: 10px">
            <div
              class="pontuacao"
              v-for="star in store.pontuacao[user.id]"
              :key="star.pessoa"
            >
              ( {{ star.dia }} ) Nota: {{ star.pontos }}
              <p>{{ star.descricao }}</p>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="closeModal()">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "@vue/runtime-core";
import services from "@/services";
import useStore from "@/hooks/useStore";
import { setUser } from "@/store/users";
import { setPontuacao, resetPontuacao } from "@/store/pontuacoes";
import Stars from "@/components/Molecules/Stars.vue";

const store = useStore();

const avaliacao = ref({
  descricao: "",
  dia: "",
  pessoa: 0,
  pontos: 0,
});

onMounted(async () => {
  if (!store.users || Object.keys(store.users).length === 0) {
    const { data } = await services.users.getAllUsers();
    data.forEach((user) => {
      setUser(user.id, user);
    });
  }
  if (!store.pontuacao || Object.keys(store.pontuacao).length === 0) {
    const { data } = await services.pontuacao.getAllStars();
    data.forEach((e) => {
      setPontuacao(e.pessoa, e);
    });
  }
});

function closeModal() {
  document.querySelector(".modal.fade.show").style.display = "none";
  document.querySelector(".modal.fade.show").classList.remove("show");
  document.querySelector(".modal-backdrop.fade.show").remove();
}

const countStar = (stars) => {
  if (!stars) return 0;
  let count = 0;
  stars.forEach((e) => {
    count = +e.pontos;
  });
  return (count / stars.length).toFixed(2);
};

async function enviar(pessoa) {
  const date = new Date();
  let dataFormatada =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  avaliacao.value.pessoa = pessoa;
  avaliacao.value.dia = dataFormatada;
  const { data } = await services.pontuacao.postNewStar(avaliacao.value);
  if (data) {
    avaliacao.value = {
      descricao: "",
      dia: "",
      pessoa: 0,
      pontos: 0,
    };
    closeModal();
    const { data: newData } = await services.pontuacao.getAllStars();
    resetPontuacao();
    newData.forEach((e) => {
      setPontuacao(e.pessoa, e);
    });
  }
}
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
.pontuacao {
  border: 1px solid;
}
.clientes-input.col-12 {
  display: flex;
  align-items: center;
  align-content: center;
  margin-top: 10px;
}
</style>
