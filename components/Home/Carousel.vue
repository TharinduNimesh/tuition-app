<template>
  <div
    class="carousel-item active"
    :style="`background-image: url('img/intro-carousel/${image}')`"
  >
    <div class="carousel-container">
      <div class="carousel-content">
        <h2>{{ title }}</h2>
        <slot name="content"/>
        <HomeButton text="Get Started" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['title', 'image'],
};
</script>

<style>
</style>