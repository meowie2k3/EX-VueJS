<template>
    <div>
        <Header></Header>
        <div class="HomeB">
            <EmailPassword></EmailPassword>
            <BetterBeOurNext></BetterBeOurNext>
        </div>
        <Footer class="HomeC"></Footer>
    </div>
    <!-- v-model: bind input data to variables -->
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

<style>
  .HomeB {
    z-index: 1;
    position: absolute;
    top: 140px;
    left: 0px;
    right: 0px;
    width: 100%;
    height: 700px;

    margin-left: auto;
    margin-right: auto;
  }
  .HomeC {
    z-index: 0;
  }
  @media (min-width: 1400px) {
    .HomeB {
      width: 1400px;
    }
  }
</style>
