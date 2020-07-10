import Vue from 'vue';
import VueRouter from 'vue-router';

import StepOne from '../components/StepOne.vue';
import StepTwo from '../components/StepTwo.vue';
import StepThree from '../components/StepThree.vue';
import StepFour from '../components/StepFour.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'step-one',
    component: StepOne,
  },
  {
    path: '/step-two',
    name: 'step-two',
    component: StepTwo,
  },
  {
    path: '/step-three',
    name: 'step-three',
    component: StepThree,
  },
  {
    path: '/step-four',
    name: 'step-four',
    component: StepFour,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
