<template>
  <div class="pricing-card p-0">
    <div class="details">
      <h2 class="package">{{ name }}</h2>
      <div class="price">
        <h2 class="text-dark p-0 m-0">LKR {{ price }}<span>.00</span></h2>
        <h5 class="p-0 m-0">Per Month</h5>
      </div>
    </div>
    <div class="features px-4 mt-3">
      <p class="text-center">
        {{ content }}
      </p>
      <div
        v-for="feature in features"
        :key="feature.description"
        :class="isActive ? 'active' : ''"
        class="feature d-flex align-items-center gap-3"
      >
        <Icon name="emojione:white-heavy-check-mark" v-if="feature.status" />
        <Icon name="emojione:cross-mark-button" v-else />
        <span class="text-dark p-0 m-0">{{ feature.description }}</span>
      </div>
    </div>
    <div class="px-5 w-100 position-absolute button-container">
      <button class="btn btn-primary w-100">Get Started</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "price", "features", "isActive", "content"],
};
</script>

<style scoped>
.pricing-card {
  width: 300px;
  position: relative;
  border-radius: 10px;
  background-color: #ffffff83;
  backdrop-filter: blur(10px);
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
}

.pricing-card .details {
  width: 100%;
  height: 160px;
  background-image: url("/img/pricing-bg.png");
  background-size: contain;
  border-radius: 10px;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}

.pricing-card .details h2 {
  font-size: 24px;
  font-weight: bold;
}

.pricing-card .details h2 span {
  font-size: 20px;
  font-weight: bold;
}

.pricing-card .details h5 {
  font-size: 14px;
  font-weight: bolder;
  color: #505050;
}

.pricing-card .details .package {
  margin-top: 10px;
  width: 90%;
  padding: 10px 20px;
  background: #ffffff79;
  backdrop-filter: blur(10px);
  border-radius: 6px;
  color: #000;
  text-align: center;
}

.pricing-card .details .price {
  background-color: #fff;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border-radius: 6px;
  border: 1px solid rgb(177, 177, 177);
}

.pricing-card .features {
  padding-bottom: 75px;
}

.pricing-card:hover {
  background-color: #fff;
  transform: translateY(-15px);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
}

.button-container {
  bottom: 20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
