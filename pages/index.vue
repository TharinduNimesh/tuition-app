<script setup>
useHead({
  title: "Classmate | Tuition Management System",
  meta: [
    {
      name: "description",
      content:
        "Classmate is the all-in-one tuition management system, empowering teachers and institutions to simplify tuition, scheduling, and student performance tracking for educational success.",
    },
  ],
  link: [
    {
      rel: 'stylesheet',
      href: '/css/home.css',
    }
  ]
});
</script>
<template>
  <div>
    <HomeHeader />

    <HomeSectionIntro />

    <main id="main">
      <HomeSectionFeatures />

      <HomeSectionAbout />

      <HomeSectionServices />

      <HomeSectionFacts />

      <HomeSectionClients />

      <HomeSectionPricing />

      <HomeSectionTestimonials />

      <HomeSectionContact />
    </main>

    <HomeSectionFooter />

    <a
      href="#"
      class="back-to-top"
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

<style>
.back-to-top {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
}

.back-to-top:hover {
  transform: translateY(-5px);
}

.back-to-top .icon {
  color: #fff;
  font-size: 2rem;
}
</style>
