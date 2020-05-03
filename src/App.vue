<template>
  <div id="app">
    <div class="content">
      <h1>{{ title }}</h1>
      <h2 v-html="stream_title"></h2>
      <h3 v-html="stream_subtitle"></h3>
      <Clock />
      <p v-html="stream_paragraph"></p>
    </div>
  </div>
</template>

<script>
import Clock from "./components/Clock.vue";

export default {
  name: "App",
  components: {
    Clock
  },
  async created() {
    const data = await fetch("../data.json");
    const config = await data.json();
    this.stream_title = config["stream-title"];
    this.stream_subtitle = config["stream-subtitle"];
    this.stream_paragraph = config["stream-paragraph"];
  },
  data() {
    return {
      stream_title: "",
      stream_subtitle: "",
      stream_paragraph: ""
    };
  },
  computed: {
    title: function() {
      const urlParams = new URLSearchParams(location.search);
      return urlParams.get("title") || "O live coding está começando!";
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
