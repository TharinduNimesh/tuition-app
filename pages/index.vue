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

      <HomeSectionTestimonials />

      <HomeSectionContact />
      <!-- #contact -->
    </main>

    <HomeSectionFooter />

    <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("~/assets/css/home/index.css");
</style>