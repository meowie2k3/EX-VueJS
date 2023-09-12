<template>
    <div class="Register_Box" v-if="showRegister">
      <p class="Create_Register">Create a free account to save your preferences</p>
      <div class="Name">
        <p class="Email_Password_Text">Full name</p>
        <input class="Email_Password_Box" type="name" name="name" v-model="name" />
      </div>
      <div class="Role">
        <p class="Email_Password_Text">Role</p>
        <input class="Email_Password_Box" type="role" name="role" v-model="role" />
      </div>
      <div class="Email_Register">
        <p class="Email_Password_Text">Email address</p>
        <input class="Email_Password_Box" type="email" name="email" v-model="email" />
      </div>
      <div class="Password_Register">
        <p class="Email_Password_Text">Password</p>
        <input class="Email_Password_Box" :type="showPassword ? 'text' : 'password'" name="password" v-model="password" />
        <div class="Show">
          <i :class="showPassword ? 'fa-sharp fa-regular fa-eye' : 'fa-sharp fa-regular fa-eye-slash'" @click="togglePasswordVisibility"></i>
        </div>
      </div>
      <div class="error" v-html="message"></div>
      <div class="Or Or_Register">
          <div class="line1"></div>
          <p class="orText">or</p>
          <div class="line2"></div>
      </div>
      <div class="FB_Box FB_Box_Register">
          <img src="../assets/Home/facebook-emblem.jpg" alt="LogoFB" class="FBIcon" />
          <p class="FBText">Continue with Facebook</p>
      </div>
      <div class="GG_Box GG_Box_Register">
          <img src="../assets/Home/GOOG-0ed88f7c.png" alt="LogoGG" class="GGIcon" />
          <p class="GGText">Continue with Google</p>
      </div>
      <p class="By_clicking">By clicking Continue, you agree to our <span class="highlighted">Terms</span> and acknowledge that you have read our <span class="highlighted">Privacy Policy</span>, which explains how to opt out of offers and promos.</p>
      <div class="SignIn Agree_Register" @click="register">
        <p class="SignIn_Body">Agree & Join</p>
      </div>
      <p class="Already" >Already have an account? <span class="highlighted" @click="Return_Home" style="cursor: pointer;">Sign in</span></p>
      <!-- <h1>Register</h1>
        <input type="name" name="name" v-model="name" placeholder="Name" />
        <br>
        <input type="role" name="role" v-model="role" placeholder="Role" />
        <br>
        <input type="email" name="email" v-model="email" placeholder="Email" />
        <br>
        <input type="password" name="password" v-model="password" placeholder="Password" />
        <br>
        <button @click="register">
            Register
        </button>
        <br>
        <div class="error" v-html="message"></div>
        <br>
        <router-link to="/">
            Already have an account? Login
        </router-link> -->
    </div>
    <!-- v-model: bind input data to variables -->
</template>

<script>
import AuthService from '@/services/AuthService'
import Vue from 'vue'
export default {
  name: 'Register',
  props: {
    showRegister: Boolean
  },
  data () {
    return {
      name: '',
      role: '',
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
    Return_Home () {
      this.showRegister = false
      this.$emit('register-sent')
    },
    async register () {
      // console.log('register', this.Email, this.Password)
      try {
        await AuthService.register({
          name: this.name,
          role: this.role,
          email: this.email,
          password: this.password
        })
        Vue.set(this.$data, 'message', 'Registration successful. Redirecting to home page.')
        setTimeout(() => {
          this.$router.push('/')
        }, 2000)
      } catch (error) {
        Vue.set(this.$data, 'message', error.response.data)
        // console.log(error.response.data)
      }
    }
  }
}
</script>

<style>
  .Register_Box {
    z-index: 1;
    position: absolute;
    width: 462px;
    height: 860px;
    left: 190px;
    top: -40px;

    background: #ffffff;
    border: 3px solid #76D0CF;
    border-radius: 10px;
  }
  .Create_Register {
    position: absolute;
    left: 0px;
    top: 31px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    text-align: center;

    margin: 0px 30px;
    color: #323131;
  }
  .Name {
    position: absolute;
    width: 360px;
    height: 78px;
    left: 51px;
    top: 132px;
  }
  .Role {
    position: absolute;
    width: 360px;
    height: 78px;
    left: 51px;
    top: 221px;
  }
  .Email_Register {
    position: absolute;
    width: 360px;
    height: 78px;
    left: 51px;
    top: 310px;
  }
  .Password_Register {
    position: absolute;
    width: 360px;
    height: 78px;
    left: 51px;
    top: 399px;
  }
  .error {
    position: absolute;
    width: 462px;
    top: 490px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    text-align: center;

    margin: 0px;
    color: red;
  }
  .Or_Register {
    position: absolute;
    left: 51px;
    top: 510px;
  }
  .FB_Box_Register {
    position: absolute;
    left: 51px;
    top: 545px;
  }
  .GG_Box_Register {
    position: absolute;
    left: 51px;
    top: 620px;
  }
  .By_clicking {
    position: absolute;
    height: 69px;
    top: 690px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    text-align: center;

    margin: 0px 30px;
    color: #323131;
  }
  .highlighted {
    font-weight: bold;
    text-decoration: underline;
  }
  .Agree_Register {
    position: absolute;
    left: 51px;
    top: 770px;
  }
  .Already {
    position: absolute;
    width: 462px;
    top: 830px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 200;
    font-size: 15px;
    text-align: center;

    margin: 0px;
    color: #323131;
  }
  @media (max-width: 575.98px) {
    .Register_Box {
      left: -50px;
    }
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    .Register_Box {
      left: -50px;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    .Register_Box {
      left: 110px;
    }
  }
  @media (min-width: 992px) and (max-width: 1199.98px) {
    .Register_Box {
      left: 180px;
    }
  }
</style>
