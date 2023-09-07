<template>
  <div>
    <p class="Welcome">Welcome! Let’s join us</p>
    <div class="Email">
        <p class="Email_address">Email address</p>
        <input class="Email_box" type="email" name="email" v-model="email" />
    </div>
    <div class="Password">
        <p class="Password_text">Password</p>
        <input class="Password_box" :type="showPassword ? 'text' : 'password'" name="password" v-model="password" />
        <div class="Show">
          <i :class="showPassword ? 'fa-sharp fa-regular fa-eye' : 'fa-sharp fa-regular fa-eye-slash'" @click="togglePasswordVisibility"></i>
        </div>
    </div>
    <p class="Forgot">Forgot your password?</p>
    <div class="error" v-html="message"></div>
    <div class="SignIn" @click="login">
        <div class="Rectangle_1">
            <p class="SignInText2">Sign in</p>
        </div>
    </div>
    <div class="or">
        <div class="line1"></div>
        <p class="orText">or</p>
        <div class="line2"></div>
    </div>
    <div class="FB">
        <div class="Rectangle_2">
            <div class="FBIcon">
              <i class="fa-brands fa-facebook-f fa-xl" style="color: #3C5A9A; position: absolute; right: 15%; bottom: 35%;"></i>
            </div>
            <p class="FBText">Continue with Facebook</p>
        </div>
    </div>
    <div class="GG">
        <div class="Rectangle_3">
            <img src="../../assets/Home/GOOG-0ed88f7c.png" alt="LogoGG" class="GGIcon" />
            <p class="GGText">Continue with Google</p>
        </div>
    </div>
    <router-link class="First" to="/register">
        <div class="Rectangle_4">
            <p class="FirstText">First time? Join now</p>
        </div>
    </router-link>
  </div>
</template>

<script>
import AuthService from '@/services/AuthService'
import Vue from 'vue'
export default {
  name: 'Home',
  data () {
    return {
      email: '',
      password: '',
      message: null,
      showPassword: false
    }
  },
  watch: {
    $route () {
      Vue.set(this.$data, 'message', '')
    }
  },
  methods: {
    togglePasswordVisibility () {
      this.showPassword = !this.showPassword
    },
    async login () {
      try {
        await AuthService.login({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        Vue.set(this.$data, 'message', error.response.data)
        // console.log(error.response.data)
      }
    }
  }
}
</script>

<style>
  .Welcome {
    position: absolute;
    left: 15%;
    top: 15%;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    line-height: 62px;
    display: flex;
    align-items: center;

    color: #323131;
  }
  .Forgot {
    position: absolute;
    left: 15%;
    top: 65%;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    /* identical to box height */
    display: flex;
    align-items: center;
    text-decoration-line: underline;

    color: #76D0CF;
  }
  .Email {
    position: absolute;
    width: 390px;
    height: 78px;
    left: 15%;
    top: 35%;
  }
  .Email_address {
    position: absolute;
    left: 0%;
    top: 0%;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 19px;
    /* identical to box height */
    display: flex;
    align-items: center;

    color: #323131;
  }
  .Email_box {
    box-sizing: border-box;

    position: absolute;
    width: 390px;
    height: 52px;
    left: 0%;
    top: 55%;

    background: #FFFFFF;
    border: 1px solid #323131;
    border-radius: 5px;
  }
  .Password {
    position: absolute;
    width: 390px;
    height: 77px;
    left: 15%;
    top: 50%;
  }
  .Password_text {
    position: absolute;
    left: 0%;
    top: 0%;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 19px;
    /* identical to box height */
    display: flex;
    align-items: center;

    color: #323131;
  }
  .Password_box {
    box-sizing: border-box;

    position: absolute;
    width: 390px;
    height: 52px;
    left: 0%;
    top: 55%;

    background: #FFFFFF;
    border: 1px solid #323131;
    border-radius: 5px;
  }
  .Show {
    position: absolute;
    width: 50px;
    height: 20px;
    right: 2%;
    top: 75%;

    background: #FFFFFF;
    border-radius: 5px;
  }
  .Rectangle_1 {
    position: absolute;
    width: 390px;
    height: 55px;
    left: 15%;
    top: 73%;
    cursor: pointer;
    background: rgba(118, 208, 207, 0.8);
    border-radius: 40px;
  }
  .SignInText2 {
    position: absolute;
    left: 43%;
    top: -10%;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #ffffff;
  }
  .SignIn:hover .Rectangle_1,
  .SignIn:hover .SignInText2
  {
    background: rgba(66, 214, 212, 0.8);
    color: #323131;
  }
  .error {
    position: absolute;
    left: 15%;
    top: 63%;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 25px;
    /* identical to box height */
    display: flex;
    align-items: center;

    color: #f84c4c;
  }
  .or {
    position: absolute;
    width: 390px;
    height: 19px;
    left: 15%;
    top: 83%;
  }
  .line1 {
    position: absolute;
    width: 174.25px;
    height: 0.5px;
    left: 0%;
    top: 0%;

    border: 0.5px solid #000000;
  }
  .line2 {
    position: absolute;
    width: 184px;
    height: 0px;
    right: 0%;
    top: 0%;

    border: 0.5px solid #000000;
  }
  .orText {
    position: absolute;
    width: 18.6px;
    height: 19px;
    left: 47%;
    bottom: -25%;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 19px;
    /* identical to box height */
    display: flex;
    align-items: center;

    color: #323131;
  }
  .Rectangle_2 {
    position: absolute;
    width: 390px;
    height: 55px;
    left: 15%;
    top: 86%;

    background: #3C5A9A;
    border-radius: 40px;
  }
  .FBIcon {
    position: absolute;
    width: 30px;
    height: 30px;
    left: 7%;
    top: 20%;

    background: #ffffff;
    border-radius: 3px;
  }
  .FBText {
    position: absolute;
    left: 20%;
    top: -10%;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #ffffff;
  }
  .Rectangle_3 {
    position: absolute;
    width: 390px;
    height: 55px;
    left: 15%;
    top: 96%;

    background: #FFFFFF;
    border: 1px solid #323131;
    border-radius: 40px;
  }
  .GGIcon {
    position: absolute;
    width: 30px;
    height: 30px;
    left: 7%;
    top: 20%;

    background: #ffffff;
    border-radius: 3px;
  }
  .GGText {
    position: absolute;
    left: 20%;
    top: -10%;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #323131;
  }
  .Rectangle_4 {
    position: absolute;
    width: 390px;
    height: 55px;
    left: 15%;
    top: 106%;

    background: #FFFFFF;
    border: 1px solid #323131;
    border-radius: 40px;
  }
  .FirstText {
    position: absolute;
    left: 27%;
    top: -10%;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #323131;
  }
  .Rectangle_4:hover {
    background: #E5E5E5;
  }
</style>
