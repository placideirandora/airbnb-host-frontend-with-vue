&<template>
  <div class="step-two-container">
    <div class="step-two-container__header-border-container">
      <header class="step-two-container__header">
        <div class="step-two-container__logo-container" @click="navigateToStepOne">
          <img class="step-two-container__logo" src="../assets/airbnb.svg" alt />
        </div>
        <p class="step-two-container__header-title">Property and guests</p>
      </header>
      <div class="step-two-container__header-border">
        <div class="step-two-container__header-border-div-one"></div>
        <div class="step-two-container__header-border-div-two"></div>
        <div class="step-two-container__header-border-div-three"></div>
      </div>
    </div>
    <div class="step-two-container__two-column-container">
      <div class="step-two-container__left-column">
        <div class="step-two-container__form-container">
          <div class="step-two-container__form-content">
            <p class="step-two-container__accommodation">
              How many guests can
              your place accommodate?
            </p>
            <p
              class="step-two-container__bedroom"
            >Check that you have enough beds to accommodate all your guests comfortably.</p>
            <div class="step-two-container__guest-amount-container">
              <div class="step-two-container__guest-title">
                <p>Guests</p>
              </div>
              <div class="step-two-container__guest-amount">
                <div class="step-two-container__minus-container">
                  <p class="step-two-container__minus" @click="decrementGuestAmount">
                    <i class="fa fa-minus"></i>
                  </p>
                </div>
                <div class="step-two-container__amount-container">
                  <p class="step-two-container__amount">{{ guestAmount }}</p>
                </div>
                <div class="step-two-container__plus-container">
                  <p class="step-two-container__plus" @click="incrementGuestAmount">
                    <i class="fa fa-plus"></i>
                  </p>
                </div>
              </div>
            </div>
            <p class="step-two-container__bed-check">How many bedrooms can guests use?</p>
            <div>
              <select name id v-model="bedroomAmount" class="step-two-container__select">
                <option
                  v-for="(option, index) in options"
                  :value="option.value"
                  :key="index"
                >{{ option.text }}</option>
              </select>
            </div>
            <p class="step-two-container__bed-check">How many beds can guests use?</p>
            <div class="step-two-container__guest-amount-container">
              <div class="step-two-container__guest-title">
                <p>Beds</p>
              </div>
              <div class="step-two-container__guest-amount">
                <div class="step-two-container__minus-container">
                  <p class="step-two-container__minus" @click="decrementGuestBedAmount">
                    <i class="fa fa-minus"></i>
                  </p>
                </div>
                <div class="step-two-container__amount-container">
                  <p class="step-two-container__amount">{{ guestBedUseAmount }}</p>
                </div>
                <div class="step-two-container__plus-container">
                  <p class="step-two-container__plus" @click="incrementGuestBedAmount">
                    <i class="fa fa-plus"></i>
                  </p>
                </div>
              </div>
            </div>
            <p class="step-two-container__sleeping">Sleeping arrangements</p>
            <p class="step-two-container__bedroom">
              Sharing the types of beds
              in each room can help people
              understand the sleeping arrangements.
            </p>
            <hr class="step-two-container__divider" v-show="bedroomAmount !== 0" />
            <div v-show="bedroomAmount !== 0" v-for="(item, index) in bedroomAmount" :key="index">
              <div class="step-two-container__bedroom-container">
                <div class="step-two-container__bedroom-bed-container">
                  <p class="step-two-container__bedroom">Bedroom {{ item }}</p>
                  <p class="step-two-container__bed-check">{{ totalBedroomBedAmount }} beds</p>
                  <div
                    class="step-two-container__bedroom-beds"
                    v-show="totalBedroomBedAmount > 1 && !isBedroomAddBeds"
                  >
                    <p
                      class="step-two-container__bedroom-bed"
                      v-for="(bed, index) in bedroomBedsAmount"
                      :key="index"
                      v-show="bed.amount > 0"
                    >{{ bed.amount }} {{ bed.name }},</p>
                  </div>
                </div>
                <div class="step-two-container__add-bed-btn-container">
                  <button
                    class="step-two-container__add-bed-btn"
                    @click="toggleAddBedroomBedButtonClick(index)"
                  >{{ bedroomBedsButtonName }}</button>
                </div>
              </div>
              <!-- Add Bedroom Beds -->
              <div>
                <div
                  class="step-two-container__guest-amount-container"
                  v-for="(bed, i) in bedroomBeds"
                  :key="i"
                  v-show="isBedroomAddBeds && currentBedroom === index"
                >
                  <div class="step-two-container__guest-title">
                    <p>{{ bed }}</p>
                  </div>
                  <div class="step-two-container__guest-amount">
                    <div class="step-two-container__minus-container">
                      <p class="step-two-container__minus" @click="decrementBedroomBedsAmount(i)">
                        <i class="fa fa-minus"></i>
                      </p>
                    </div>
                    <div class="step-two-container__amount-container">
                      <p class="step-two-container__amount">{{ bedroomBedsAmount[i].amount }}</p>
                    </div>
                    <div class="step-two-container__plus-container">
                      <p class="step-two-container__plus" @click="incrementBedroomBedsAmount(i)">
                        <i class="fa fa-plus"></i>
                      </p>
                    </div>
                  </div>
                </div>
                <!-- no loop -->
                <select
                  v-show="isBedroomAddBeds"
                  v-model="bedroomNewBed"
                  @change="handleAddMoreBedroomBed"
                  name
                  id
                  class="step-two-container__select"
                >
                  <option disabled selected>Add another bed</option>
                  <option
                    v-for="(option, index) in bedroomBedsMoreOptions"
                    :value="option"
                    :key="index"
                  >{{ option }}</option>
                </select>
                <!-- no loop -->
              </div>
              <!-- Add Bedroom Beds -->
            </div>
            <hr class="step-two-container__divider" />
            <div class="step-two-container__main-bedroom-container">
              <div class="step-two-container__bedroom-container">
                <div class="step-two-container__bedroom-bed-container">
                  <p class="step-two-container__bedroom">Common spaces</p>
                  <p class="step-two-container__bed-check">{{ totalCommonSpaceBedAmount }} beds</p>
                  <div
                    class="step-two-container__bedroom-beds"
                    v-show="totalCommonSpaceBedAmount > 1 && !isCommonSpaceAddBeds"
                  >
                    <p
                      class="step-two-container__bedroom-bed"
                      v-for="(bed, index) in commonSpaceBedsAmount"
                      :key="index"
                      v-show="bed.amount > 0"
                    >{{ bed.amount }} {{ bed.name }},</p>
                  </div>
                </div>
                <div class="step-two-container__add-bed-btn-container">
                  <button
                    class="step-two-container__add-bed-btn"
                    @click="toggleAddCommonSpaceBedButtonClick"
                  >{{ commonSpaceButtonName }}</button>
                </div>
              </div>
              <div>
                <div
                  v-for="(bed, index) in commonSpaceBeds"
                  :key="index"
                  class="step-two-container__guest-amount-container"
                  v-show="isCommonSpaceAddBeds"
                >
                  <div class="step-two-container__guest-title">
                    <p>{{ bed }}</p>
                  </div>
                  <div class="step-two-container__guest-amount">
                    <div class="step-two-container__minus-container">
                      <p
                        class="step-two-container__minus"
                        @click="decrementCommonSpaceBedAmount(index)"
                      >
                        <i class="fa fa-minus"></i>
                      </p>
                    </div>
                    <div class="step-two-container__amount-container">
                      <p
                        class="step-two-container__amount"
                      >{{ commonSpaceBedsAmount[index].amount }}</p>
                    </div>
                    <div class="step-two-container__plus-container">
                      <p
                        class="step-two-container__plus"
                        @click="incrementCommonSpaceBedAmount(index)"
                      >
                        <i class="fa fa-plus"></i>
                      </p>
                    </div>
                  </div>
                </div>

                <!-- no loop -->
                <select
                  v-show="isCommonSpaceAddBeds"
                  v-model="commonSpaceNewBed"
                  @change="handleAddMoreCommonSpaceBed"
                  name
                  id
                  class="step-two-container__select"
                >
                  <option disabled selected>Add another bed</option>
                  <option
                    v-for="(option, index) in commonSpaceBedsMoreOptions"
                    :value="option"
                    :key="index"
                  >{{ option }}</option>
                </select>
                <!-- no loop -->
              </div>
              <hr class="step-two-container__divider" />
            </div>
          </div>
          <div class="step-two-container__bottom-nav">
            <div class="step-two-container__back-arrow-container">
              <div class="step-two-container__angle-left-container">
                <i class="fa fa-angle-left"></i>
              </div>
              <div class="step-two-container__back-link-container" @click="navigateToStepOne">
                <a class="step-two-container__back-link">Back</a>
              </div>
            </div>
            <div class="step-two-container__next-btn-container">
              <button class="step-two-container__next-btn"
              @click="navigateToStepThree">Next</button>
            </div>
          </div>
        </div>
      </div>
      <div class="step-two-container__right-column"></div>
    </div>
  </div>
</template>

<script>
import optionsData from '../data/options';

export default {
  name: 'StepTwo',
  data() {
    return {
      isCurrentBedroom: { visible: false, index: null },
      currentBedroom: null,
      isBedroomAddBeds: false,
      isCommonSpaceAddBeds: false,
      guestAmount: 1,
      bedroomAmount: 1,
      guestBedUseAmount: 1,
      totalBedroomBedAmount: 0,
      totalCommonSpaceBedAmount: 0,
      options: [...optionsData],
      bedroomBeds: ['Double', 'Queen', 'Single', 'Sofa bed', 'Small double'],
      bedroomBedsMoreOptions: [
        'King',
        'Couch',
        'Bunk bed',
        'Floor mattress',
        'Crib',
        'Toddler bed',
        'Hammock',
        'Water bed',
      ],
      bedroomBedsAmount: [
        {
          name: 'Double',
          amount: 0,
        },
        { name: 'Queen', amount: 0 },
        { name: 'Single', amount: 0 },
        { name: 'Sofa bed', amount: 0 },
        { name: 'Small double', amount: 0 },
      ],
      commonSpaceBeds: ['Sofa bed', 'Couch', 'Floor mattress'],
      commonSpaceBedsAmount: [
        {
          name: 'Sofa bed',
          amount: 0,
        },
        { name: 'Couch', amount: 0 },
        { name: 'Floor mattress', amount: 0 },
      ],
      commonSpaceBedsMoreOptions: [
        'Small double',
        'Double',
        'Queen',
        'King',
        'Bunk bed',
        'Air mattress',
        'Crib',
        'Toddler bed',
        'Hammock',
        'Water bed',
      ],
      bedroomBedsButtonName: 'Add Beds',
      commonSpaceButtonName: 'Add Beds',
      commonSpaceNewBed: 'Add another bed',
      bedroomNewBed: 'Add another bed',
    };
  },
  methods: {
    // Guests
    incrementGuestAmount() {
      this.guestAmount += 1;
    },
    decrementGuestAmount() {
      if (this.guestAmount > 1) {
        this.guestAmount -= 1;
      }
    },

    // Beds that guests can use
    incrementGuestBedAmount() {
      this.guestBedUseAmount += 1;
    },
    decrementGuestBedAmount() {
      if (this.guestBedUseAmount > 1) {
        this.guestBedUseAmount -= 1;
      }
    },

    // Adding beds to bedroom
    incrementBedroomBedsAmount(bed) {
      this.bedroomBedsAmount[bed].amount += 1;
      this.totalBedroomBedAmount += 1;
    },
    decrementBedroomBedsAmount(bed) {
      if (this.bedroomBedsAmount[bed].amount > 0) {
        this.bedroomBedsAmount[bed].amount -= 1;
        this.totalBedroomBedAmount -= 1;
      }
    },

    // Add beds to common space
    incrementCommonSpaceBedAmount(bed) {
      this.commonSpaceBedsAmount[bed].amount += 1;
      this.totalCommonSpaceBedAmount += 1;
    },
    decrementCommonSpaceBedAmount(bed) {
      if (this.commonSpaceBedsAmount[bed].amount > 0) {
        this.commonSpaceBedsAmount[bed].amount -= 1;
        this.totalCommonSpaceBedAmount -= 1;
      }
    },

    toggleAddBedroomBedButtonClick(index) {
      this.isBedroomAddBeds = !this.isBedroomAddBeds;
      this.currentBedroom = index;

      if (this.isBedroomAddBeds) {
        this.bedroomBedsButtonName = 'Done';
      }

      if (!this.isBedroomAddBeds) {
        this.bedroomBedsButtonName = 'Add Beds';
      }

      if (!this.isBedroomAddBeds && this.totalBedroomBedAmount > 0) {
        this.bedroomBedsButtonName = 'Edit Beds';
      }
    },

    toggleAddCommonSpaceBedButtonClick() {
      this.isCommonSpaceAddBeds = !this.isCommonSpaceAddBeds;

      if (this.isCommonSpaceAddBeds) {
        this.commonSpaceButtonName = 'Done';
      }

      if (!this.isCommonSpaceAddBeds) {
        this.commonSpaceButtonName = 'Add Beds';
      }

      if (!this.isCommonSpaceAddBeds && this.totalCommonSpaceBedAmount > 0) {
        this.commonSpaceButtonName = 'Edit Beds';
      }
    },

    handleAddMoreBedroomBed() {
      this.bedroomBeds = [...this.bedroomBeds, this.bedroomNewBed];
      this.bedroomBedsAmount = [
        ...this.bedroomBedsAmount,
        { name: this.bedroomNewBed, amount: 0 },
      ];
      this.bedroomNewBed = 'Add another bed';
    },

    handleAddMoreCommonSpaceBed() {
      this.commonSpaceBeds = [...this.commonSpaceBeds, this.commonSpaceNewBed];
      this.commonSpaceBedsAmount = [
        ...this.commonSpaceBedsAmount,
        { name: this.commonSpaceNewBed, amount: 0 },
      ];
      this.commonSpaceNewBed = 'Add another bed';
    },

    navigateToStepOne() {
      this.$router.push({ name: 'step-one' });
    },
    navigateToStepThree() {
      this.$router.push({ name: 'step-three' });
    },
  },
};
</script>

<style lang="scss" scoped>
.step-two-container {
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
  &__header-border-div-three {
    border-right: solid #c7c7d1 2px;
    flex-basis: 50%;
  }

  &__header-border-div-one {
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
  }

  &__accommodation {
    color: #484848;
    font-size: 1.6rem;
    font-weight: bold;
  }

  &__bed-check {
    color: #767676;
    font-size: 1.1rem;
  }

  &__sleeping {
    color: #484848;
    font-size: 1.6rem;
  }

  &__bedroom {
    color: #484848;
    font-size: 1.1rem;
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

  &__guest-amount-container {
    display: flex;
    margin-bottom: 1rem;
    justify-content: space-between;
    width: 55%;
  }

  &__guest-amount {
    display: flex;
  }

  &__guest-title {
    font-weight: bold;
    color: #484848;
  }

  &__minus,
  &__plus {
    font-size: 0.6rem;
    padding: 0.6rem;
    color: rgb(0, 132, 137);
    border: solid 1px rgb(0, 132, 137);
    border-radius: 2rem;
    cursor: pointer;
  }

  &__minus,
  &__amount {
    margin-right: 2rem;
  }

  &__amount {
    font-weight: bold;
  }

  &__select {
    padding: 1.2rem;
    width: 55%;
    margin-right: 1rem;
    color: #484848;
    font-size: 1rem;
    margin-bottom: 2rem;
    border-radius: 0.5rem;
    border: solid 1px #c4c4c4;
    background: #fff;
    padding-left: 0.6rem;
  }

  &__divider {
    width: 100%;
    margin-left: 0;
  }

  &__main-bedroom-container {
    padding-bottom: 8rem;
  }

  &__bedroom-container {
    display: flex;
    justify-content: space-between;
  }

  &__add-bed-btn-container {
    margin-right: 3.2rem;
    margin-top: 1.2rem;
  }

  &__add-bed-btn {
    border: solid #c4c4c4 1px;
    padding: 0.8rem 0.7rem;
    border-radius: 0.2rem;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    color: #484848;
    background: #fff;
    width: 9rem;
  }

  &__bedroom-beds {
    display: flex;
    flex-wrap: wrap;
  }

  &__bedroom-bed {
    margin-right: 0.6rem;
    color: #767676;
  }
}

/*
  ##Device = Desktops
  ##Screen = 1440px to higher resolution desktops
*/

@media (max-width: 1440px) {
  .step-two-container {
    &__form-container {
      width: 70%;
      margin-left: 30%;
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
  .step-two-container {
    &__form-container {
      width: 70%;
      margin-left: 30%;
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
  .step-two-container {
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
  }
}

/*
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

@media (min-width: 481px) and (max-width: 768px) {
  .step-two-container {
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
      margin-left: 20%;
    }

    &__form-content {
      padding-right: 0rem;
      margin-top: 5rem;
    }

    &__bottom-nav {
      width: 58%;
      height: 11vh;
    }

    &__back-arrow-container {
      margin-top: 0.8rem;
    }

    &__next-btn {
      margin-top: 40%;
    }

    &__guest-amount-container {
      width: 85%;
    }

    &__add-bed-btn-container {
      margin-right: 0rem;
    }

    &__add-bed-btn {
      padding: 0.7rem 0.6rem;
      width: 7rem;
      font-size: 1rem;
    }
  }
}

/*
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

@media (min-width: 320px) and (max-width: 480px) {
  .step-two-container {
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
    }

    &__bottom-nav {
      width: 100%;
      height: 12vh;
    }

    &__guest-amount-container {
      width: 90%;
    }

    &__add-bed-btn-container {
      margin-right: 0rem;
    }

    &__add-bed-btn {
      padding: 0.7rem 0.6rem;
      width: 7rem;
      font-size: 1rem;
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
  }
}
</style>
