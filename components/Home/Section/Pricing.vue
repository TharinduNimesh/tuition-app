<template>
  <section class="py-5 bg-gray">
    <div class="section-header">
      <h3>Our Price</h3>
    </div>

    <div class="d-flex justify-content-center pb-4">
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

    <div class="row justify-content-center gap-4 py-5">
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
import cards from "~/assets/css/home/packages";

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
  background-color: rgb(240, 240, 240);
  overflow-x: hidden;
}
</style>
