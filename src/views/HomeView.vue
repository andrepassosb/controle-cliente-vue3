<template>
  <section class="wrapper-logo">
    <h1>
      <span class="studio">studio</span
      ><span class="BrushRegular studio-name">Gisele Duarte</span>
    </h1>
    <h3 class="BrushRegular slogan">Seu estilo, seu jeito</h3>
  </section>
  <section class="wrapper">
    <div class="image">
      <img class="w-100" src="@/assets/pic_1.jpg" alt="" />
    </div>
  </section>
</template>

<style>
.BrushRegular {
  font-family: BrushRegular;
}
.studio {
  position: absolute;
  transform: translate3d(76px, 12px, 0);
  font-size: 2rem;
}
.studio-name {
  font-size: 8rem;
}
.slogan {
  font-size: 3rem;
  margin-top: -32px;
}
.wrapper-logo {
  background-color: #fcd0cf;
  padding-bottom: 30px;
}
.wrapper {
  border-radius: 25px 25px 0 0;
  margin-top: -20px;
  background-color: white;
}
.image {
  max-width: 80%;
  margin: auto;
  padding-top: 35px;
}
.image img {
  border-radius: 25px;
}
@media (max-width: 576px) {
  .studio-name {
    font-size: 5rem;
  }
  .studio {
    position: absolute;
    transform: translate3d(51px, 10px, 0);
    font-size: 1.15rem;
  }
  .slogan {
    font-size: 2.3rem;
    margin-top: -22px;
  }
}
</style>
