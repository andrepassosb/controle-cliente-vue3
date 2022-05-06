<template>
  <router-view />
  <NavBar />
</template>

<script>
import NavBar from "./components/Molecules/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 600px;
  margin: auto;
  border: 1px solid rgb(239, 243, 244);
  min-height: 100vh;
  background-color: #fff3f2;
}

.border-botton-gray{
    border-bottom: 1px solid rgb(239, 243, 244);
}
.flex-basis-0{
  flex-basis: 0px;
}
.btn.btn-primary{
  background-color: rgb(29, 155, 240);
  border-color: rgba(255, 255, 255, 0.5);
}
.btn.btn-primary:hover{
  background-color: rgb(68, 169, 236);
  border-color: rgba(255, 255, 255, 0.5);
}
.btn.btn-secondary{
  background-color: rgb(239, 243, 244);
  color:black;
  border-color: rgba(255, 255, 255, 0.5);
}
.btn.btn-secondary:hover{
  border-color: rgba(255, 255, 255, 0.3);
  background-color: rgb(215, 219, 220);
  color:#000
}
</style>
