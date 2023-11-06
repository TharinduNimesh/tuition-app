<template>
  <div class="mb-3">
    <div class="d-flex justify-content-between">
      <label class="form-label">{{ label }}</label>
      <NuxtLink :to="path" v-if="addForgotPassword">
        <small>Forgot Password?</small>
      </NuxtLink>
    </div>
    <div
      :class="{
        'input-group input-group-merge': isPassword,
      }"
    >
      <input
        :type="inputType"
        class="form-control"
        :placeholder="placeholder"
        :class="{
          'is-invalid': !isValid && modelValue,
        }"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <span
        class="input-group-text cursor-pointer"
        v-if="isPassword"
        @click="togglePassword"
      >
        <Icon
          v-show="inputType.toLowerCase() === 'password'"
          name="mdi:eye-off-outline"
        />
        <Icon
          v-show="inputType.toLowerCase() === 'text'"
          name="mdi:eye-outline"
        />
      </span>
    </div>
    <div class="invalid-feedback">{{ error }}</div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      String,
      default: "",
    },
    type: {
      String,
      default: "text",
    },
    placeholder: {
      String,
      default: "",
    },
    addForgotPassword: {
      Boolean,
      default: false,
    },
    path: {
      String,
      default: "",
    },
    isValid: {
      Boolean,
      default: true,
    },
    error: {
      String,
      default: "",
    },
    modelValue: {
      String,
      default: "",
    },
  },
  data() {
    return {
      inputType: this.type,
    };
  },
  computed: {
    isPassword() {
      return this.type.toLowerCase() === "password";
    },
  },
  methods: {
    togglePassword() {
      this.inputType = this.inputType == "password" ? "text" : "password";
    },
  },
};
</script>
