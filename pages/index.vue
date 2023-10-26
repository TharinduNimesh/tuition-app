<script setup>
useHead({
  title: "Tuition Master | Home",
});
</script>
<template>
  <div>
    <HomeHeader />

    <HomeSectionIntro />

    <main id="main">
      <HomeSectionServices />

      <HomeSectionAbout />

      <HomeSectionService />

      <HomeSectionFacts />

      <HomeSectionClients />

      <HomeSectionPricing />

      <HomeSectionTestimonials />

      <HomeSectionContact />
      <!-- #contact -->
    </main>

    <HomeSectionFooter />

    <a 
      href="#" 
      class="back-to-top"
      :class="{
        'opacity-0': !isShow,
        'opacity-1': isShow
      }"
    >
      <Icon name="quill:inline-up" class="icon" />
    </a>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  data() {
    return {
      isShow: false,
    }
  },
  beforeMount() {
    window.addEventListener("scroll", () => {
      this.isShow = window.scrollY > 100;
      let domElement = this.$el;
    })
  },
  provide() {
    return {
      isScrolled: computed(() => this.isShow),
    }
  }
};
</script>

<style scoped>
@import url("~/assets/css/home/index.css");
.back-to-top {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .3s ease-in-out;
}

.back-to-top:hover {
  transform: translateY(-5px);
}

.icon {
  color: #fff;
  font-size: 2rem;
}
</style>