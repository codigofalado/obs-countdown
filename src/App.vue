<template>
  <div id="app">
    <ConfigPanel />
    <StreamContent />
  </div>
</template>

<script>
import ConfigPanel from "@/components/ConfigPanel.vue"
import StreamContent from "@/components/StreamContent.vue"

export default {
  name: "App",
  components: {
    ConfigPanel,
    StreamContent
  },
  async mounted() {
    window.addEventListener('keydown', event => {
      this.toggleConfigEditor(event)
    })
  },
  computed: {
    isConfigPainelOpen() {
      return this.$store.state.configPanel.isConfigPainelOpen
    }
  },
  methods: {
    toggleConfigEditor({key, ctrlKey, altKey}) {
      if(/e/i.test(key) && ctrlKey && altKey) 
        this.$store.commit('configPanel/CHANGE_IS_CONFIG_PANEL_OPEN', !this.isConfigPainelOpen)
      if(event.key === 'Escape') this.$store.commit('configPanel/CHANGE_IS_CONFIG_PANEL_OPEN', false)
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
