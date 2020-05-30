export default {
  namespaced: true,
  state: {
    title: "O live coding está começando",
    streamTitle: "🐵 Hoje: Criando um Timer com Vue.js + Novos MEMEs no Canal",
    streamSubtitle: "#Hashtag no Chat vira GIF na Live!",
    streamParagraph:
      "Enquanto você espera, <strong>apresente-se</strong> no chat, <strong>pergunte</strong> o que quiser e tente <strong>responder</strong> as perguntas dos amigos!"
  },
  mutations: {
    UPDATE_TITLE(state, title) {
      state.title = title;
    },
    UPDATE_STREAM_TITLE(state, title) {
      state.streamTitle = title;
    },
    UPDATE_STREAM_SUBTITLE(state, subtitle) {
      state.streamSubtitle = subtitle;
    },
    UPDATE_STREAM_PARAGRAPH(state, paragraph) {
      state.streamParagraph = paragraph;
    }
  }
};
