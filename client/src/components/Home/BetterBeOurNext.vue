<template>
    <div class="Ellipse_67">
        <p class="BETTER">BETTER</p>
        <p class="BE">BE</p>
        <p class="OUR">OUR</p>
        <p class="NEXT">NEXT</p>
    </div>
</template>

<style>
  .Ellipse_67 {
    position: absolute;
    width: 266px;
    height: 450px;
    right: 20%;
    border-radius: 50%;

    margin: 0px;
    background: rgba(118, 208, 207, 0.8);
    transform: rotate(-25deg);
  }
  .BETTER {
    position: absolute;
    left: 20%;
    top: 5%;
    font-family: 'Paytone One';
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    line-height: 70px;
    display: flex;
    align-items: center;

    color: #FFFFFF;

    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    transform: rotate(25deg);
  }
  .BE {
    position: absolute;
    left: 23%;
    top: 18%;
    font-family: 'Paytone One';
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    line-height: 70px;
    display: flex;
    align-items: center;

    color: #FFFFFF;

    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    transform: rotate(25deg);
  }
  .OUR {
    position: absolute;
    left: 23%;
    top: 38%;
    font-family: 'Paytone One';
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    line-height: 70px;
    display: flex;
    align-items: center;

    color: #FFFFFF;

    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    transform: rotate(25deg);
  }
  .NEXT {
    position: absolute;
    left: 25%;
    top: 58%;
    font-family: 'Paytone One';
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    line-height: 70px;
    /* identical to box height */
    display: flex;
    align-items: center;

    color: #215C6A;

    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    transform: rotate(25deg);
  }
  @media (max-width: 575.98px) {
    .Ellipse_67 {
      display: none;
    }
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    .Ellipse_67 {
      left: 0px;
      right: 0px;
      top: 750px;

      margin-left: auto;
      margin-right: auto;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    .Ellipse_67 {
      right: 10%;
    }
  }
  @media (min-width: 992px) and (max-width: 1199.98px) {
    .Ellipse_67 {
      right: 15%;
    }
  }
</style>
