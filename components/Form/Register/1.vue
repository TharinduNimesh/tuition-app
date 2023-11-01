<template>
  <form class="mb-3" method="POST">
    <SystemInput
      label="Email Address"
      placeholder="Enter your email address"
      v-model="form.email"
    />
    <SystemInput
      label="Password"
      placeholder="············"
      type="password"
      path="/"
      v-model="form.password"
    />
    <SystemInput
      label="Confirm Password"
      placeholder="············"
      type="password"
      path="/"
      v-model="form.password"
    />
    <div class="mb-3">
      <button 
        type="button"
        class="btn btn-primary d-grid w-100" 
        @click="next(2)">Continue</button>
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
  props: ["next"],
};
</script>
