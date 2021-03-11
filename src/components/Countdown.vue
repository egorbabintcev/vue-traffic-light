<template>
  <div class="traffic__countdown">
    <p>{{ countdown }}</p>
  </div>
</template>

<script>
export default {
  name: "Countdown",
  props: {
    countdown: Number,
  },
};
</script>

<style lang="scss">
@import "@/assets/sass/functions";
@import "@/assets/sass/mixins";

.traffic__countdown {
  align-items: center;
  background-color: #636d83;
  border-radius: rem(4);
  color: #fff;
  display: inline-flex;
  font-size: rem(24);
  font-weight: 500;
  justify-content: center;
  height: rem(60);
  letter-spacing: 0.03em;
  margin-bottom: rem(20);
  position: relative;
  width: rem(60);

  &::before {
    @include pseudo;
    background-color: #636d83;
    height: rem(20);
    top: 100%;
    width: rem(12);
  }
}
</style>
