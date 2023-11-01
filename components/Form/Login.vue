<template>
  <form class="mb-3" action="index.html" method="POST">
    <SystemInput
      label="Email or Username"
      placeholder="Enter your email or username"
      v-model="form.email"
    />
    <SystemInput
      label="Password"
      placeholder="············"
      type="password"
      :addForgotPassword="true"
      path="/"
      v-model="form.password"
    />
    <div class="mb-3">
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          v-model="form.rememberMe"
        />
        <label class="form-check-label" for="remember-me">Remember Me </label>
      </div>
    </div>
    <div class="mb-3">
      <button class="btn btn-primary d-grid w-100">Sign in</button>
    </div>
  </form>
</template>

<script>
const form = {
  email: "",
  password: "",
  rememberMe: false,
};
export default {
  data() {
    return {
      form,
    };
  },
};
</script>
