&<template>
  <div class="step-three-container">
    <div class="step-three-container__header-border-container">
      <header class="step-three-container__header">
        <div class="step-three-container__logo-container" @click="navigateToStepOne">
          <img class="step-three-container__logo" src="../assets/airbnb.svg" alt />
        </div>
        <p class="step-three-container__header-title">Location</p>
      </header>
      <div class="step-three-container__header-border">
        <div class="step-three-container__header-border-div-one"></div>
        <div class="step-three-container__header-border-div-two"></div>
        <div class="step-three-container__header-border-div-three"></div>
        <div class="step-three-container__header-border-div-four"></div>
      </div>
    </div>
    <div class="step-three-container__two-column-container">
      <div class="step-three-container__left-column">
        <div class="step-three-container__form-container">
          <div class="step-three-container__form-content">
            <p class="step-three-container__accommodation">Where’s your place located?</p>
            <p
              class="step-three-container__bedroom"
            >Guests will only get your exact address once they’ve booked a reservation.</p>
            <div>
              <button class="step-three-container__location-btn">
                <i class="fa fa-location-arrow"></i>Use current location
              </button>
            </div>
            <div class="step-three-container__manual-address">
              <p>or enter your address</p>
            </div>
            <div class="step-three-container__field-container">
              <label class="step-three-container__label">Country / Region</label>
              <div>
                <select name id v-model="country" class="step-three-container__select">
                  <option
                    v-for="(option, index) in options"
                    :value="option.name"
                    :key="index"
                  >{{ option.name }}</option>
                </select>
              </div>
            </div>
            <div class="step-three-container__field-container">
              <label class="step-three-container__label">Street address</label>
              <div>
                <input
                  v-model="streetAddress"
                  type="text"
                  class="step-three-container__long-text-field"
                />
                <p class="step-three-container__detail">House name/number + street/road</p>
              </div>
            </div>
            <div class="step-three-container__field-container">
              <label class="step-three-container__label">Apt, suite. (optional)</label>
              <div>
                <input
                  v-model="aptAddress"
                  type="text"
                  class="step-three-container__long-text-field"
                />
                <p class="step-three-container__detail">Apt., suite, building access code</p>
              </div>
            </div>
            <div class="step-three-container__city-state-container">
              <div class="step-three-container__city-container">
                <label for="city">City</label>
                <br />
                <input v-model="city" type="text" class="step-three-container__long-text-field" />
              </div>
              <div class="step-three-container__state-container">
                <label for="state">State</label>
                <br />
                <input v-model="state" type="text" class="step-three-container__long-text-field" />
              </div>
            </div>
            <div>
              <label class="step-three-container__label">ZIP Code</label>
              <div>
                <input v-model="zipCode" type="text" class="step-three-container__short-text-field" />
              </div>
            </div>
          </div>
          <div class="step-three-container__bottom-nav">
            <div class="step-three-container__back-arrow-container">
              <div class="step-three-container__angle-left-container">
                <i class="fa fa-angle-left"></i>
              </div>
              <div class="step-three-container__back-link-container" @click="navigateToStepTwo
">
                <a class="step-three-container__back-link">Back</a>
              </div>
            </div>
            <div class="step-three-container__next-btn-container">
              <button class="step-three-container__next-btn" @click="handleContinue">Next</button>
            </div>
          </div>
        </div>
      </div>
      <div class="step-three-container__right-column"></div>
    </div>
  </div>
</template>

<script>
import countries from '../data/countries';

export default {
  name: 'StepThree',
  data() {
    return {
      country: 'Rwanda',
      streetAddress: '',
      aptAddress: '',
      city: '',
      state: '',
      zipCode: '',
      options: [...countries]
    };
  },
  methods: {
    handleSubmit() {
      console.log('StepThree Data: ', this.data);
    },
    navigateToStepOne() {
      this.$router.push({ name: 'step-one' });
    },
    navigateToStepTwo() {
      this.$router.push({ name: 'step-two' });
    },
    handleContinue() {
      const payload = {
        country: this.country,
        streetAddress: this.streetAddress,
        aptAddress: this.aptAddress,
        city: this.city,
        state: this.state,
        zipCode: this.zipCode
      };

      this.$store.commit('setLocationInfo', payload);
      this.$router.push({ name: 'step-four' });
    }
  }
};
</script>

<style lang="scss" scoped>
.step-three-container {
  display: flex;
  flex-direction: column;

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
  &__header-border-div-two {
    background: rgb(0, 132, 137);
  }

  &__two-column-container {
    display: flex;
    margin-top: 3.7%;
  }

  &__left-column {
    flex-basis: 60%;
    height: 100vh;
  }

  &__right-column {
    flex-basis: 40%;
    background: #fafafa;
  }

  &__form-container {
    width: 55%;
    height: 90vh;
    margin-left: 45%;
    padding-top: 2rem;
  }

  &__form-content {
    padding-right: 3rem;
    padding-bottom: 6rem;
  }

  &__accommodation {
    color: #484848;
    font-size: 1.6rem;
    font-weight: bold;
  }

  &__bed-check {
    color: #484848;
    font-size: 1.2rem;
  }

  &__sleeping {
    color: #484848;
    font-size: 1.6rem;
  }

  &__bedroom {
    color: #484848;
    font-size: 1.1rem;
  }

  &__location-btn {
    color: rgb(0, 132, 137);
    background: #fff;
    border: solid 2px rgb(0, 132, 137);
    border-radius: 8px;
    outline: none;
    padding: 0.8rem 0.7rem;
    border-radius: 0.2rem;
    font-size: 1.1rem;
    font-weight: bold;
    width: 45%;
    cursor: pointer;
  }

  .fa-location-arrow {
    margin-right: 1rem;
    font-size: 1.2rem;
  }

  &__bottom-nav {
    display: flex;
    position: fixed;
    justify-content: space-between;
    width: 33%;
    height: 8vh;
    bottom: 0;
    border-top: solid 1px #c4c4c4;
    background: #fff;
  }

  &__back-link {
    color: rgb(0, 132, 137);
    font-size: 1.2rem;
    text-decoration: none;
    cursor: pointer;
  }

  &__back-link:hover {
    text-decoration: underline;
  }

  &__next-btn {
    background: rgb(0, 132, 137);
    color: #fff;
    border: none;
    outline: none;
    padding: 0.8rem 0.7rem;
    border-radius: 0.2rem;
    width: 140%;
    font-size: 1.2rem;
    font-weight: bold;
    margin-top: 30%;
    cursor: pointer;
    position: relative;
  }

  &__back-arrow-container {
    display: flex;
    cursor: pointer;
    padding-left: 1rem;
    margin-top: 0.6rem;
  }

  &__next-btn-container {
    margin-right: 3.2rem;
  }

  &__angle-left-container {
    margin-top: 0.8rem;
  }

  .fa-angle-left {
    color: rgb(0, 132, 137);
    font-size: 2.5rem;
    margin-right: 1rem;
  }

  &__back-link-container {
    margin-top: 1.2rem;
  }

  &__select {
    padding: 1.2rem;
    width: 91%;
    margin-right: 1rem;
    color: #484848;
    font-size: 1rem;
    border-radius: 0.5rem;
    border: solid 1px #c4c4c4;
    background: #fff;
    padding-left: 0.8rem;
    margin-top: 1rem;
  }

  &__long-text-field {
    padding: 1.2rem;
    width: 85%;
    margin-right: 1rem;
    color: #484848;
    font-size: 1rem;
    margin-bottom: 2rem;
    border-radius: 0.5rem;
    border: solid 1px #c4c4c4;
    padding-left: 0.8rem;
    margin-top: 1rem;
  }

  &__short-text-field {
    padding: 1.2rem;
    width: 38%;
    margin-right: 1rem;
    color: #484848;
    font-size: 1rem;
    margin-bottom: 2rem;
    border-radius: 0.5rem;
    border: solid 1px #c4c4c4;
    padding-left: 0.8rem;
    margin-top: 1rem;
  }

  &__field-container {
    margin-top: 1.5rem;
  }

  &__city-state-container {
    display: flex;
    width: 92%;
    justify-content: space-between;
    margin-top: 1.8rem;
  }

  &__detail {
    font-size: 0.8rem;
    color: #484848;
    margin-top: -1.5rem;
  }

  &__manual-address {
    display: none;
  }
}

/*
  ##Device = Desktops
  ##Screen = 1440px to higher resolution desktops
*/

@media (max-width: 1440px) {
  .step-three-container {
    &__form-container {
      width: 72%;
      margin-left: 28%;
    }

    &__bottom-nav {
      width: 42%;
      height: 9vh;
    }

    &__back-arrow-container {
      margin-top: 0.7rem;
    }

    &__location-btn {
      font-size: 1.1rem;
      width: 42%;
    }

    &__select {
      width: 91%;
    }
  }
}

/*
  ##Device = Laptops, Desktops
  ##Screen = B/w 1025px to 1280px
*/

@media (min-width: 1025px) and (max-width: 1280px) {
  .step-three-container {
    &__form-container {
      width: 82%;
      margin-left: 25%;
    }

    &__bottom-nav {
      width: 42%;
      height: 9vh;
    }

    &__back-arrow-container {
      margin-top: 0.4rem;
    }

    &__next-btn {
      padding: 0.8rem 0.7rem;
      margin-top: 20%;
    }
  }
}

/*
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) {
  .step-three-container {
    &__left-column {
      width: 80%;
    }

    &__form-container {
      width: 100%;
      margin-left: 10%;
    }

    &__logo-container {
      width: 5%;
    }

    &__logo {
      width: 65%;
      height: 3.2vh;
    }

    &__header-title {
      font-size: 1.2rem;
      line-height: 1.6;
    }

    &__form-content {
      margin-top: 5rem;
    }

    &__location-btn {
      font-size: 1.1rem;
      width: 45%;
    }

    &__select {
      width: 91%;
    }

    &__bottom-nav {
      width: 54%;
    }
  }
}

/*
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

@media (min-width: 481px) and (max-width: 768px) {
  .step-three-container {
    &__logo-container {
      width: 6%;
    }

    &__logo {
      width: 65%;
      height: 3.2vh;
    }

    &__header-title {
      font-size: 1.2rem;
      line-height: 1;
    }

    &__left-column {
      flex-basis: 80%;
      height: 100vh;
    }

    &__right-column {
      flex-basis: 30%;
    }

    &__form-container {
      margin-left: 10%;
    }

    &__form-content {
      padding-right: 0rem;
      margin-top: 5rem;
      width: 85%;
      padding-bottom: 10rem;
    }

    &__location-btn {
      font-size: 1.1rem;
      width: 52%;
    }

    &__city-container,
    &__state-container {
      width: 48%;
    }

    &__bottom-nav {
      width: 66%;
      height: 11vh;
    }

    &__back-arrow-container {
      margin-top: 0.8rem;
    }

    &__next-btn {
      margin-top: 40%;
    }
  }
}

/*
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

@media (min-width: 320px) and (max-width: 480px) {
  .step-three-container {
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

    &__left-column {
      flex-basis: 100%;
      height: 100vh;
    }

    &__right-column {
      display: none;
    }

    &__form-container {
      margin-left: 0;
      width: 84%;
    }

    &__form-content {
      width: 100%;
      margin-left: 10%;
      margin-top: 5rem;
      padding-right: 0rem;
      padding-bottom: 8rem;
    }

    &__bottom-nav {
      width: 100%;
      height: 12vh;
    }

    &__accommodation {
      font-size: 1.5rem;
    }

    &__bedroom {
      font-size: 1rem;
    }

    &__minus,
    &__amount {
      margin-right: 1rem;
    }

    &__back-arrow-container {
      margin-top: 0.6rem;
    }

    &__next-btn {
      padding: 0.8rem 0.7rem&;
      margin-top: 35%;
      font-size: 1rem;
    }

    &__location-btn {
      font-size: 1rem;
      width: 95%;
    }

    &__select {
      width: 95%;
    }

    &__city-state-container {
      flex-direction: column;
      width: 100%;
    }

    &__short-text-field {
      width: 85%;
    }

    &__manual-address {
      display: block;
      text-align: center;
    }
  }
}
</style>
