<template>
  <div class="col-12 package" :class="{ active: isActive }" @click="set(name)">
    <div class="d-flex align-items-center">
      <div class="px-3">
        <input
          class="form-check-input"
          name="package"
          type="radio"
          :value="name"
          :checked="isActive"
        />
      </div>
      <div class="d-flex flex-column w-100">
        <div class="d-flex align-items-center justify-content-between">
          <h6 class="font-bold uppercase">{{ name }}</h6>
          <span>LKR {{ price }} / Month</span>
        </div>
        <p>{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "price", "description", "isActive", "set"],
};
</script>

<style scoped>
h6 {
  text-transform: uppercase;
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
