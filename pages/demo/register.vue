<script setup>
useHead({
  title: "Register | Tuition Management System",
});
</script>

<template>
  <NuxtLayout name="auth">
    <div class="container-xxl">
      <div class="authentication-wrapper authentication-basic container-p-y">
        <div class="authentication-inner">
          <div class="card">
            <div class="card-body">
              <div class="app-brand justify-content-center">
                <NuxtLink to="/" class="app-brand-link gap-2">
                  <span class="app-brand-logo demo">
                    <img src="/img/classmate.png" class="logo" />
                  </span>
                  <span class="app-brand-text demo text-body fw-bolder"
                    >Classmate</span
                  >
                </NuxtLink>
              </div>
              <h4 class="mb-2">{{ detail.title }}</h4>
              <p class="mb-4">{{ detail.description }}</p>
              <FormRegister1 v-if="page === 1" :next="updatePage" />
              <FormRegister2 v-if="page === 2" :next="updatePage" />
              <FormRegister3 v-if="page === 3" :next="updatePage" />
              <p class="d-md-flex text-center justify-content-center gap-1">
                <span>{{ detail.question }}</span>
                <NuxtLink :to="detail.path">
                  <span>{{ detail.answer }}</span>
                </NuxtLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script>
const details = [
  {
    title: "Adventure starts here 🚀",
    description: "Make your tuition management easy and fun!",
    question: "Already have an account?",
    answer: "Sign in",
    path: "/login",
  },
  {
    title: "Check Your Inbox ✉️",
    description: "A code has been sent to tharindunimesh.abc@gmail.com",
    question: "I didn't get the code 😕",
    answer: "Resend.",
    path: "/",
  },
  {
    title: "Choose your package 💥",
    description:
      "Select the package that suits your needs. We have a variety of packages for you to choose from.",
    question: "I have no idea 😐",
    answer: "Learn more.",
    path: "/pricing",
  },
  {
    title: "Make friends",
    description:
      "Make friends with people who share the same interest as you. Expand your horizon.",
  },
];
export default {
  data() {
    return {
      page: 1,
      details,
    };
  },
  methods: {
    updatePage(page) {
      this.page = page;
    },
  },
  computed: {
    detail() {
      return this.details[this.page - 1];
    },
  },
};
</script>

<style scoped>
@import url("/css/system/pages/page-auth.css");

.logo {
  width: 40px;
  height: 40px;
}
</style>
