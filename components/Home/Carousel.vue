<template>
  <div
    class="carousel-item active"
    :style="`background-image: url('/img/intro-carousel/${image}')`"
  >
    <div class="carousel-container" data-aos="zoom-in">
      <div class="carousel-content px-3 col-12 col-md-10 col-lg-8">
        <h2>{{ title }}</h2>
        <slot name="content" />
        <HomeButton text="Get Started" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "image"],
};
</script>

<style scoped>
.carousel-item {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
}
</style>
