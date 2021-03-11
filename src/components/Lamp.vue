<template>
  <div class="traffic__light" :class="classnames" />
</template>

<script>
export default {
  name: "Lamp",
  props: {
    color: String,
    activeColor: String,
    countdown: Number,
  },
  computed: {
    isOn() {
      return this.color === this.activeColor;
    },

    classnames() {
      return `traffic__light_${this.color} ${this.isOn ? "is-on" : ""} ${
        this.isOn && this.color !== "yellow" && this.countdown < 3
          ? "is-blink"
          : ""
      }`;
    },
  },
};
</script>

<style>
@keyframes blink {
  from {
    opacity: 1;
  }
  to {
    opacity: 0.15;
  }
}

.traffic__light {
  background-color: #fff;
  border: 2px solid #fff;
  border-radius: 50%;
  height: 75px;
  width: 75px;
}

.traffic__light:not(.is-on) {
  opacity: 0.15;
}

.traffic__light:not(:last-child) {
  margin-bottom: 15px;
}

.traffic__light.is-blink {
  animation: blink 0.15s ease-in infinite;
}

.traffic__light_red {
  background-color: #ff4554;
}

.traffic__light_yellow {
  background-color: #f0e738;
}

.traffic__light_green {
  background-color: #57b163;
}
</style>
