<template>
  <div class="col-lg-4 box" data-aos="fade-up">
    <Icon :name="icon" class="featured-icon" />
    <h4 class="title">
      <a href="">{{ title }}</a>
    </h4>
    <p class="description">
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["icon", "title", "description"],
};
</script>
