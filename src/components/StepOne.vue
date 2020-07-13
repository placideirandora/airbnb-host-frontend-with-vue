<template>
  <div class="step-one-container">
    <div class="step-one-container__form-container">
      <p class="step-one-container__get-started">
        Hi, Placide! Let’s get started
        listing your space.
      </p>
      <p class="step-one-container__step-one">Step 1</p>
      <p class="step-one-container__place-kind">What kind of place do you have?</p>
      <div class="step-one-container__place-guest-container">
        <div>
          <select
            name
            id
            v-model="placeName"
            class="step-one-container__select step-one-container__place-select"
          >
            <option value="entire place">Entire place</option>
            <option value="private room">Private room</option>
            <option value="shared room">Shared room</option>
          </select>
        </div>
        <div>
          <select name id v-model="placeForGuests" class="step-one-container__select">
            <option value="1">for 1 guest</option>
            <option value="2">for 2 guests</option>
            <option value="3">for 3 guests</option>
            <option value="4">for 4 guests</option>
            <option value="5">for 5 guests</option>
            <option value="6">for 6 guests</option>
            <option value="7">for 7 guests</option>
            <option value="8">for 8 guests</option>
            <option value="9">for 9 guests</option>
            <option value="10">for 10 guests</option>
            <option value="11">for 11 guests</option>
            <option value="12">for 12 guests</option>
            <option value="13">for 13 guests</option>
            <option value="14">for 14 guests</option>
            <option value="15">for 15 guests</option>
            <option value="16">for 16 guests</option>
          </select>
        </div>
      </div>
      <input
        v-model="placeLocation"
        class="step-one-container__location-input-field"
        type="text"
        name
        id
        placeholder="Enter a location"
      />
      <br />
      <button class="step-one-container__continue-btn" @click="handleContinue">Continue</button>
    </div>
    <div class="step-one-container__image-container">
      <img class="step-one-container__image" src="../assets/image-1.png" alt srcset />
    </div>
  </div>
</template>

<script>
export default {
  name: 'StepOne',
  data() {
    return {
      placeName: 'entire place',
      placeForGuests: 4,
      placeLocation: ''
    };
  },

  methods: {
    handleContinue() {
      const payload = {
        placeName: this.placeName.toLowerCase(),
        placeForGuests: this.placeForGuests,
        placeLocation: this.placeLocation.toLowerCase()
      };

      this.$store.commit('setLandingInfo', payload);
      this.$router.push({ name: 'step-two' });
    }
  },
  created() {
    this.$store.dispatch('getLocationInfo');
  }
};
</script>

<style lang="scss" scoped>
.step-one-container {
  display: flex;
  justify-content: center;

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

  &__place-guest-container {
    display: flex;
    margin-bottom: 1%;
    margin-left: 10rem;
  }

  &__select {
    padding: 0.5rem;
    width: 11rem;
    margin-right: 1rem;
    color: #484848;
    font-size: 1rem;
  }

  &__location-input-field {
    width: 47.7%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    margin-left: 10rem;
    color: #484848;
    font-size: 1rem;
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
  .step-one-container {
    &__place-guest-container {
      margin-bottom: 1.5%;
    }

    &__location-input-field {
      width: 61%;
    }

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
  .step-one-container {
    &__place-guest-container {
      margin-bottom: 1.8%;
    }

    &__location-input-field {
      width: 69%;
    }

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
  .step-one-container {
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

    &__select {
      width: 11rem;
      margin-right: 0.8rem;
    }

    &__location-input-field {
      width: 73.8%;
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
  .step-one-container {
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
      padding-left: 1rem;
    }

    &__image {
      width: 110%;
      height: 46vh;
      margin-left: 14%;
    }

    &__place-guest-container {
      margin-bottom: 2%;
      margin-left: 0rem;
      margin-top: 2rem;
    }

    &__select {
      width: 9rem;
      margin-right: 0.8rem;
    }

    &__location-input-field {
      width: 85%;
      margin-left: 0rem;
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
  .step-one-container {
    flex-direction: column;

    &__get-started {
      font-size: 1.7rem;
      margin-left: 0rem;
    }

    &__step-one {
      margin-left: 0rem;
    }

    &__place-kind {
      margin-left: 0rem;
    }

    &__form-container {
      width: 80%;
      margin-top: 2rem;
      margin-left: 2rem;
    }

    &__image-container {
      display: none;
    }

    &__place-guest-container {
      flex-direction: column;
      margin-left: 0rem;
      margin-bottom: 2%;
    }

    &__place-select {
      margin-bottom: 2%;
    }

    &__select {
      width: 100%;
    }

    &__location-input-field {
      margin-left: 0rem;
      width: 94%;
    }

    &__continue-btn {
      width: 34%;
      margin-left: 0rem;
    }
  }
}
</style>
