<script setup>
useHead({
  title: "Login | Tuition Management System",
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
              <h4 class="mb-2">Welcome to <strong>Classmate!</strong> 👋</h4>
              <p class="mb-4">
                Please sign-in to your account and start the adventure
              </p>
              <FormLogin />
              <p class="d-md-flex text-center justify-content-center gap-1">
                <span>New on our platform?</span>
                <NuxtLink to="/register">
                  <span>Create an account</span>
                </NuxtLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped>
@import url("/css/system/pages/page-auth.css");

.logo {
  width: 40px;
  height: 40px;
}
</style>
