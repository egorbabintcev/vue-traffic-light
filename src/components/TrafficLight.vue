<template>
  <Countdown :countdown="interval" />
  <div class="traffic__wrapper">
    <Lamp color="red" :activeColor="activeColor" :countdown="interval" />
    <Lamp color="yellow" :activeColor="activeColor" :countdown="interval" />
    <Lamp color="green" :activeColor="activeColor" :countdown="interval" />
  </div>
</template>

<script>
import Lamp from "./Lamp";
import Countdown from "./Countdown";

export default {
  name: "TrafficLight",
  components: {
    Lamp,
    Countdown,
  },
  props: {
    activeColor: String,
    timeout: Number,
  },
  data() {
    return {
      intervalID: null,
      interval: null,
    };
  },
  computed: {
    getNextColor() {
      this.$store.commit("setNextColor", this.activeColor);
      return this.$store.state.next;
    },
  },
  watch: {
    timeout() {
      this.setTimer();
    },
  },
  methods: {
    setTimer() {
      const timeout = this.timeout;
      this.interval = timeout / 1000;

      this.intervalID = setInterval(() => {
        if (this.interval > 1) this.interval -= 1;
      }, 1000);

      setTimeout(() => {
        clearInterval(this.intervalID);
        this.$router.push(this.getNextColor);
      }, timeout);
    },
  },
  mounted() {
    this.setTimer();
  },
};
</script>

<style lang="scss">
@import "@/assets/sass/functions";

.traffic__wrapper {
  align-items: center;
  background-color: #333f57;
  border-radius: rem(50);
  display: flex;
  flex-direction: column;
  padding: rem(25);
}
</style>
