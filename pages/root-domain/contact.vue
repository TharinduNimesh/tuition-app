<script setup>
useHead({
  title: "Contact Us | Classmate - Tuition Management System",
});
</script>
<template>
  <NuxtLayout name="home">
    <HomeIntro image="contact.webp" />
    <section id="contact" class="container">
      <header class="section-header" data-aos="fade-up">
        <h3>Contact Us</h3>
      </header>

      <div class="row contact-info" data-aos="fade-up">
        <div class="col-md-4">
          <div class="contact-address">
            <Icon class="icon" name="ic:sharp-location-on" />
            <h3>Address</h3>
            <address>693/3, Gonawala Road, Kelaniya, Sri Lanka.</address>
          </div>
        </div>

        <div class="col-md-4">
          <div class="contact-phone">
            <Icon class="icon" name="ic:baseline-local-phone" />
            <h3>Phone Number</h3>
            <p><a href="tel:+94705321516">+94 70 532 1516</a></p>
          </div>
        </div>

        <div class="col-md-4">
          <div class="contact-email">
            <Icon class="icon" name="ic:baseline-email" />
            <h3>Email</h3>
            <p>
              <a href="mailto:contact@eversoft.cf">contact@eversoft.lk</a>
            </p>
          </div>
        </div>
      </div>
      <FormContact data-aos="fade-up" />

      <div id="demo">
        <header class="section-header mt-5" data-aos="fade-up">
          <h3>Request A Demo</h3>
          <p>
            Experience the power of Classmate! Request a demo account for a
            sneak peek into our tuition management system. Valid for 24 hours
            only. Choose from Individual, Education Center, or Organization
            packages to explore the features that suit your needs.
          </p>
        </header>

        <form action="" data-aos="fade-up">
          <div class="w-full px-5 d-flex justify-content-center gap-4 mb-5">
            <div
              v-for="(pkg, index) in packages"
              class="package"
              :class="{
                active: selected === pkg.title,
              }"
              :key="pkg.title"
              @click="select(pkg.title)"
            >
              <div class="package-head">
                <h3>{{ pkg.title }}</h3>
                <img
                  :src="`/img/packages/${images[index]}.webp`"
                  alt="Individual Package"
                />
              </div>
              <div class="package-body">
                <p>{{ pkg.content }}</p>
                <div class="px-3">
                  <input
                    class="form-check-input"
                    name="package"
                    type="radio"
                    :value="pkg.title"
                    v-model="selected"
                  />
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-md-6 offset-md-3">
              <div class="request-group">
                <input
                  type="text"
                  placeholder="Enter Your Email Address"
                  v-model="email"
                />
                <button>Request</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  </NuxtLayout>
</template>

<script>
import packages from "~/assets/data/pricing-packages.js";
export default {
  data() {
    return {
      email: "",
      selected: "",
      packages,
      images: ["teacher", "institution", "branches"],
    };
  },
  methods: {
    select(name) {
      this.selected = name;
    },
  },
};
</script>
