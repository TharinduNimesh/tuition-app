<template>
  <section class="py-5 bg-gray" id="pricing">
    <div class="section-header" data-aos="fade-up">
      <h3>Our Price</h3>
    </div>

    <div class="d-flex justify-content-center pb-4" data-aos="fade-up">
      <div
        class="btn-group item-center text-center"
        role="group"
        aria-label="Basic example"
      >
        <button
          class="toggle-button btn btn-primary"
          @click="togglePrices('annually')"
          :disabled="isAnnual"
        >
          Annually
        </button>
        <button
          class="toggle-button btn btn-primary"
          @click="togglePrices('monthly')"
          :disabled="!isAnnual"
        >
          Monthly
        </button>
      </div>
    </div>

    <div class="row justify-content-center gap-4 py-5" data-aos="fade-up">
      <HomePriceCard
        v-for="card in cards"
        :key="card.title"
        :name="card.title"
        :price="card.price[category]"
        :features="card.features"
        :is-active="card.isActive"
        :content="card.content"
      />
    </div>
  </section>
</template>

<script>
import cards from "~/assets/data/pricing-packages.js";

export default {
  data() {
    return {
      category: "monthly",
      cards,
    };
  },
  methods: {
    togglePrices(category) {
      this.category = category;
    },
  },
  computed: {
    isAnnual() {
      return this.category === "annually";
    },
  }
};
</script>

<style scoped>
.bg-gray {
  background-color: rgb(240, 240, 240) !important;
  overflow-x: hidden;
}
</style>
