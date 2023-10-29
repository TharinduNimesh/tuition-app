<script setup>
useHead({
  title: "GuruGO | Tuition Management System",
  meta: [
    {
      name: "description",
      content:
        "GuruGo is the all-in-one tuition management system, empowering teachers and institutions to simplify tuition, scheduling, and student performance tracking for educational success.",
    },
  ],
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
      let domElement = this.$el;
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
@import url("~/assets/css/home/index.css");
.back-to-top {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
}

.back-to-top:hover {
  transform: translateY(-5px);
}

.icon {
  color: #fff;
  font-size: 2rem;
}
</style>
