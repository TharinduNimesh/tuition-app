<template>
  <div class="testimonial-item">
    <img :src="`/img/${image}`" class="testimonial-img" alt="" />
    <h3>{{ name }}</h3>
    <h4>{{ position }}</h4>
    <p>
      <img src="/img/quote-sign-left.png" class="quote-sign-left" alt="" />
      {{ comment }}
      <img src="/img/quote-sign-right.png" class="quote-sign-right" alt="" />
    </p>
  </div>
</template>

<script>
export default {
  props: ["name", "position", "image", "comment"],
};
</script>

<style>
</style>