import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    landingInfo: {
      placeName: null,
      placeForGuests: null,
      placeLocation: null
    },
    propertyAndGuestInfo: {
      guestsToAccommodate: null,
      bedroomsGuestCanUse: null,
      bedsGuestCanUse: null,
      bedroomBeds: {
        total: null,
        beds: []
      },
      commonSpaceBeds: {
        total: null,
        beds: []
      }
    },
    locationInfo: {
      country: null,
      streetAddress: null,
      aptAddress: null,
      city: null,
      state: null,
      zipCode: null
    },
    amenityInfo: {
      amenities: []
    }
  },
  mutations: {
    setLoading: (state, payload) => {
      state.loading = payload;
    },
    setLandingInfo: (state, payload) => {
      state.landingInfo = payload;
    },
    setPropertyAndGuestInfo: (state, payload) => {
      state.propertyAndGuestInfo = payload;
    },
    setLocationInfo: (state, payload) => {
      state.locationInfo = payload;
    },
    setAmenityInfo: (state, payload) => {
      state.amenityInfo = payload;
    }
  },
  actions: {
    publishHostSetupInfo: ({ commit }, payload) => {
      commit('setLoading', true);

      console.log('Host Setup Info: ', payload);
    }
  },
  getters: {
    landingInfo: state => state.landingInfo,
    propertyAndGuestInfo: state => state.propertyAndGuestInfo,
    locationInfo: state => state.locationInfo,
    amenityInfo: state => state.amenityInfo
  }
});
