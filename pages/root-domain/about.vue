<script setup>
useHead({
  title: "About Us | Classmate - Tuition Management System",
});
</script>

<template>
  <NuxtLayout name="home">
    <HomeIntro image="about-us.webp" />
    <section class="py-5 bg-light" id="scroll-target">
      <div class="container">
        <header class="section-header" data-aos="fade-up">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <img
                class="img-fluid rounded mb-5 mb-lg-0"
                src="https://dummyimage.com/600x400/343a40/6c757d"
                alt="..."
              />
            </div>
            <div class="col-lg-6">
              <h3 class="fw">Our founding</h3>
              <p class="lead fw-normal text-muted mb-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                est, ut esse a labore aliquam beatae expedita. Blanditiis
                impedit numquam libero molestiae et fugit cupiditate, quibusdam
                expedita, maiores eaque quisquam.
              </p>
            </div>
          </div>
        </header>
      </div>
    </section>

    <section class="py-5">
      <div class="container">
        <header class="section-header" data-aos="fade-up">
          <div class="row align-items-center">
            <div class="col-lg-6 order-first order-lg-last">
              <img
                class="img-fluid rounded mb-5 mb-lg-0"
                src="https://dummyimage.com/600x400/343a40/6c757d"
                alt="..."
              />
            </div>
            <div class="col-lg-6">
              <h3 class="fw-bolder">Growth &amp; beyond</h3>
              <p class="lead fw-normal text-muted mb-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                est, ut esse a labore aliquam beatae expedita. Blanditiis
                impedit numquam libero molestiae et fugit cupiditate, quibusdam
                expedita, maiores eaque quisquam.
              </p>
            </div>
          </div>
        </header>
      </div>
    </section>

    <section class="py-5 bg-light">
      <div class="container">
        <header class="section-header" data-aos="fade-up">
          <div class="text-center">
            <h3 class="">Our team</h3>
            <p class="lead fw-normal text-muted mb-5">
              Dedicated to quality and your success
            </p>
          </div>
          <div
            class="row row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center"
          >
            <div v-for="member in members" :key="member.name" class="col mb-5">
              <div class="text-center">
                <img
                  class="img-fluid rounded-circle mb-4 px-4"
                  :src="member.image"
                  :alt="member.name"
                />
                <h5 class="fw-bolder">{{ member.name }}</h5>
                <p class="fst-italic text-muted">{{ member.position }}</p>
              </div>
            </div>
          </div>
        </header>
      </div>
    </section>
  </NuxtLayout>
</template>

<script>
import members from "~/assets/data/members.js";

export default {
  data() {
    return {
      members,
    };
  },
};
</script>
