<template>
  <div class="hero">
    <div class="text">
      <div class="content">
        <h1>Les activités au bout des doigts avec <span>Kayla !</span></h1>
        <h2>Profitez de la vie familiale à plein temps : nous vous proposons des activités qui épanouiront vos enfants, et qui vous épanouiront ! </h2>
      </div>
    </div>
    <div class="image">
      <img alt="kayla phone" src="../assets/images/kayla_phone.svg" fit="inside" style="width:22.5em;height:30.938em;">
    </div>
  </div>
</template>

<script>
export default {
    name: "Hero"
}
</script>

<style>
.hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: calc(100vh - 10em);
  padding: 5em 0;
  margin: 0 auto;
  width: 85%;
}

@media screen and (max-width: 767px) and (orientation:portrait) {
  .hero {
    min-height: fit-content;
  }
}

.hero .text {
  display: flex;
  justify-content: flex-start;
  width: 57.5%;
  padding-right: 2.5%;
}

.hero .image {
  display: flex;
  justify-content: flex-end;
  width: 40%;
}

.hero .text .content {
  max-width: 45em;
  font-family: "Avenir", Arial, sans-serif;
}

.hero h1 {
  font-style: normal;
  font-weight: 800;
  font-size: 3.75em;
  line-height: 1.25em;
  letter-spacing: -0.03em;
  color: #55A5CA;
}

.hero h1 span {
  display: inline-block;
  font-size: 1.75em;
  font-weight: 400;
  letter-spacing: -0.03em;
  color: #005B85;
  font-family: "Cream Cake", Comic Sans, sans-serif;
}

.hero h2 {
  font-weight: 500;
  font-size: 1.75em;
  line-height: 1.5em;
  color: #55A5CA;
}
</style>