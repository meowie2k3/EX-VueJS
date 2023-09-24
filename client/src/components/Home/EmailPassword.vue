<template>
  <div class="Home_Body">
    <div v-if="showRegisterHome">
        <Register :showRegister="showRegisterHome" @register-sent="toggleRegister"></Register>
    </div>
    <p class="Welcome">Welcome!<br>Let’s join us</p>
    <div class="Email">
        <p class="Email_Password_Text">Email address</p>
        <input class="Email_Password_Box" type="email" name="email" v-model="email" />
    </div>
    <div class="Password">
        <p class="Email_Password_Text">Password</p>
        <input class="Email_Password_Box" :type="showPassword ? 'text' : 'password'" name="password" v-model="password" />
        <div class="Show">
          <i :class="showPassword ? 'fa-sharp fa-regular fa-eye' : 'fa-sharp fa-regular fa-eye-slash'" @click="togglePasswordVisibility"></i>
        </div>
    </div>
    <p class="Forgot">Forgot your password?</p>
    <div class="Error" v-html="message"></div>
    <div class="SignIn" @click="login">
        <p class="SignIn_Body">Log in</p>
    </div>
    <div class="Or">
        <div class="line1"></div>
        <p class="orText">or</p>
        <div class="line2"></div>
    </div>
    <div class="FB_Box">
        <img src="../../assets/Home/facebook-emblem.jpg" alt="LogoFB" class="FBIcon" />
        <p class="FBText">Continue with Facebook</p>
    </div>
    <div class="GG_Box">
        <img src="../../assets/Home/GOOG-0ed88f7c.png" alt="LogoGG" class="GGIcon" />
        <p class="GGText">Continue with Google</p>
    </div>
    <!-- <router-link class="FirstBox" to="/register">
      <p class="FirstText">First time? Join now</p>
    </router-link> -->
    <div class="FirstBox" @click="toggleRegister">
      <p class="FirstText">First time? Join now</p>
    </div>
  </div>
</template>

<script>
import AuthService from '@/services/AuthService'
import Register from '../Register.vue'
import Vue from 'vue'
export default {
  name: 'Home',
  data () {
    return {
      email: '',
      password: '',
      message: null,
      showPassword: false,
      showRegisterHome: false
    }
  },
  components: {
    Register
  },
  watch: {
    $route () {
      Vue.set(this.$data, 'message', '')
    }
  },
  methods: {
    toggleRegister () {
      this.showRegisterHome = !this.showRegisterHome
    },
    togglePasswordVisibility () {
      this.showPassword = !this.showPassword
    },
    async login () {
      try {
        const response = await AuthService.login({
          email: this.email,
          password: this.password
        })
        // console.log(response)
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        setTimeout(() => {
          this.$router.push('/newsfeed')
        }, 1000)
      } catch (error) {
        let response = 'Response ' + error.response.status + ': ' + error.response.data.error
        Vue.set(this.$data, 'message', response)
        // console.log(error)
      }
    }
  }
}
</script>

<style>
  .Home_Body {
    position: absolute;
    max-width: 360px;
    width: 100%;
    height: 700px;
    left: 20%;
  }
  .Welcome {
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400px;
    font-size: 50px;

    margin: 0px;
    text-align: left;

    color: #323131;
  }
  .Email {
    position: absolute;
    max-width: 360px;
    width: 100%;
    height: 80px;
    top: 150px;
  }
  .Email_Password_Text {
    position: absolute;
    left: 0%;
    top: 0%;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;

    margin: 0px;

    color: #323131;
  }
  .Email_Password_Box {
    box-sizing: border-box;

    position: absolute;
    max-width: 360px;
    width: 100%;
    height: 50px;
    left: 0%;
    top: 25px;

    background: #FFFFFF;
    border: 1px solid #323131;
    border-radius: 5px;
  }
  .Password {
    position: absolute;
    max-width: 360px;
    width: 100%;
    height: 80px;
    top: 245px;
  }
  .Show {
    position: absolute;
    right: 5%;
    top: 52.5%;

    background: #FFFFFF;
  }
  .Error {
    position: absolute;
    top: 330px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;

    margin: 0px;

    color: red;
  }
  .Forgot {
    position: absolute;
    top: 360px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    text-decoration-line: underline;

    margin: 0px;

    color: #76D0CF;
  }
  .SignIn {
    position: absolute;
    max-width: 360px;
    width: 100%;
    height: 52.4px;
    top: 400px;

    background: rgba(118, 208, 207, 0.8);
    border-radius: 40px;
  }
  .SignIn_Body {
    position: absolute;
    max-width: 360px;
    width: 100%;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;

    padding: 15px 0px;
    margin: 0px;
    cursor: pointer;

    color: #ffffff;
  }
  .SignIn:hover .SignIn_Body{
    background: rgba(66, 214, 212, 0.8);
    border-radius: 40px;
    color: #323131;
  }
  .Or {
    position: absolute;
    max-width: 360px;
    width: 100%;
    height: 17.6px;
    top: 465px;
  }
  .line1 {
    position: absolute;
    width: 165px;
    left: 0%;
    top: 10px;

    border: 0.5px solid #000000;
  }
  .line2 {
    position: absolute;
    width: 165px;
    right: 0%;
    top: 10px;

    border: 0.5px solid #000000;
  }
  .orText {
    position: absolute;
    left: 48%;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;

    margin: 0px;

    color: #323131;
  }
  .FB_Box {
    position: absolute;
    max-width: 360px;
    width: 100%;
    height: 52.4px;
    top: 500px;

    background: #3C5A9A;
    border-radius: 40px;
  }
  .FBIcon {
    position: absolute;
    height: 30px;
    left: 6%;
    top: 20%;
  }
  .FBText {
    position: absolute;
    left: 20%;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    text-align: left;

    padding: 15px 0px;
    margin: 0px;

    color: #ffffff;
  }
  .GG_Box {
    position: absolute;
    max-width: 360px;
    width: 100%;
    height: 52.4px;
    top: 570px;

    background: #FFFFFF;
    border: 1px solid #323131;
    border-radius: 40px;
  }
  .GGIcon {
    position: absolute;
    height: 30px;
    left: 7%;
    top: 20%;
  }
  .GGText {
    position: absolute;
    left: 20%;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    text-align: left;

    padding: 15px 0px;
    margin: 0px;

    color: #323131;
  }
  .FirstBox {
    position: absolute;
    max-width: 360px;
    width: 100%;
    height: 52.4px;
    top: 640px;
    left: 0px;

    cursor: pointer;
    background: #FFFFFF;
    border: 1px solid #323131;
    border-radius: 40px;
  }
  .FirstText {
    position: absolute;
    max-width: 360px;
    width: 100%;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;

    padding: 15px 0px;
    margin: 0px;

    color: #323131;
  }
  .FirstBox:hover {
    background: #E5E5E5;
  }
  @media (max-width: 575.98px) {
    .Home_Body {
      left: 0px;
      right: 0px;
      width: 100%;

      margin-left: auto;
      margin-right: auto;
    }
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    .Home_Body {
      left: 0px;
      right: 0px;

      margin-left: auto;
      margin-right: auto;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    .Home_Body {
      left: 5%;
    }
  }
  @media (min-width: 992px) and (max-width: 1199.98px) {
    .Home_Body {
      left: 10%;
    }
  }
</style>
