<template>
  <div :class="{frozen: isFrozen}">
    <span v-text="formattedMinutes" />:<span v-text="formattedSeconds" />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      interval: null
    };
  },
  mounted() {
    this.$store.commit('countdownTimer/UPDATE_MINUTES', this.initialCountValue)
    if(!this.isFrozen) {
      this.interval = setInterval(this.countDown, 1000);
    }
  },
  watch: {
    isFrozen(val) {
      if(!val) {
        this.interval = setInterval(this.countDown, 1000);
      } else {
        clearInterval(this.interval)
      }
    }
  },  
  methods: {
    countDown() {
      // Se minutos e segundos chegaram ao zero, retorna.
      if (this.minutes == 0 && this.seconds == 0) {
        return clearInterval(this.interval);
      }
      // Controla os segundos
      if (this.seconds == 0) {
        this.$store.commit('countdownTimer/UPDATE_SECONDS', 59)
        this.$store.commit('countdownTimer/UPDATE_MINUTES', this.minutes - 1)
      } else {
        this.$store.commit('countdownTimer/UPDATE_SECONDS', this.seconds - 1)
      }
    },
    format(number) {
      return number < 10 ? `0${number}` : number;
    }
  },
  computed: {
    ...mapState('countdownTimer', ['minutes', 'seconds', 'initialCountValue']),
    formattedMinutes() {
      return this.format(this.minutes)
    },
    formattedSeconds() {
      return this.format(this.seconds)
    },
    isFrozen() {
      return this.$store.state.configPanel.isConfigPainelOpen
    }
  }
};
</script>
<style lang="scss" scoped>
div {
  font-size: 70px;
}

.frozen {
  color: #12A5B7;
}
</style>
