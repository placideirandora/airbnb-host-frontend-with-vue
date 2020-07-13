import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import baseUrl from '../data/baseUrl';

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
    getLocationInfo: () => {
      axios
        .get(`${baseUrl}/get-location-info`)
        .then(response => {
          console.log('Host Info Retrieved: ', response.data);
        })
        .catch(e => {
          console.log('Failed to Retrieve Host Info: ', e);
        });
    }
  },
  getters: {
    landingInfo: state => state.landingInfo,
    propertyAndGuestInfo: state => state.propertyAndGuestInfo,
    locationInfo: state => state.locationInfo,
    amenityInfo: state => state.amenityInfo
  }
});
