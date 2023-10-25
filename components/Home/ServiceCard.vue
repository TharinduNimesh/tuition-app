<template>
  <div class="col-lg-4 box">
    <i :class="icon"></i>
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

<style scoped>
@import url("~/assets/css/home/index.css");
</style>