<template>
  <transition name="slide-right" mode="out-in" appear>
    <form class="config-params" v-if="isVisible" @submit.prevent="handleSave">
      <h2>Painel de configuração</h2>
    
      <label for="title">Título:</label>
      <textarea   
        id="title" 
        cols="40" 
        rows="5" 
        placeholder="Insira o texto de título"
        v-model="title"
        class="input"
      ></textarea>

      <label for="stream-title">Título da live:</label>
      <textarea 
        id="stream-title" 
        cols="40" 
        rows="5"
        placeholder="Insira um título para a live"
        v-model="streamTitle"
        class="input"
      ></textarea>

      <label for="title">Subtítulo da live:</label>
      <textarea 
        id="title" 
        cols="40" 
        rows="5" 
        placeholder="Insira o texto de subtítulo"
        v-model="streamSubtitle"
        class="input"
      ></textarea>

      <label for="timer">Contagem regressiva (minutos):</label>
      <div class="timer-wrapper">
        <input 
          type="number" 
          id="timer" 
          v-model="initialCountValue"
          min="1"
          class="input"
        >
        <button type="button" class="reset-btn" @click="resetTimer"></button>
      </div>

      <label for="paragraph">Paragrafo:</label>
      <textarea 
        id="paragraph" 
        cols="40" 
        rows="5" 
        placeholder="Insira o texto de paragrafo"
        v-model="streamParagraph"
        class="input"
      ></textarea>

      <input type="submit" value="Salvar" class="btn">
    </form>
  </transition>
</template>

<script>
export default {
  computed: {
    isVisible() {
      return this.$store.state.configPanel.isConfigPainelOpen
    },
    title: {
      get() {
        return this.$store.state.content.texts.title
      },
      set(val) {
        this.$store.commit('content/UPDATE_TITLE', val)
      }
    },
    streamTitle: {
      get() {
        return this.$store.state.content.texts.streamTitle
      },
      set(val) {
        this.$store.commit('content/UPDATE_STREAM_TITLE', val)
      }
    },
    streamParagraph: {
      get() {
        return this.$store.state.content.texts.streamParagraph
      },
      set(val) {
        this.$store.commit('content/UPDATE_STREAM_PARAGRAPH', val)
      }
    },
    streamSubtitle: {
      get() {
        return this.$store.state.content.texts.streamSubtitle
      },
      set(val) {
        this.$store.commit('content/UPDATE_STREAM_SUBTITLE', val)
      }
    },
    initialCountValue: {
      get() {
        return this.$store.state.countdownTimer.initialCountValue
      },
      set(val) {
        this.$store.dispatch('countdownTimer/changeInitialCountValue', val)
      }
    }
  },
  methods: {
    resetTimer() {
      this.$store.dispatch('countdownTimer/resetCount') 
    },
    handleSave() {
      this.$store.dispatch('content/setLocalStorageContent').then(() => {
        this.$store.commit('configPanel/CHANGE_IS_CONFIG_PANEL_OPEN', false)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .config-params {
    box-sizing: border-box;
    position: absolute;
    left: -70px;
    top: 0;
    bottom: 0;
    background-color: #262626;
    padding: 30px;
    box-shadow: 0 4px 8px rgba($color: #000000, $alpha: 0.4);
    height: 100vh;
    overflow-y: scroll;
    z-index: 999;
    scrollbar-color: #12A5B7 #444;
    scrollbar-width: medium;
    padding-left: 100px;

    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
      background-color: #444;
    }

    &::-webkit-scrollbar {
      width: 10px;
      background-color: #F5F5F5;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #12A5B7;	
      border-radius: 2px;
      background-image: -webkit-linear-gradient(45deg,
      rgba(255, 255, 255, .2) 25%,
        transparent 25%,
        transparent 50%,
        rgba(255, 255, 255, .2) 50%,
        rgba(255, 255, 255, .2) 75%,
        transparent 75%,
        transparent)
    }

    &::-webkit-scrollbar {
      width: 12px;
    }

    > h2 {
      text-align: center;
      font-size: 28px;
      margin: 0;

      &:after {
        content: "";
        margin-top: 10px;
        display: block;
        height: 2px;
        background-color: #fff;
      }
    }

    > label {
      display: block;
      margin-bottom: 10px;
      margin-top: 30px;
    }

    .input {
      padding: 10px;
      box-sizing: border-box;
      outline: none;
      border: 2px solid #fff;
      transition: all .3s ease;
      border-radius: 4px;
      color: #333;


      &:active,
      &:focus {
        border-color: #EB027E;
      }
    }

    > textarea {
      min-width: 300px;
      min-height: 100px;
    }

    > .btn {
      display: block;
      margin-top: 60px;
      margin-left: auto;
      background-color: #EB027E;
      color: #fff;
      font-weight: bold;
      width: 150px;
      cursor: pointer;
      margin-bottom: 60px;
      border: 0;
      border-radius: 4px;
      height: 40px;
      border-bottom: 3px solid #AE025E;
      transition: all 0.3s ease;

      &:active {
        transform: translateY(1px) scale(0.95);
      }
    }
  }

  #timer {
    width: 130px;
  }

  .slide-right-enter,
  .slide-right-leave-to {
    transform: translateX(-100%);
  }

  .slide-right-enter-active,
  .slide-right-leave-active {
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  

  .reset-btn {
    background-color: #EB027E;
    border: 0;
    width: 40px;
    border-radius: 4px;
    cursor: pointer;
    margin-left: 10px;
    background-image: url(../assets/img/reset.svg);
    background-repeat: no-repeat;
    background-position: center center;
    border-bottom: 3px solid #AE025E;
    transition: all 0.3s ease;

    &:active {
      transform: translateY(1px) scale(0.95);
    }
  }

  .timer-wrapper {
    display: flex;
  }
</style>