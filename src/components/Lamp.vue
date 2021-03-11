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
@import "@/assets/sass/mixins";

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
  border: rem(1) solid #fff;
  border-radius: 50%;
  height: rem(75);
  position: relative;
  width: rem(75);

  &::before {
    @include pseudo;
    border-radius: 50%;
    border-right: rem(4) solid rgba(#fff, 0.6);
    height: calc(100% - #{rem(10)});
    left: 51%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% - #{rem(20)});
  }

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
