<template>
  <div class="Home_BG_Header">
    <div class="Home_Header">
        <img src="../../assets/Home/Logo EX.png" alt="Logo" class="LogoEX" />
        <div class="SignInAndJoinNow">
          <p class="SignIn_Header">Log in</p>
          <p class="SignUp_Header">Join now</p>
        </div>
    </div>
  </div>
</template>

<style>
  .Home_BG_Header {
    z-index: 0;
    position: absolute;
    height: 90px;
    left: 0px;
    right: 0px;
    top: 0px;
    width: 100%;

    background: rgba(118, 208, 207, 0.3);
  }
  .Home_Header {
    position: absolute;
    height: 90px;
    left: 0px;
    right: 0px;
    top: 0px;
    width: 100%;

    margin-left: auto;
    margin-right: auto;
  }
  .LogoEX {
    position: absolute;
    top: 10%;
    left: 10%;
  }
  .SignInAndJoinNow {
    position: absolute;
    top: 5%;
    width: 230px;
    right: 10%;
  }
  .SignIn_Header {
    position: absolute;
    left: 0%;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;

    padding: 10px 20px;
    cursor: pointer;
    background: #FFFFFF;
    border: 1px solid #76D0CF;
    border-radius: 20px;

    color: #76D0CF;
  }
  .SignIn_Header:hover {
    background: #E5E5E5;
    border: 1px solid #E5E5E5;
    color: #323131;
  }
  .SignUp_Header {
    position: absolute;
    right: 0%;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;

    padding: 10px 20px;
    cursor: pointer;
    background: #FFFFFF;
    border: 1px solid #76D0CF;
    border-radius: 20px;

    color: #76D0CF;
  }
  .SignUp_Header:hover {
    background: #E5E5E5;
    border: 1px solid #E5E5E5;
    color: #323131;
  }
  @media (max-width: 350px) {
    .LogoEX {
      left: 5%;
    }
    .SignInAndJoinNow {
      right: 5%;
      top: 10%;
      width: 190px;
    }
    .SignIn_Header {
      font-size: 15px;
    }
    .SignUp_Header {
      font-size: 15px;
    }
  }
  @media (max-width: 767.98px) {
    .LogoEX {
      left: 5%;
    }
    .SignInAndJoinNow {
      right: 5%;
    }
  }
  @media (min-width: 1400px) {
    .Home_Header {
      width: 1400px;
    }
    .LogoEX {
      left: 15%;
    }
    .SignInAndJoinNow {
      right: 15%;
    }
  }
</style>
