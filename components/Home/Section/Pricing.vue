<template>
  <div class="container py-5">
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
          @click="togglePrices(true)"
          :disabled="isAnnually"
        >
          Annually
        </button>
        <button
          class="toggle-button btn btn-primary"
          @click="togglePrices(false)"
          :disabled="!isAnnually"
        >
          Monthly
        </button>
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-md-4" v-for="(card, index) in cards" :key="index">
        <div class="card mb-4" :class="{ active: card.isActive }">
          <div class="card-body">
            <h5 class="card-title text-center">{{ card.title }}</h5>
            <h1 class="card-price text-center">{{ card.price }}</h1>
            <hr>
            <p class="card-text text-center">{{ card.storage }}</p>
            <hr>
            <p class="card-text text-center">{{ card.users }}</p>
            <hr>
            <p class="card-text text-center">{{ card.send }}</p>
            <hr>
            <div class="d-flex justify-content-center">
              <button
                type="button"
                class="btn btn-primary active"
                data-bs-toggle="button"
                autocomplete="off"
                aria-pressed="true"
              >
                choose plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      isAnnually: true,
      cards: [
        {
          title: "Basic",
          price: "$199.99",
          storage: "500 GB Storage",
          users: "2 Users Allowed",
          send: "Send up to 3 GB",
          isActive: false,
        },
        {
          title: "Professional",
          price: "$249.99",
          storage: "1 TB Storage",
          users: "5 Users Allowed",
          send: "Send up to 10 GB",
          isActive: true,
        },
        {
          title: "Master",
          price: "$399.99",
          storage: "2 TB Storage",
          users: "10 Users Allowed",
          send: "Send up to 20 GB",
          isActive: false,
        },
      ],
    };
  },
  methods: {
    togglePrices(isAnnually) {
      this.isAnnually = isAnnually;

      this.cards.forEach((card) => {
        if (isAnnually) {
          // Set Annually prices
          card.price = "$199.99";
        } else {
          // Set Monthly prices
          if (card.title === "Basic") {
            card.price = "$19.99";
          } else if (card.title === "Professional") {
            card.price = "$24.99";
          } else if (card.title === "Master") {
            card.price = "$39.99";
          }
        }
      });
    },
  },
};
</script>
  