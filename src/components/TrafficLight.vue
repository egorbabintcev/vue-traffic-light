<template>
  <div class="traffic__wrapper">
    <Lamp color="red" :activeColor="activeColor" />
    <Lamp color="yellow" :activeColor="activeColor" />
    <Lamp color="green" :activeColor="activeColor" />
  </div>
</template>

<script>
import Lamp from "./Lamp";

export default {
  name: "TrafficLight",
  components: {
    Lamp,
  },
  props: {
    activeColor: String,
    timeout: Number,
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

      setTimeout(() => {
        this.$router.push(this.getNextColor);
      }, timeout);
    },
  },
  mounted() {
    this.setTimer();
  },
};
</script>

<style>
.traffic__wrapper {
  align-items: center;
  background-color: #636d83;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  padding: 25px;
}
</style>
