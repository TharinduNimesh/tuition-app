<template>
  <form class="mb-3" method="POST">
    <div class="w-100 d-flex justify-content-center mb-3">
      <div class="form-check form-switch">
        <input
          class="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckChecked"
          v-model="isAnnually"
        />
        <label
          class="form-check-label"
          :class="{
            'text-primary': isAnnually,
            'text-secondary': !isAnnually,
          }"
          >Annually</label
        >
      </div>
    </div>

    <div class="row mb-3">
      <FormRegisterPackage
        v-for="pkg in packages"
        :key="pkg.title"
        :name="pkg.title"
        :price="pkg.price[method]"
        :description="pkg.content"
        :isActive="packageName === pkg.title"
        :set="setPackageName"
      />
    </div>
    <div class="row mb-3">
      <div class="col-md-6 mt-1 mt-md-0 order-2 order-md-1">
        <button
          type="button"
          class="btn btn-danger d-grid w-100"
          @click="next(1)"
        >
          Back
        </button>
      </div>
      <div class="col-md-6 mt-1 mt-md-0 order-1 order-md-2">
        <button
          type="button"
          class="btn btn-primary d-grid w-100"
          @click="next(4)"
          :disabled="isButtonDisabled"
        >
          Next
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import packages from "~/assets/data/pricing-packages.js";

export default {
  props: ["next"],
  data() {
    return {
      isAnnually: true,
      packageName: null,
      packages,
    };
  },
  methods: {
    setPackageName(name) {
      this.packageName = name;
    },
  },
  computed: {
    isButtonDisabled() {
      return this.packageName === null;
    },
    method() {
      return this.isAnnually ? "annually" : "monthly";
    },
  },
};
</script>
