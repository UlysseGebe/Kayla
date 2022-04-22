<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
      </nav>
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
  line-height: 1.5;
}

.layout {
  max-width: 100vw;
  margin: 0 auto;
  /* padding-left: 20px;
  padding-right: 20px; */
}

.header {
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
