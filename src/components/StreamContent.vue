<template>
  <div class="content">
    <h1 v-text="texts.title" />
    <h2 v-html="texts.streamTitle"></h2>
    <h3 v-html="texts.streamSubtitle"></h3>
    <CountdownTimer 
      :timerInitialValue="initialCountValue" 
      :isFrozen="isFrozen"
    />
    <p v-html="texts.streamParagraph"></p>
  </div>
</template>


<script>
import { mapState } from 'vuex'
import CountdownTimer from "@/components/CountdownTimer.vue";

export default {
  props: {
    isFrozen: { type: Boolean, default: false }
  },
  components: {
    CountdownTimer
  },
  created() {
    this.$store.dispatch('content/getLocalStorageContent')
  },
  computed: {
    ...mapState('content', [
      'texts'
    ]),
    initialCountValue() {
      return this.$store.state.countdownTimer.initialCountValue
    }
  }
}
</script>