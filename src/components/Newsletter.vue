<template>
  <div class="newsletter">
    <h2>Gardons contact</h2>
    <iframe class="mj-w-res-iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://app.mailjet.com/widget/iframe/7RfE/MVQ" width="100%"></iframe>
  </div>
</template>

<script>
export default {
    name: "Newsletter",
    beforeMount () {
      let externalScript = document.createElement('script')
      externalScript.setAttribute('src', 'https://app.mailjet.com/statics/js/iframeResizer.min.js')
      document.head.appendChild(externalScript)
    },
}
</script>

<style>
.newsletter {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("../assets/images/Contact.svg");
  background-size: 75%;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 28.125em;
}

.newsletter h2 {
  font-family: "Avenir", Arial, sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 3.75em;
  display: flex;
  align-items: center;
  letter-spacing: -0.03em;
  color: #58445B;
}

.newsletter iframe {
  margin-top: 2.188em;
  margin-bottom: 5em;
}
</style>
