<template>
  <div>
    <span v-if="minutes < 10">0</span>{{ minutes }}:<span v-if="seconds < 10"
      >0</span
    >{{ seconds }}
  </div>
</template>
<script>
export default {
  data() {
    return {
      minutes: 0,
      seconds: 0,
      elapsed: 0,
      interval: null,
    };
  },
  mounted() {
    const urlParams = new URLSearchParams(location.search);
    const urlMinutes = urlParams.get("minutes");
    this.minutes = Number(urlMinutes) || 10;
    this.interval = setInterval(this.countDown, 1000);
  },
  methods: {
    countDown: function() {
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
  },
};
</script>
<style lang="scss" scoped>
div {
  font-size: 70px;
}
</style>
