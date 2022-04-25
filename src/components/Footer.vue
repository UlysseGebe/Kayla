
<template>
  <footer>
    <g-link to="/" class="siteName">{{ $static.metadata.siteName }}</g-link>
    <div class="socials-links">
      <a href="#" target="_blank">
        <img src="../assets/images/linkedin.svg" alt="" width="20" height="20">
      </a>
      <a href="#" target="_blank">
        <img src="../assets/images/messenger.svg" alt="" width="20" height="20">
      </a>
      <a href="#" target="_blank">
        <img src="../assets/images/twitter.svg" alt="" width="20" height="20">
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
  padding: 70px 121px;
}

.socials-links a:nth-child(2) {
  margin: 0 16px;
}
</style>
