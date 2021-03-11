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

<style>
.traffic__countdown {
  align-items: center;
  background-color: #636d83;
  border-radius: 4px;
  color: #fff;
  display: inline-flex;
  font-size: 24px;
  font-weight: 500;
  justify-content: center;
  height: 60px;
  letter-spacing: 0.03em;
  margin-bottom: 20px;
  position: relative;
  width: 60px;
}

.traffic__countdown::before {
  background-color: #636d83;
  content: "";
  display: block;
  height: 20px;
  position: absolute;
  top: 100%;
  width: 12px;
}
</style>
