<template>
  <li :class="{ 'menu-active': isActive }">
    <NuxtLink :href="path">{{ name }}</NuxtLink>
  </li>
</template>

<script>
export default {
  props: ["name", "path", "isActive"],
};
</script>