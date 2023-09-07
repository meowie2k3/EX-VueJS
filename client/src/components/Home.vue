<template>
    <div>
        <Header></Header>
        <BetterBeOurNext></BetterBeOurNext>
        <EmailPassword></EmailPassword>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from './Home/Header.vue'
import EmailPassword from './Home/EmailPassword.vue'
import BetterBeOurNext from './Home/BetterBeOurNext.vue'
import Footer from './Home/Footer.vue'
export default {
  components: {
    Header,
    BetterBeOurNext,
    EmailPassword,
    Footer
  }
}
</script>
