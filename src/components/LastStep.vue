<template>
  <div class="last-step-container">
    <div class="last-step-container__header-border-container">
      <header class="last-step-container__header">
        <div class="last-step-container__logo-container" @click="navigateToStepOne">
          <img class="last-step-container__logo" src="../assets/airbnb.svg" alt />
        </div>
        <p class="last-step-container__header-title">Submission</p>
      </header>
      <div class="last-step-container__header-border">
        <div class="last-step-container__header-border-div-one"></div>
        <div class="last-step-container__header-border-div-two"></div>
        <div class="last-step-container__header-border-div-three"></div>
        <div class="last-step-container__header-border-div-four"></div>
      </div>
    </div>
    <div class="last-step-container__two-column-container">
      <div class="last-step-container__form-container">
        <p
          class="last-step-container__get-started"
        >Hi once again, Placide! You've come to the end of hosting your space.</p>
        <p class="last-step-container__step-one">Last Step</p>
        <p class="last-step-container__place-kind">Review your info.</p>
        <button class="last-step-container__continue-btn" @click="handleSubmit">Submit</button>
      </div>
      <div class="last-step-container__image-container">
        <img class="last-step-container__image" src="../assets/image-1.png" alt srcset />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'LastStep',
  computed: {
    ...mapGetters([
      'landingInfo',
      'propertyAndGuestInfo',
      'locationInfo',
      'amenityInfo'
    ])
  },
  methods: {
    navigateToStepOne() {
      this.$router.push({ name: 'step-one' });
    },
    handleSubmit() {
      console.log('Landing Info: ', this.landingInfo);
      console.log('Property And Guest Info: ', this.propertyAndGuestInfo);
      console.log('Location Info: ', this.locationInfo);
      console.log('Amenity Info: ', this.amenityInfo);
    }
  }
};
</script>

<style lang="scss" scoped>
.last-step-container {
  display: flex;
  justify-content: center;

  &__header-border-container {
    position: fixed;
    width: 100%;
    background: #fff;
  }

  &__header {
    display: flex;
    width: 100%;
    height: 6vh;
  }

  &__logo-container {
    margin-top: 0.8rem;
    margin-left: 1rem;
    width: 3%;
    cursor: pointer;
  }

  &__logo {
    color: rgb(0, 132, 137);
    width: 70%;
    height: 3.3vh;
    cursor: pointer;
  }

  &__header-title {
    font-size: 1.1rem;
    line-height: 1.2;
    color: #484848;
  }

  &__header-border {
    display: flex;
    width: 100%;
    height: 0.9vh;
    background: #edefed;
  }

  &__header-border-div-one,
  &__header-border-div-two,
  &__header-border-div-three,
  &__header-border-div-four {
    border-right: solid #c7c7d1 2px;
    flex-basis: 50%;
  }

  &__header-border-div-one,
  &__header-border-div-two,
  &__header-border-div-three,
  &__header-border-div-four {
    background: rgb(0, 132, 137);
  }

  &__two-column-container {
    display: flex;
    margin-top: 6%;
  }

  &__get-started {
    color: #484848;
    font-size: 2rem;
    margin-left: 10rem;
  }

  &__step-one {
    color: #484848;
    text-transform: uppercase;
    font-size: 1rem;
    margin-left: 10rem;
  }

  &__place-kind {
    color: #484848;
    font-size: 1.4rem;
    margin-left: 10rem;
  }

  &__form-container {
    width: 40%;
    height: 80vh;
    margin-top: 2rem;
    margin-right: 8rem;
  }

  &__image-container {
    width: 40%;
    height: 80vh;
  }

  &__image {
    width: 70%;
    height: 80vh;
    margin-left: 18%;
  }

  &__continue-btn {
    background: rgb(0, 132, 137);
    color: #fff;
    border: none;
    outline: none;
    padding: 0.55rem 0.5rem 0.6rem 0.5rem;
    border-radius: 0.2rem;
    width: 15%;
    font-size: 1rem;
    margin-left: 10rem;
    cursor: pointer;
  }
}

/*
  ##Device = Desktops
  ##Screen = 1440px to higher resolution desktops
*/

@media (max-width: 1440px) {
  .last-step-container {
    &__continue-btn {
      width: 20%;
    }
  }
}

/*
  ##Device = Laptops, Desktops
  ##Screen = B/w 1025px to 1280px
*/

@media (min-width: 1025px) and (max-width: 1280px) {
  .last-step-container {
    &__continue-btn {
      width: 20%;
    }
  }
}

/*
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) {
  .last-step-container {
    &__logo-container {
      width: 15%;
      margin-left: 4rem;
      margin-right: -3rem;
    }

    &__logo {
      width: 65%;
      height: 3.2vh;
    }

    &__header-title {
      font-size: 1.5rem;
      line-height: 1.2;
    }

    &__two-column-container {
      display: flex;
      margin-top: 15%;
    }

    &__get-started {
      margin-left: 0rem;
    }

    &__step-one {
      margin-left: 0rem;
    }

    &__place-kind {
      margin-left: 0rem;
    }

    &__form-container {
      width: 48%;
      margin-right: 5rem;
      padding-left: 4rem;
    }

    &__image {
      width: 110%;
      height: 46vh;
      margin-left: 14%;
    }

    &__place-guest-container {
      margin-bottom: 3%;
      margin-left: 0rem;
    }

    &__continue-btn {
      width: 30%;
      margin-left: 0rem;
    }
  }
}

/*
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

@media (min-width: 481px) and (max-width: 768px) {
  .last-step-container {
    &__logo-container {
      width: 10%;
      margin-left: 4rem;
      margin-right: 0.5rem;
    }

    &__logo {
      width: 65%;
      height: 3.2vh;
    }

    &__header-title {
      font-size: 1.2rem;
      line-height: 1.2;
    }

    &__get-started {
      margin-left: 0rem;
    }

    &__step-one {
      margin-left: 0rem;
    }

    &__place-kind {
      margin-left: 0rem;
    }

    &__form-container {
      width: 44%;
      margin-right: 3rem;
      padding-left: 2rem;
    }

    &__image {
      width: 110%;
      height: 46vh;
      margin-left: 14%;
    }

    &__continue-btn {
      width: 30%;
      margin-left: 0rem;
    }
  }
}

/*
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

@media (min-width: 320px) and (max-width: 480px) {
  .last-step-container {
    flex-direction: column;

    &__header {
      height: 8vh;
    }

    &__logo-container {
      width: 30%;
      margin-top: 4%;
    }

    &__logo {
      width: 65%;
      height: 4vh;
    }

    &__header-title {
      display: none;
    }

    &__header-border-container {
      display: fixed;
      top: 0;
    }

    &__get-started {
      font-size: 1.4rem;
      margin-left: 0rem;
    }

    &__step-one {
      margin-left: 0rem;
      font-size: 0.9rem;
    }

    &__place-kind {
      margin-left: 0rem;
    }

    &__form-container {
      width: 100%;
      margin-top: 3rem;
      margin-left: 2rem;
    }

    &__image-container {
      display: none;
    }

    &__continue-btn {
      width: 50%;
      margin-left: 0rem;
      font-size: 1rem;
      padding: 0.6rem 0.5rem;
    }

    &__place-kind {
      font-size: 1.1rem;
    }
  }
}
</style>
