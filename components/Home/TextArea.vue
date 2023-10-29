<template>
  <div class="form-group">
    <div class="mb-3">
      <label for="name" class="form-label mx-2 p-0 m-0">
        {{ label }}
      </label>
      <textarea
        rows="5"
        class="form-control"
        :class="{
          'is-valid': isValid && modelValue,
          'is-invalid': !isValid && modelValue,
        }"
        :placeholder="placeholder"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <div class="valid-feedback">{{ success }}</div>
      <div class="invalid-feedback">{{ error }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["label", "placeholder", "success", "error", "isValid", "modelValue"],
};
</script>
