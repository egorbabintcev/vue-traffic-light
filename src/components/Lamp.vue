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

<style lang="scss">
@import "@/assets/sass/functions";

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
  border: rem(2) solid #fff;
  border-radius: 50%;
  height: rem(75);
  width: rem(75);

  &:not(.is-on) {
    opacity: 0.15;
  }

  &:not(:last-child) {
    margin-bottom: rem(16);
  }

  &.is-blink {
    animation: blink 0.15s ease-in infinite;
  }

  &_red {
    background-color: #ff4554;
  }

  &_yellow {
    background-color: #f0e738;
  }

  &_green {
    background-color: #57b163;
  }
}
</style>
