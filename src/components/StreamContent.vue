<template>
  <div class="content">
    <h1 v-text="title" />
    <h2 v-html="streamTitle"></h2>
    <h3 v-html="streamSubtitle"></h3>
    <CountdownTimer :timerInitialValue="initialCountValue" :isFrozen="false"/>
    <p v-html="streamParagraph"></p>
  </div>
</template>


<script>
import { mapState } from 'vuex'
import CountdownTimer from "@/components/CountdownTimer.vue";

export default {
  components: {
    CountdownTimer
  },
  computed: {
    ...mapState('content', [
      'title', 
      'streamTitle', 
      'streamSubtitle', 
      'streamParagraph'
    ]),
    initialCountValue() {
      return this.$store.state.countdownTimer.initialCountValue
    }
  }
}
</script>