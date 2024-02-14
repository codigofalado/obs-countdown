<template>
  <div>
    <span v-text="formattedMinutes" />:<span v-text="formattedSeconds" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      minutes: 0,
      seconds: 0,
      animationId: null,
      lastTime: 0,
    };
  },
  mounted() {
    const urlParams = new URLSearchParams(location.search);
    const urlMinutes = urlParams.get("minutes");
    this.minutes = Number(urlMinutes) || 10;
    this.animationId = window.requestAnimationFrame(this.countDown);
  },
  methods: {
    countDown(timestamp) {
      // Se o tempo atual (timestamp) - o último tempo considerado for menor que 1s, fazemos um "continue no loop"
      if (timestamp - this.lastTime < 1000) {
        this.animationId = window.requestAnimationFrame(this.countDown);
        return null;
      }

      // Se minutos e segundos chegaram ao zero, paramos o "loop"
      if (this.minutes === 0 && this.seconds === 0) {
        return window.cancelAnimationFrame(this.animationId);
      }

      this.lastTime = timestamp;

      // Controla os segundos
      if (this.seconds <= 0) {
        this.seconds = 59;
        this.minutes--;
      } else {
        this.seconds--;
      }

      this.animationId = window.requestAnimationFrame(this.countDown);
    },
  },
  computed: {
    formattedMinutes() {
      return String(this.minutes).padStart(2, "0");
    },
    formattedSeconds() {
      return String(this.seconds).padStart(2, "0");
    },
  },
};
</script>
<style lang="scss" scoped>
div {
  font-size: 70px;
}
</style>
