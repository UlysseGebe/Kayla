<template>
  <div class="hero">
    <div class="text">
      <div class="content">
        <h1>Les activités au bout des doigts avec <span>Kayla !</span></h1>
        <h2>Profitez de la vie familiale à plein temps : nous vous proposons des activités qui épanouiront vos enfants, et qui vous épanouiront ! </h2>
      </div>
    </div>
    <div class="image">
      <g-image alt="kayla phone" src="~/assets/images/kayla_phone.png" fit="inside" width="521" height="605" />
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
  background-image: url('../assets/images/nuage_crop.svg');
  background-repeat: no-repeat;
  background-size: 800px;
  background-position: 0 0;
  min-height: calc(100vh - 80px);
  padding: 40px 0;
}

.hero .text {
  display: flex;
  justify-content: center;
  width: 60%;
}

.hero .image {
  display: flex;
  justify-content: flex-end;
  width: 40%;
}

.hero .text .content {
  max-width: 655px;
}

.hero h1 {
  font-size: 60px;
  font-weight: 800;
  line-height: 80px;
  letter-spacing: -0.03em;
}

.hero h1 span {
  font-size: 60px;
  font-weight: 700;
  line-height: 80px;
  letter-spacing: -0.03em;
}

.hero h2 {
  font-size: 28px;
  font-weight: 400;
  font-size: 28px;
  line-height: 48px;
}
</style>
