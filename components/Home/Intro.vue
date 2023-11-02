<template>
  <div
    class="w-full intro"
    :style="`background-image: url('/img/intro/${image}');`"
  >
    <div class="layer"></div>
  </div>
</template>

<script>
export default {
  props: ["image"],
};
</script>

<style scoped>
.intro {
  position: relative;
  height: 80vh;
  background-size: cover;
  background-position: center;
}

.layer {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
}
</style>
