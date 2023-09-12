<template>
  <div class="Home_BG_Footer">
    <div class="Home_Footer">
        <img src="../../assets/Home/Logo EX.png" alt="Logo" class="LogoEX_Footer" />
        <div class="General">
            <p class="GeneralText">General</p>
            <p class="SubGeneralText">Sign Up</p>
            <p class="SubGeneralText">Help Center</p>
            <p class="SubGeneralText">About</p>
            <p class="SubGeneralText">Press</p>
            <p class="SubGeneralText">Blog</p>
            <p class="SubGeneralText">Careers</p>
            <p class="SubGeneralText">Developers</p>
        </div>
        <div class="Browse_Ex">
            <p class="GeneralText">Browse Ex</p>
            <p class="SubGeneralText">Learning</p>
            <p class="SubGeneralText">Jobs</p>
            <p class="SubGeneralText">Salary</p>
            <p class="SubGeneralText">Mobile</p>
            <p class="SubGeneralText">Services</p>
            <p class="SubGeneralText">Products</p>
        </div>
        <div class="Business">
            <p class="GeneralText">Business Solutions</p>
            <p class="SubGeneralText">Talent</p>
            <p class="SubGeneralText">Marketing</p>
            <p class="SubGeneralText">Sales</p>
            <p class="SubGeneralText">Learning</p>
        </div>
        <div class="Directories">
            <p class="GeneralText">Directories</p>
            <p class="SubGeneralText">Members</p>
            <p class="SubGeneralText">Jobs</p>
            <p class="SubGeneralText">Companies</p>
            <p class="SubGeneralText">Featured</p>
            <p class="SubGeneralText">Learning</p>
            <p class="SubGeneralText">Posts</p>
            <p class="SubGeneralText">Articles</p>
            <p class="SubGeneralText">Schools</p>
            <p class="SubGeneralText">News</p>
            <p class="SubGeneralText">News Letters</p>
            <p class="SubGeneralText">Services</p>
            <p class="SubGeneralText">Products</p>
            <p class="SubGeneralText">Advice</p>
            <p class="SubGeneralText">People Search</p>
        </div>
        <p class="Copyright">Copyright © 2023 Ex. All rights reserved</p>
    </div>
  </div>
</template>

<style>
  .Home_BG_Footer {
    z-index: 0;
    position: absolute;
    height: 480px;
    left: 0px;
    right: 0px;
    top: 880px;
    width: 100%;

    background: rgba(118, 208, 207, 0.3);
  }
  .Home_Footer {
    position: absolute;
    height: 480px;
    left: 0px;
    right: 0px;
    top: 0px;
    width: 100%;

    margin-left: auto;
    margin-right: auto;
  }
  .LogoEX_Footer {
    position: absolute;
    left: 10%;
    top: 5%;
  }
  .GeneralText {
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    text-align: left;
    margin: 10px 0px;

    color: #323131;
  }
  .SubGeneralText {
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    text-align: left;
    margin: 5px 0px;

    color: #595959;
  }
  .General {
    position: absolute;
    left: 25%;
    top: 5%;
  }
  .Browse_Ex {
    position: absolute;
    left: 43%;
    top: 5%;
  }
  .Business {
    position: absolute;
    left: 60%;
    top: 5%;
  }
  .Directories {
    position: absolute;
    left: 80%;
    top: 5%;
  }
  .Copyright {
    position: absolute;
    bottom: 0%;
    width: 100%;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    text-align: center;

    margin: 15px 0px;
    color: #323131;
  }
  @media (max-width: 575.98px) {
    .Home_BG_Footer {
      top: 880px;
      height: 1020px;
    }
    .Home_Footer {
      height: 1020px;
    }
    .LogoEX_Footer {
      left: 5%;
      top: 2%;
    }
    .General {
      left: 30%;
      top: 20px;
    }
    .Browse_Ex {
      left: 30%;
      top: 240px;
    }
    .Business {
      left: 30%;
      top: 430px;
    }
    .Directories {
      left: 30%;
      top: 570px;
    }
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    .Home_BG_Footer {
      top: 1400px;
    }
    .LogoEX_Footer {
      left: 3%;
    }
    .General {
      left: 23%;
    }
    .Browse_Ex {
      left: 47%;
    }
    .Business {
      left: 47%;
      top: 50%;
    }
    .Directories {
      right: 0%;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    .LogoEX_Footer {
      left: 5%;
    }
    .General {
      left: 20%;
    }
    .Browse_Ex {
      left: 39%;
    }
    .Business {
      left: 57%;
    }
    .Directories {
      left: 82%;
    }
  }
  @media (min-width: 992px) and (max-width: 1199.98px) {
    .LogoEX_Footer {
      left: 8%;
    }
    .Directories {
      left: 82%;
    }
  }
  @media (min-width: 1400px) {
    .Home_Footer {
      width: 1400px;
    }
  }
</style>
