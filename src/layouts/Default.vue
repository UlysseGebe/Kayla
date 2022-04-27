<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/" class="siteName">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <div class="socials-links">
        <a href="#" target="_blank">
          <img src="../assets/images/linkedin.svg" alt="" style="width:1.25em;height:1.25em;">
        </a>
        <a href="#" target="_blank">
          <img src="../assets/images/messenger.svg" alt="" style="width:1.25em;height:1.25em;">
        </a>
        <a href="#" target="_blank">
          <img src="../assets/images/twitter.svg" alt="" style="width:1.25em;height:1.25em;">
        </a>
      </div>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  metaInfo: {
    title: 'Kayla',
    titleTemplate: false,
    htmlAttrs: {
      lang: 'fr',
      // amp: true
    },
    // bodyAttrs: {
    //   class: ['dark-mode', 'mobile']
    // }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;700&display=swap');
@font-face {
  font-family: "Cream Cake";
  src: url("../assets/fonts/Cream_Cake.otf");
}

:root {
  --Light-Color: #58445B;
  --Dark-Color: #FFF;
  --Bold-Color: #4587A8;
  --Placeholde: rgba(117, 112, 149, 0.5);
  --Main-Font: "Manrope", Arial, sans-serif;
  --Second-Front: "Avenir", Arial, sans-serif;
}

body {
  font-family: var(--Main-Font);
  margin:0;
  padding:0;
  line-height: 1.5px;
  font-size: 16px;
}

.layout {
  max-width: 100vw;
  margin: 0 auto;
  /* padding-left: 1.25em;
  padding-right: 1.25em; */
}

.header {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2.625em 7.563em;
}

.nav__link {
  margin-left: 1.25em;
}

.siteName {
  color: #58445B;
  text-decoration: none;
  font-family: var(--Main-Font);
  font-style: normal;
  font-weight: 600;
  font-size: 1.25em;
  line-height: 1.688em;
  text-transform: uppercase;
}
</style>

<style>
@media screen and (min-width: 1051px) and (max-width: 1160px) {
  body { font-size: 14px }
}

@media screen and (min-width: 901px) and (max-width: 1050px) {
  body { font-size: 12px }
}

@media screen and (min-width: 801px) and (max-width: 900px) {
  body { font-size: 10px }
}

@media screen and (min-width: 768px) and (max-width: 800px) {
  body { font-size: 8px }
}

@media screen and (max-width: 767px) {
  body { font-size: 8px }
}
</style>
