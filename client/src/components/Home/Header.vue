<template>
    <div class="Rectangle">
        <img src="../../assets/Home/Logo EX.png" alt="Logo" class="LogoEX" />
        <div class="Container_1">
            <div class="Group_1">
                <p class="SignInText">Sign in</p>
            </div>
        </div>
        <div class="Container_2">
            <div class="Group_2">
                <p class="JoinNowText">Join now</p>
            </div>
        </div>
    </div>
</template>

<style>
  .Rectangle {
    position: absolute;
    width: 100%;
    height: 124px;
    left: 0px;
    top: -32px;

    background: rgba(118, 208, 207, 0.3);
  }
  .LogoEX {
    position: absolute;
    left: 10%;
    top: 30%;
  }
  .Group_1 {
    box-sizing: border-box;

    position: absolute;
    width: 120px;
    height: 40.87px;
    right: 25%;
    top: 45%;
    cursor: pointer;
    background: #FFFFFF;
    border: 1px solid #76D0CF;
    border-radius: 20px;
  }
  .SignInText {
    position: absolute;
    left: 25%;
    bottom: -35%;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #76D0CF;
  }
  .Container_1:hover .Group_1,
  .Container_1:hover .SignInText
  {
    background: #E5E5E5;
    border: 1px solid #E5E5E5;
    color: #323131;
  }
  .Group_2 {
    position: absolute;
    width: 140px;
    height: 40.87px;
    right: 13%;
    top: 45%;
    cursor: pointer;
    background: #FFFFFF;
    border: 1px solid #76D0CF;
    border-radius: 20px;
  }
  .JoinNowText {
    position: absolute;
    left: 25%;
    bottom: -35%;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #76D0CF;
  }
  .Container_2:hover .Group_2,
  .Container_2:hover .JoinNowText
  {
    background: #E5E5E5;
    border: 1px solid #E5E5E5;
    color: #323131;
  }
</style>
