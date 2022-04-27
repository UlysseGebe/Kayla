
<template>
  <footer>
    <g-link to="/" class="siteName">{{ $static.metadata.siteName }}</g-link>
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
  </footer>
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
    name: "Footer"
}
</script>

<style>
footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 4.375em 7.563em;
}

.socials-links a:nth-child(2) {
  margin: 0 1em;
}
</style>
