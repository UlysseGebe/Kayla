<template>
  <div class="newsletter">
    <h2>Gardons contact</h2>
    <iframe class="mj-w-res-iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://app.mailjet.com/widget/iframe/7RfE/MUX" width="100%"></iframe>
    <!-- <form action="https://api.mailjet.com/v3/REST/contactslist/15489/managecontact" method="POST">
      <input type="hidden" name="Action" value="addnoforce">
      <input type="email" name="email" id="email" placeholder="sandra.rousseau@laposte.fr">
      <input type="submit" value="Envoyer">
    </form> -->
  </div>
</template>

<script>
import axios from 'axios';
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
  min-height: 450px;
}

.newsletter h2 {
  font-family: "Avenir", Arial, sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 60px;
  display: flex;
  align-items: center;
  letter-spacing: -0.03em;
  color: #58445B;
}

.newsletter iframe {
  margin-top: 35px;
  margin-bottom: 80px;
}

.newsletter input[type="email"] {
  border: none;
  width: 460px;
  height: 57px;
  background: #FFFFFF;
  box-shadow: 0px 4px 36px rgba(0, 0, 0, 0.09);
  border-radius: 20px;
  font-weight: 500;
  font-size: 20px;
  line-height: 35px;
  letter-spacing: -0.02em;
  padding-left: 27px;
  padding-right: 27px;
}

.newsletter input[type="submit"] {
  border: none;
  width: 176px;
  height: 57px;
  color: #FFF;
  background: #5A475D;
  border-radius: 20px;
  margin-left: 18px;
  cursor: pointer;
}

.newsletter ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: rgba(117, 112, 149, 0.5);
}
</style>
