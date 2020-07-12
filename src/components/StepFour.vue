&<template>
  <div class="step-four-container">
    <div class="step-four-container__header-border-container">
      <header class="step-four-container__header">
        <div class="step-four-container__logo-container" @click="navigateToStepOne">
          <img class="step-four-container__logo" src="../assets/airbnb.svg" alt />
        </div>
        <p class="step-four-container__header-title">Amenities</p>
      </header>
      <div class="step-four-container__header-border">
        <div class="step-four-container__header-border-div-one"></div>
        <div class="step-four-container__header-border-div-two"></div>
        <div class="step-four-container__header-border-div-three"></div>
      </div>
    </div>
    <div class="step-four-container__two-column-container">
      <div class="step-four-container__left-column">
        <div class="step-four-container__form-container">
          <div class="step-four-container__form-content">
            <p class="step-four-container__accommodation">What amenities do you offer?</p>
            <p
              class="step-four-container__bedroom"
            >These are just the amenities guests usually expect, but you can add even more after you publish.</p>
            <div class="step-four-container__option-container">
              <label class="step-four-container__checkbox-container">
                <input type="checkbox" value="Essentials" v-model="checkedAmenities" />
                <span class="step-four-container__checkmark"></span>
              </label>
              <div class="step-four-container__option-content-container">
                <p class="step-four-container__option-item">Essentials</p>
                <p
                  class="step-four-container__option-item-detail"
                >Towels, bed sheets, soap, toilet paper, and pillows</p>
              </div>
            </div>
            <div
              v-for="(option, index) in nonDetailedOptions"
              :key="index"
              class="step-four-container__option-container"
            >
              <label class="step-four-container__checkbox-container">
                <input type="checkbox" :value="option" v-model="checkedAmenities" />
                <span class="step-four-container__checkmark"></span>
              </label>
              <div class="step-four-container__option-content-container">
                <p class="step-four-container__option-item-non-detailed">{{ option }}</p>
              </div>
            </div>
            <p class="step-four-container__sub-heading">Safety amenities</p>
            <div class="step-four-container__option-container">
              <label class="step-four-container__checkbox-container">
                <input type="checkbox" value="Smoke detector" v-model="checkedAmenities" />
                <span class="step-four-container__checkmark"></span>
              </label>
              <div class="step-four-container__option-content-container">
                <p class="step-four-container__option-item">Smoke detector</p>
                <p
                  class="step-four-container__option-item-detail"
                >Check your local laws, which may require a working smoke detector in every room</p>
              </div>
            </div>
            <div class="step-four-container__option-container">
              <label class="step-four-container__checkbox-container">
                <input type="checkbox" value="Carbon monoxide detector" v-model="checkedAmenities" />
                <span class="step-four-container__checkmark"></span>
              </label>
              <div class="step-four-container__option-content-container">
                <p class="step-four-container__option-item">Carbon monoxide detector</p>
                <p
                  class="step-four-container__option-item-detail"
                >Check your local laws, which may require a working carbon monoxide detector in every room</p>
              </div>
            </div>
            <div class="step-four-container__option-container">
              <label class="step-four-container__checkbox-container">
                <input type="checkbox" value="First-aid kit" v-model="checkedAmenities" />
                <span class="step-four-container__checkmark"></span>
              </label>
              <div class="step-four-container__option-content-container">
                <p class="step-four-container__option-item">First-aid kit</p>
              </div>
            </div>
            <div class="step-four-container__option-container">
              <label class="step-four-container__checkbox-container">
                <input type="checkbox" value="Fire extinguisher" v-model="checkedAmenities" />
                <span class="step-four-container__checkmark"></span>
              </label>
              <div class="step-four-container__option-content-container">
                <p class="step-four-container__option-item">Fire extinguisher</p>
              </div>
            </div>
            <div class="step-four-container__option-container">
              <label class="step-four-container__checkbox-container">
                <input type="checkbox" value="Lock on bedroom door" v-model="checkedAmenities" />
                <span class="step-four-container__checkmark"></span>
              </label>
              <div class="step-four-container__option-content-container">
                <p class="step-four-container__option-item">Lock on bedroom door</p>
                <p
                  class="step-four-container__option-item-detail"
                >Private room can be locked for safety and privacy</p>
              </div>
            </div>
          </div>
          <div class="step-four-container__bottom-nav">
            <div class="step-four-container__back-arrow-container">
              <div class="step-four-container__angle-left-container">
                <i class="fa fa-angle-left"></i>
              </div>
              <div class="step-four-container__back-link-container" @click="navigateToStepThree
">
                <a class="step-four-container__back-link">Back</a>
              </div>
            </div>
            <div class="step-four-container__next-btn-container">
              <button class="step-four-container__next-btn" @click="handleSubmit">Next</button>
            </div>
          </div>
        </div>
      </div>
      <div class="step-four-container__right-column"></div>
    </div>
  </div>
</template>

<script>
import nonDetailedOptions from '../data/nonDetailedAmenities';

export default {
  name: 'StepTwo',
  data() {
    return {
      country: 'Rwanda',
      streetAddress: '',
      aptAddress: '',
      city: '',
      state: '',
      zipCode: '',
      nonDetailedOptions: [...nonDetailedOptions],
      checkedAmenities: []
    };
  },
  methods: {
    handleSubmit() {
      console.log('StepFour Data: ', this.checkedAmenities);
    },
    navigateToStepOne() {
      this.$router.push({ name: 'step-one' });
    },
    navigateToStepThree() {
      this.$router.push({ name: 'step-three' });
    }
  }
};
</script>

<style lang="scss" scoped>
.step-four-container {
  display: flex;
  flex-direction: column;

  &__header-border-container {
    position: fixed;
    width: 100%;
    background: #fff;
    z-index: 1;
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
  &__header-border-div-three {
    border-right: solid #c7c7d1 2px;
    flex-basis: 50%;
  }

  &__header-border-div-one,
  &__header-border-div-two,
  &__header-border-div-three {
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
    padding-bottom: 10rem;
  }

  &__option-container {
    display: flex;
    margin-bottom: -0.5rem;
  }

  &__option-item {
    color: #000;
  }

  &__option-item-detail {
    color: #484848;
    font-size: 0.9rem;
    margin-top: -0.8rem;
  }

  &__option-item-non-detailed {
    color: #000;
    line-height: 2.3;
  }

  &__sub-heading {
    color: #797979;
    font-size: 1.1rem;
    font-weight: bold;
    margin-top: 4rem;
  }

  &__checkbox-container {
    display: block;
    position: relative;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin-top: 1.3rem;
    margin-right: 3rem;
  }

  /* Hide the browser's default checkbox */
  &__checkbox-container input {
    position: relative;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  &__checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #fff;
    border: solid #a4a3a2 1px;
    border-radius: 0.3rem;
  }

  /* On mouse-over, add a davys grey background color */
  &__checkbox-container:hover input ~ &__checkmark {
    border-color: #484848;
  }

  /* When the checkbox is checked, add a black background */
  &__checkbox-container input:checked ~ &__checkmark {
    background-color: #000;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  &__checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  &__checkbox-container input:checked ~ &__checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  &__checkbox-container &__checkmark:after {
    left: 9px;
    top: 4px;
    width: 5px;
    height: 10px;
    border: solid #fff;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(40deg);
    -ms-transform: rotate(40deg);
    transform: rotate(40deg);
  }

  &__checkbox {
    padding: 80rem;
  }

  &__accommodation {
    color: #484848;
    font-size: 1.6rem;
    font-weight: bold;
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
}

/*
  ##Device = Desktops
  ##Screen = 1440px to higher resolution desktops
*/

@media (max-width: 1440px) {
  .step-four-container {
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
  }
}

/*
  ##Device = Laptops, Desktops
  ##Screen = B/w 1025px to 1280px
*/

@media (min-width: 1025px) and (max-width: 1280px) {
  .step-four-container {
    &__form-container {
      width: 82%;
      margin-left: 20%;
    }

    &__form-content {
      padding-left: 1rem;
    }

    &__bottom-nav {
      width: 46%;
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
  .step-four-container {
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
      padding-left: 1rem;
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
  .step-four-container {
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
  .step-four-container {
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

    &__back-arrow-container {
      margin-top: 0.6rem;
    }

    &__next-btn {
      padding: 0.8rem 0.7rem&;
      margin-top: 35%;
      font-size: 1rem;
    }

    &__option-container {
      margin-bottom: -0.8rem;
    }
  }
}
</style>
