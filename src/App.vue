<template>
  <div id="app">
    <ConfigEditor 
      :show="isConfigEditorVisible" 
      :title="title"
      @update:title="title = $event"
      :streamTitle="streamTitle"
      @update:streamTitle="streamTitle = $event"
       :streamParagraph="streamParagraph"
      @update:streamSubtitle="streamSubtitle = $event"
      :streamSubtitle="streamSubtitle"
      @update:streamParagraph="streamParagraph = $event"
      :timerInitialValue="timerInitialValue"
      @update:timerInitialValue="timerInitialValue = $event"
    />
    <div class="content">
      <h1 v-text="title" />
      <h2 v-html="streamTitle"></h2>
      <h3 v-html="streamSubtitle"></h3>
      <Clock :timerInitialValue="timerInitialValue" :isFrozen="isConfigEditorVisible"/>
      <p v-html="streamParagraph"></p>
    </div>
  </div>
</template>

<script>
import Clock from "@/components/Clock.vue";
import ConfigEditor from "@/components/ConfigEditor.vue"

export default {
  name: "App",
  components: {
    Clock,
    ConfigEditor
  },
  async mounted() {
    window.addEventListener('keydown', event => {
      this.toggleConfigEditor(event)
    })
  },
  data() {
    return {
      title: "O live coding está começando",
      streamTitle: "🐵 Hoje: Criando um Timer com Vue.js + Novos MEMEs no Canal",
      streamSubtitle: "#Hashtag no Chat vira GIF na Live!",
      streamParagraph: "Enquanto você espera, <strong>apresente-se</strong> no chat, <strong>pergunte</strong> o que quiser e tente <strong>responder</strong> as perguntas dos amigos!",
      isConfigEditorVisible: true,
      timerInitialValue: 10
    };
  },
  methods: {
    toggleConfigEditor({key, ctrlKey, altKey}) {
      if(/e/i.test(key) && ctrlKey && altKey) this.isConfigEditorVisible = !this.isConfigEditorVisible
      if(event.key === 'Escape') this.isConfigEditorVisible = false
    }
  }
};
</script>

<style lang="scss">
@import "./assets/css/normalize.css";
#app {
  font-family: "Fira Code", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  width: 100vw;
  height: 100vh;
  background-image: url("assets/img/background.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .content {
    color: #fff;
    max-width: 650px;
    text-align: center;
    position: relative;
    height: 80vh;
    padding: 70px;
    > * {
      text-shadow: 0px 5px 0px #860c4e;
    }
    h1 {
      max-width: 400px;
      font-size: 2.5rem;
      text-align: center;
      margin: auto;
      margin-bottom: 70px;
    }
    h2 {
      font-size: 2rem;
      text-align: center;
      margin: auto;
      max-width: 650px;
    }
    h3 {
      font-size: 1.4rem;
      text-align: center;
      margin-bottom: 30px;
      max-width: 650px;
    }
    p {
      position: absolute;
      font-size: 1.3rem;
      line-height: 1.5;
      bottom: 30px;
      max-width: 650px;
    }
  }
}
</style>
