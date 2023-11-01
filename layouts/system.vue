<script setup>
useHead({
  title: "Login | Tuition Management System",
  script: [
    {
      src: "/js/helpers.js",
      defer: true,
    },
    {
      src: "/js/config.js",
      defer: true,
    },
  ],
  link: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap",
    },
  ],
});
</script>

<template>
  <div>
    <slot />
  </div>
</template>

<style>
@import url("/css/system/core.css");
@import url("/css/system/theme-default.css");
@import url("/css/system/index.css");
</style>
