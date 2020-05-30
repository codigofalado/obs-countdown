<template>
  <div>
    <span v-text="formattedMinutes" />:<span v-text="formattedSeconds" />
  </div>
</template>
<script>
export default {
  props: {
    timerInitialValue: { type: Number, default: 10 },
    isFrozen: { type: Boolean, default: false }
  },
  data() {
    return {
      minutes: 0,
      seconds: 0,
      interval: null
    };
  },
  mounted() {
    this.minutes = this.timerInitialValue
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
    },
    timerInitialValue(newVal) {
      this.minutes = newVal || 1
      this.seconds = 0
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
        this.seconds = 59;
        this.minutes--;
      } else {
        this.seconds--;
      }
    },
    format(number) {
      return number < 10 ? `0${number}` : number;
    }
  },
  computed: {
    formattedMinutes() {
      return this.format(this.minutes)
    },
    formattedSeconds() {
      return this.format(this.seconds)
    },
  }
};
</script>
<style lang="scss" scoped>
div {
  font-size: 70px;
}
</style>
