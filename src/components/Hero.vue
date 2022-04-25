<template>
  <div class="hero">
    <div class="text">
      <div class="content">
        <h1>Les activités au bout des doigts avec <span>Kayla !</span></h1>
        <h2>Profitez de la vie familiale à plein temps : nous vous proposons des activités qui épanouiront vos enfants, et qui vous épanouiront ! </h2>
      </div>
    </div>
    <div class="image">
      <g-image alt="kayla phone" src="~/assets/images/kayla_phone.svg" fit="inside" width="360" height="495" />
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
  min-height: calc(100vh - 80px);
  padding: 40px 0;
  margin: 0 auto;
  width: 85%;
}

.hero .text {
  display: flex;
  justify-content: flex-start;
  width: 55%;
  padding-right: 5%;
}

.hero .image {
  display: flex;
  justify-content: flex-end;
  width: 40%;
}

.hero .text .content {
  max-width: 720px;
  font-family: "Avenir", Arial, sans-serif;
}

.hero h1 {
  font-style: normal;
  font-weight: 800;
  font-size: 60px;
  line-height: 80px;
  letter-spacing: -0.03em;
  color: #55A5CA;
}

.hero h1 span {
  display: inline-block;
  font-size: 100px;
  font-weight: 400;
  line-height: 80px;
  letter-spacing: -0.03em;
  color: #005B85;
  font-family: "Cream Cake", Comic Sans, sans-serif;
}

.hero h2 {
  font-weight: 500;
  font-size: 28px;
  line-height: 48px;
  color: #55A5CA;
}
</style>

<style>
@media screen and (max-width: 960px) {
  .hero .image img {
    width: 275px !important;
  }
}
@media screen and (max-width: 900px) {
  
}
</style>