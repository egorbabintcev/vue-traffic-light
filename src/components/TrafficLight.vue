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

    interval() {
      localStorage.setItem("timeout", this.interval * 1000);
    },
  },
  methods: {
    setTimer() {
      const timeoutLeft = Number(localStorage.getItem("timeout"));
      const lastActiveColor = localStorage.getItem("lastActiveColor");
      const timeout =
        timeoutLeft > 1000 && lastActiveColor === this.activeColor
          ? timeoutLeft
          : this.timeout;
      this.interval = timeout / 1000;

      this.intervalID = setInterval(() => {
        if (this.interval > 1) this.interval -= 1;
      }, 1000);

      setTimeout(() => {
        clearInterval(this.intervalID);
        const next = this.getNextColor;
        localStorage.setItem("lastActiveColor", next);
        this.$router.push(next);
      }, timeout);
    },
  },
  mounted() {
    this.setTimer();
    localStorage.setItem("lastActiveColor", this.activeColor);
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
