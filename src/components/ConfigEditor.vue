<template>
  <transition name="slide-right" mode="out-in" appear>
    <form class="config-params" v-if="show" @submit.prevent="">
      <h2>Editar textos</h2>
    
      <label for="title">Título:</label>
      <textarea   
        id="title" 
        cols="40" 
        rows="5" 
        placeholder="Insira o texto de título"
        v-model="editorTitle"
      ></textarea>

      <label for="stream-title">Título da live:</label>
      <textarea 
        id="stream-title" 
        cols="40" 
        rows="5"
        placeholder="Insira um título para a live"
        v-model="editorStreamTitle"
      ></textarea>

      <label for="title">Subtítulo da live:</label>
      <textarea 
        id="title" 
        cols="40" 
        rows="5" 
        placeholder="Insira o texto de subtítulo"
        v-model="editorStreamSubtitle"
      ></textarea>

      <label for="timer">Contagem regressiva (minutos):</label>
      <input 
        type="number" 
        id="timer" 
        v-model="timerValue"
        min="1"
      >

      <label for="paragraph">Paragrafo:</label>
      <textarea 
        id="paragraph" 
        cols="40" 
        rows="5" 
        placeholder="Insira o texto de paragrafo"
        v-model="editorStreamParagraph"
      ></textarea>

      <input type="submit" value="Salvar" class="btn">
    </form>
  </transition>
</template>

<script>
export default {
  props: {
    show: { type: Boolean, default: false },
    title: { type: String, default: ""},
    streamTitle: { type: String, default: ""},
    streamSubtitle: { type: String, default: ""},
    streamParagraph: { type: String, default: ""},
    timerInitialValue: { type: Number, default: 10 }
  },
  data: () => ({
    updatedTimerValue: 0
  }),
  computed: {
    editorTitle: {
      get() {
        return this.title
      },
      set(val) {
        this.$emit("update:title", val)
      }
    },
    editorStreamTitle: {
      get() {
        return this.streamTitle
      },
      set(val) {
        this.$emit("update:streamTitle", val)
      }
    },
    editorStreamParagraph: {
      get() {
        return this.streamParagraph
      },
      set(val) {
        this.$emit("update:streamParagraph", val)
      }
    },
    editorStreamSubtitle: {
      get() {
        return this.streamSubtitle
      },
      set(val) {
        this.$emit("update:streamSubtitle", val)
      }
    },
    timerValue: {
      get() {
        return this.timerInitialValue
      },
      set(val) {
        this.$emit("update:timerInitialValue", parseInt(val))
      }
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
      margin-bottom: 30px;

      &:after {
        content: "";
        margin-top: 5px;
        display: block;
        height: 2px;
        background-color: #fff;
      }
    }

    > label {
      display: block;
      margin-bottom: 10px;
    }

    > textarea,
    > input {
      padding: 10px;
      box-sizing: border-box;
      outline: none;
      border: 2px solid #fff;
      transition: all .3s ease;
      border-radius: 4px;
      color: #333;

      + label {
        margin-top: 30px;
      }

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

      &:hover {
        background-color: #AE025E;
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
</style>