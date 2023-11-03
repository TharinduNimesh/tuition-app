<template>
  <form>
    <div class="d-flex justify-content-center align-items-center gap-2 mb-3">
      <input
        v-for="(el, index) in count"
        :key="index"
        :id="`input-${index}`"
        type="text"
        v-model="digit[index]"
        class="digit form-control"
        :autofocus="active === index"
        @keyup="focus($event)"
        maxlength="1"
        :data-index="index"
      />
    </div>
    <div class="row mb-3">
      <div class="col-md-6 mt-1 mt-md-0 order-2 order-md-1">
        <button
          type="button"
          class="btn btn-danger d-grid w-100"
          @click="next(1)"
        >
          Previous
        </button>
      </div>
      <div class="col-md-6 mt-1 mt-md-0 order-1 order-md-2">
        <button
          type="button"
          class="btn btn-primary d-grid w-100"
          @click="next(3)"
          :disabled="isButtonDisabled"
        >
          Verify
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      count: 5,
      active: 0,
      digit: [],
    };
  },
  methods: {
    focus(event) {
      let focusedElement = document.activeElement;
      let index = focusedElement.dataset.index;
      let value = String.fromCharCode(event.keyCode);
      let isValid = this.isValidChar(value);
      if (isValid) {
        this.digit[index] = value;
        this.active = parseInt(index) + 1;
        if (this.active < this.count) {
          let id = "input-" + this.active;
          document.getElementById(id)?.focus();
        }
      } else {
        this.digit[index] = null;
      }
    },
    isValidChar(value) {
      return !isNaN(parseInt(value));
    },
  },
  computed: {
    isButtonDisabled() {
      if (this.digit.length < 5) {
        return true;
      }
      this.digit.forEach((i) => {
        if (!i) {
          return true;
        }
      });
      return false;
    },
  },
  props: ["next"],
};
</script>

<style scoped>
.digit {
  padding: 0;
  width: 42px;
  aspect-ratio: 1;
  text-align: center;
  font-size: 18px;
  text-transform: uppercase;
}
</style>
