<script setup>
useHead({
  meta: [
    {
      name: "description",
      content:
        "Classmate is the all-in-one tuition management system, empowering teachers and institutions to simplify tuition, scheduling, and student performance tracking for educational success.",
    },
  ],
  link: [
    {
      rel: "stylesheet",
      href: "/css/home.css",
    },
  ],
});
</script>
<template>
  <div>
    <HomeHeader />

    <main id="main">
      <slot />
    </main>

    <HomeSectionFooter />
    <a
      href="#"
      class="scroll-to-top"
      :class="{
        'opacity-0': !isShow,
        'opacity-1': isShow,
      }"
    >
      <Icon name="quill:inline-up" class="icon" />
    </a>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  data() {
    return {
      isShow: false,
    };
  },
  beforeMount() {
    window.addEventListener("scroll", () => {
      this.isShow = window.scrollY > 100;
    });
  },
  provide() {
    return {
      isScrolled: computed(() => this.isShow),
    };
  },
};
</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  display: none;
  background: #696cff;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  text-align: center;
  line-height: 1;
  font-size: 16px;
  border-radius: 50%;
  right: 15px;
  bottom: 40px;
  transition: all 0.5s ease-in-out;
  z-index: 11;
}

.scroll-to-top:hover {
  transform: translateY(-5px);
}

.scroll-to-top .icon {
  color: #fff;
  font-size: 2rem;
}
</style>
