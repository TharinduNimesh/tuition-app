<template>
  <li :class="{ 'menu-active': isActive }">
    <a :href="path">{{ name }}</a>
  </li>
</template>

<script>
export default {
  props: ["name", "path", "isActive"],
};
</script>