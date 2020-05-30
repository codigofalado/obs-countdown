export default {
  namespaced: true,
  state: {
    initialCountValue: 10,
    minutes: 0,
    seconds: 0
  },
  mutations: {
    UPDATE_INITIAL_COUNT_VALUE(state, value) {
      state.initialCountValue = value;
    },
    UPDATE_MINUTES(state, minutes) {
      state.minutes = minutes;
    },
    UPDATE_SECONDS(state, seconds) {
      state.seconds = seconds;
    }
  },
  actions: {
    changeInitialCountValue(ctx, val) {
      ctx.commit("UPDATE_INITIAL_COUNT_VALUE", val);
      ctx.commit("UPDATE_MINUTES", val);
      ctx.commit("UPDATE_SECONDS", 0);
    }
  }
};
