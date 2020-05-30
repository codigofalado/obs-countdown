import Vue from "vue";
import Vuex from "vuex";
import content from "./modules/content";
import countdownTimer from "./modules/countdownTimer";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    content,
    countdownTimer
  }
});
