export default {
  namespaced: true,
  state: {
    texts: {
      title: "O live coding está começando",
      streamTitle:
        "🐵 Hoje: Criando um Timer com Vue.js + Novos MEMEs no Canal",
      streamSubtitle: "#Hashtag no Chat vira GIF na Live!",
      streamParagraph:
        "Enquanto você espera, <strong>apresente-se</strong> no chat, <strong>pergunte</strong> o que quiser e tente <strong>responder</strong> as perguntas dos amigos!"
    }
  },
  mutations: {
    UPDATE_TITLE(state, title) {
      state.texts.title = title;
    },
    UPDATE_STREAM_TITLE(state, title) {
      state.texts.streamTitle = title;
    },
    UPDATE_STREAM_SUBTITLE(state, subtitle) {
      state.texts.streamSubtitle = subtitle;
    },
    UPDATE_STREAM_PARAGRAPH(state, paragraph) {
      state.texts.streamParagraph = paragraph;
    },
    UPDATE_TEXTS(state, payload) {
      state.texts = payload;
    }
  },
  actions: {
    async getLocalStorageContent({ commit }) {
      const content = await window.localStorage.getItem("countdown-content");
      if (content) {
        commit("UPDATE_TEXTS", JSON.parse(content));
      }
    },
    setLocalStorageContent({ state }) {
      return window.localStorage.setItem(
        "countdown-content",
        JSON.stringify(state.texts)
      );
    }
  }
};
