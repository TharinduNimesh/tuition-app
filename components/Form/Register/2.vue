<template>
  <form class="mb-3" method="POST">
    <div class="row mb-3">
      <div
        class="col-12 package"
        :class="{ active: packageName === 'individual' }"
        @click="setPackageName('individual')"
      >
        <div class="d-flex align-items-center">
          <div class="px-3">
            <input
              class="form-check-input"
              name="package"
              v-model="packageName"
              type="radio"
              value="individual"
              id="flexCheckDefault"
            />
          </div>
          <div class="d-flex flex-column">
            <h6 class="font-bold">INDIVIDUAL</h6>
            <p>Designed for a single teacher or tutor.</p>
          </div>
        </div>
      </div>

      <div
        class="col-12 package"
        :class="{ active: packageName === 'institution' }"
        @click="setPackageName('institution')"
      >
        <div class="d-flex align-items-center">
          <div class="px-3">
            <input
              class="form-check-input"
              name="package"
              v-model="packageName"
              type="radio"
              value="institution"
              id="flexCheckDefault"
            />
          </div>
          <div class="d-flex flex-column">
            <h6 class="font-bold">INSTITUTION</h6>
            <p>Suitable for a single education center or branch.</p>
          </div>
        </div>
      </div>

      <div
        class="col-12 package"
        :class="{ active: packageName === 'organization' }"
        @click="setPackageName('organization')"
      >
        <div class="d-flex align-items-center">
          <div class="px-3">
            <input
              class="form-check-input"
              name="package"
              v-model="packageName"
              type="radio"
              value="organization"
              id="flexCheckDefault"
            />
          </div>
          <div class="d-flex flex-column">
            <h6 class="font-bold">ORGANIZATION</h6>
            <p>Ideal for education center with multiple branches.</p>
          </div>
        </div>
      </div>
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
          Next
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: ["next"],
  data() {
    return {
      packageName: null,
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
  },
};
</script>

<style scoped>
h6 {
  font-weight: bolder;
  color: #000;
}

h6,
p {
  margin: 0;
}

.package {
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  margin: 2px 0;
}

.package:hover,
.active {
  border: 1px solid #696cff;
  background-color: #696cff27;
}
</style>
