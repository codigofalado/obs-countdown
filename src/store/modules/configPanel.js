export default {
  namespaced: true,
  state: {
    isConfigPainelOpen: false
  },
  mutations: {
    CHANGE_IS_CONFIG_PANEL_OPEN(state, value) {
      state.isConfigPainelOpen = value;
    }
  }
};
